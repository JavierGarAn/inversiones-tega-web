# Master Specification: Web Corporativa Inversiones Tega B2B

## 1. Identidad Corporativa y Datos Oficiales
- **Razón Social:** Inversiones Tega (RUC 10)
- **Almacén Central y Despacho:** Av. Túpac Amaru 378, El Agustino, Lima - Perú
- **Distribución Directa:** Desde Almacén Central El Agustino hacia obras en Lima y agencias de transporte (Shalom y Marvisur) para provincias.
- **Sucursales / Puntos de Atención:** Sucursales en Las Malvinas, Lima.
- **Canal Oficial WhatsApp:** Enlaces directos a WhatsApp oficial (+51 976 670 599) presentados como botones de acción sin exponer el número explícito en texto visible de la interfaz.
- **Correo Institucional:** admin@inversionestega.pe
- **Dominio Principal:** https://inversionestega.pe

## 2. Paleta de Colores y Estilo Visual (Clean White & Emerald B2B)
- **Fondo Principal:** `#FFFFFF` y tonalidades claras `#F8FAFC` / `#F1F5F9`
- **Tarjetas y Contenedores:** `#FFFFFF` con bordes sutiles `#E2E8F0` / `#E5E7EB` y sombras suaves
- **Bordes e Interfaz:** `#E2E8F0` / `#CBD5E1`
- **Acento Principal (Esmeralda Tega):** `#16A34A` / `#22C55E`
- **Acento Secundario (Verde Bosque / Corporativo):** `#0F3820` y `#15803D`
- **Tonalidades de fondo suave para badges:** `#F0FDF4` / `#DCFCE7`
- **Texto Principal:** `#0F172A` (Slate 900)
- **Texto Secundario / Muted:** `#475569` / `#64748B`
- **Tipografía:** Sans-serif limpia (Inter / System UI)

## 3. Reglas de Negocio Cruciales (¡NO MODIFICAR!)
1. **CERO ETIQUETAS DE STOCK:** Ningún producto en la web debe mostrar "Stock disponible", "En stock" ni unidades en almacén. Todo se cotiza bajo pedido por volumen.
2. **CONTACTO VÍA BOTÓN WHATSAPP:** Los botones dirigen al WhatsApp oficial de Tega (+51 976 670 599), pero no se debe mostrar el número en texto directo ("+51 976...") en las tarjetas, cabeceras ni botones.
3. **LOGÍSTICA Y PUNTOS FÍSICOS:** Destacar Almacén Central en El Agustino, distribución directa y sucursales en Malvinas.
4. **ARQUITECTURA DE NAVEGACIÓN:** SPA interactiva con vistas dinámicas (`index.html`) sin recargas bruscas.

## 4. Estructura de Secciones / Módulos
1. **Top Bar B2B:**
   - Almacén Central en El Agustino & Sucursales en Malvinas | Distribución directa y agencias Shalom/Marvisur | Respuesta < 2h | Lun - Sáb: 8:00 am - 6:30 pm.
2. **Inicio (`#inicio`):**
   - Hero con propuesta de valor B2B para contratistas e inmobiliarias.
   - Cartera real de clientes: Grupo T&C, Grupo Royal, Urban, Alanco, Cissac, Inmobiliaria Jakamar, Leven, San Charbel.
   - Franja de Marcas Homologadas (3M, MSA, Pavco Vinilit, Tuboplast, Truper, Stanley, Delta Plus, Clute) y Sellos Normativos (NTP, ANSI, ASTM, ISO).
   - Packs de Suministro por Etapa de Obra (SSOMA, Acabados, Perímetro).
3. **Nosotros (`#nosotros`):**
   - Misión, Visión a 5 años, 5 Valores.
   - Estructura Organizacional.
   - Almacén Central El Agustino y Sucursales en Malvinas con fotos de almacén y logística.
4. **Catálogo B2B (`#catalogo`):**
   - 6 Líneas Oficiales con selector de subcategorías e ítems específicos cotizables sin stock ni precios: EPP's, Herramientas, Señaléticas, Cartón Corrugado, Plásticos/Mallas, Suministros PVC.
   - Cotizador flotante interactivo (Genera lista y la envía a WhatsApp).
   - Botón de solicitud de Ficha Técnica / Homologación SSOMA vía WhatsApp.
5. **Visitas a Obras (`#obras`):**
   - Galería de evidencia fotográfica de despachos a obras y agencias de transporte con Lightbox.
   - Cobertura con Almacén Central en El Agustino y Sucursales en Malvinas.
6. **Cotización Express (`#cotizar`):**
   - Formulario directo con razón social, RUC y detalle de requerimientos para envío inmediato a WhatsApp.
   - Tarjetas de contacto institucional (WhatsApp directo sin texto del número, Correo y Dirección física).

## 5. Instrucciones de Despliegue para Antigravity
- Mantener el proyecto como HTML/Tailwind CDN estático o estructurado para Vercel Framework `Other` (Static HTML).
- Incluir `vercel.json` estático:
  ```json
  {
    "version": 2,
    "cleanUrls": true,
    "trailingSlash": false
  }
  ```

  ```