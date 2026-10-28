# Master Specification: Web Corporativa Inversiones Tega B2B

## 1. Identidad Corporativa y Datos Oficiales
- **Razón Social:** Inversiones Tega (RUC 10)
- **Dirección Física:** Av. Túpac Amaru 378, El Agustino, Lima - Perú
- **Teléfono Oficial Único (WhatsApp y Llamadas):** +51 976 670 599
- **Correo Institucional:** admin@inversionestega.pe
- **Dominio Principal:** https://inversionestega.pe

## 2. Paleta de Colores y Estilo Visual
- **Fondo Principal:** `#070A08` (Negro Carbón Industrial)
- **Tarjetas y Contenedores:** `#111613` (Verde Oscuro B2B)
- **Bordes e Interfaz:** `#1E2922`
- **Acento Principal (Esmeralda):** `#22C55E`
- **Acento Secundario:** `#125028` y `#4D8A5B`
- **Tipografía:** Sans-serif limpia (Inter / System UI)

## 3. Reglas de Negocio Cruciales (¡NO MODIFICAR!)
1. **CERO ETIQUETAS DE STOCK:** Ningún producto en la web debe mostrar "Stock disponible", "En stock" ni unidades en almacén. Todo se cotiza bajo pedido por volumen.
2. **CONTACTO ÚNICO:** El único número oficial para WhatsApp, llamadas y cotizaciones es **+51 976 670 599**. Reemplazar cualquier otro número.
3. **ARQUITECTURA DE NAVEGACIÓN:** Usar una arquitectura Single Page Application (SPA) con vistas dinámicas mediante JavaScript (`index.html`) o rutas estáticas limpiezas sin recargas bruscas.

## 4. Estructura de Secciones / Módulos
1. **Inicio (`#inicio`):**
   - Hero con propuesta de valor B2B para contratistas e inmobiliarias.
   - Cartera real de clientes: Grupo T&C, Grupo Royal, Urban, Alanco, Cissac, Inmobiliaria Jakamar.
   - Cobertura nacional (El Agustino / Agencias Shalom y Marvisur).
2. **Nosotros (`#nosotros`):**
   - Misión: "Ofrecer soluciones integrales en ferretería con calidad, asesoría, servicio ágil para obras seguras y productivas."
   - Visión: "Ser la ferretería líder en construcción e inmobiliaria en 5 años, destacando por innovación, servicio de excelencia y asesoría técnica, con mayor participación en proyectos clave y expansión regional."
   - 5 Valores: Calidad, Confianza, Sostenibilidad, Innovación, Compromiso.
   - Organigrama: Gerencia General, Logística y Almacén, Departamento de Ventas, Marketing y Publicidad, Atención al Cliente.
3. **Catálogo B2B (`#catalogo`):**
   - 6 Líneas Oficiales: EPP's, Herramientas, Señaléticas, Cartón Corrugado, Plásticos/Mallas, Suministros PVC.
   - Cotizador flotante interactivo (Genera lista y la envía a WhatsApp).
4. **Visitas a Obras (`#obras`):**
   - Galería de evidencia fotográfica de despachos a obras y agencias de transporte.
5. **Cotización Express (`#cotizar`):**
   - Formulario directo con razón social, RUC y detalle de requerimientos para envío inmediato a WhatsApp (+51 976 670 599) o correo.

## 5. Instrucciones de Despliegue para Antigravity
- Mantener el proyecto como HTML/Tailwind CDN estático o estructurado para Vercel Framework `Other` (Static HTML).
- Incluir `vercel.json` estático:
  ```json
  {
    "version": 2,
    "cleanUrls": true,
    "trailingSlash": false
  }