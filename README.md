# Centro Comercial Fiesta Suba

Sitio web institucional y panel administrativo para gestionar tiendas, promociones y eventos del centro comercial.

## Secciones principales

- Inicio con destacados comerciales y agenda.
- Tiendas y locales.
- Promociones.
- Eventos.
- Contacto.
- Locales disponibles para alquiler, venta y formatos temporales.
- Panel administrativo protegido para gestionar contenido.

## Desarrollo local

Ejecuta:

```bash
npm install
npm run dev
```

Abre http://localhost:3000.

## Variables de entorno recomendadas

En desarrollo existen valores por defecto para acceso admin. Para producción debes definir como mínimo:

```env
ADMIN_USERNAME=admin
ADMIN_PASSWORD=una-clave-segura
ADMIN_SESSION_TOKEN=un-token-largo-y-unico
```

## Build de producción

```bash
npm run build
npm run start
```

## Datos del sitio

El contenido se almacena en archivos JSON dentro de la carpeta data:

- tiendas.json
- promociones.json
- eventos.json
- locales-disponibles.json
