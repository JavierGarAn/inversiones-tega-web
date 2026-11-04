const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const BASE_DIR = __dirname;
const PUBLIC_DIR = path.join(BASE_DIR, 'public');
const ASSETS_DIR = path.join(PUBLIC_DIR, 'assets');
const DB_FILE = path.join(BASE_DIR, 'data', 'db.json');

// Ensure directories exist
if (!fs.existsSync(ASSETS_DIR)) fs.mkdirSync(ASSETS_DIR, { recursive: true });
if (!fs.existsSync(path.dirname(DB_FILE))) fs.mkdirSync(path.dirname(DB_FILE), { recursive: true });

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.mp4': 'video/mp4'
};

function readDB() {
  try {
    if (fs.existsSync(DB_FILE)) {
      return JSON.parse(fs.readFileSync(DB_FILE, 'utf-8'));
    }
  } catch (e) {
    console.error('Error reading DB:', e);
  }
  return { products: [], clients: [], settings: {} };
}

function writeDB(data) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (e) {
    console.error('Error writing DB:', e);
    return false;
  }
}

function parseJsonBody(req, callback) {
  let body = '';
  req.on('data', chunk => {
    body += chunk;
    if (body.length > 60 * 1024 * 1024) { // 60MB max
      req.destroy();
    }
  });
  req.on('end', () => {
    try {
      const data = JSON.parse(body);
      callback(null, data);
    } catch (e) {
      callback(e, null);
    }
  });
}

const server = http.createServer((req, res) => {
  const urlParts = req.url.split('?');
  const urlPath = urlParts[0];

  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // ══════════════════════════════════════════════════════════════
  //   API ENDPOINTS
  // ══════════════════════════════════════════════════════════════

  // 1. GET /api/data
  if (urlPath === '/api/data' && req.method === 'GET') {
    const data = readDB();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
    return;
  }

  // 2. POST /api/products (Save/update products list)
  if (urlPath === '/api/products' && req.method === 'POST') {
    parseJsonBody(req, (err, payload) => {
      if (err || !payload || !Array.isArray(payload.products)) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Payload inválido. Se esperaba { products: [...] }' }));
        return;
      }
      const db = readDB();
      db.products = payload.products;
      if (db.settings) db.settings.updatedAt = new Date().toISOString();
      writeDB(db);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true, count: db.products.length }));
    });
    return;
  }

  // 3. POST /api/clients (Save/update clients list)
  if (urlPath === '/api/clients' && req.method === 'POST') {
    parseJsonBody(req, (err, payload) => {
      if (err || !payload || !Array.isArray(payload.clients)) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Payload inválido. Se esperaba { clients: [...] }' }));
        return;
      }
      const db = readDB();
      db.clients = payload.clients;
      if (db.settings) db.settings.updatedAt = new Date().toISOString();
      writeDB(db);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true, count: db.clients.length }));
    });
    return;
  }

  // 4. POST /api/upload (Upload photo or video via Base64)
  if (urlPath === '/api/upload' && req.method === 'POST') {
    parseJsonBody(req, (err, payload) => {
      if (err || !payload || !payload.fileName || !payload.fileData) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Se requiere fileName y fileData (base64)' }));
        return;
      }

      try {
        // Clean filename
        const safeName = payload.fileName.replace(/[^a-zA-Z0-9._-]/g, '_');
        const timestamp = Date.now();
        const finalName = `${timestamp}_${safeName}`;
        const targetPath = path.join(ASSETS_DIR, finalName);

        // Extract base64 content
        let base64Data = payload.fileData;
        if (base64Data.includes('base64,')) {
          base64Data = base64Data.split('base64,')[1];
        }

        const buffer = Buffer.from(base64Data, 'base64');
        fs.writeFileSync(targetPath, buffer);

        const publicUrl = `/assets/${finalName}`;
        console.log(`[UPLOAD] Guardado archivo: ${targetPath} (${buffer.length} bytes)`);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          success: true,
          fileName: finalName,
          url: publicUrl,
          size: buffer.length
        }));
      } catch (uploadErr) {
        console.error('Error saving uploaded file:', uploadErr);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Error al guardar el archivo en el servidor' }));
      }
    });
    return;
  }

  // ══════════════════════════════════════════════════════════════
  //   STATIC FILES & SPA ROUTING
  // ══════════════════════════════════════════════════════════════
  let cleanPath = decodeURIComponent(urlPath === '/' ? '/index.html' : urlPath);

  // If path is /admin or /admin/
  if (cleanPath === '/admin' || cleanPath === '/admin/') {
    cleanPath = '/admin.html';
  }

  // Candidate paths:
  let filePath = path.join(BASE_DIR, cleanPath);
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(PUBLIC_DIR, cleanPath);
  }

  // SPA fallback to index.html if file doesn't exist (unless it's an API route)
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    if (cleanPath.startsWith('/admin')) {
      filePath = path.join(BASE_DIR, 'admin.html');
    } else {
      filePath = path.join(BASE_DIR, 'index.html');
    }
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Error 404: Archivo no encontrado');
      return;
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  });
});

server.listen(PORT, () => {
  console.log(`🚀 Inversiones Tega B2B server running at http://localhost:${PORT}/`);
  console.log(`⚙️  Admin Dashboard activo en: http://localhost:${PORT}/admin`);
});
