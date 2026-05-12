# PrintForge Studio — Catálogo de Impresión 3D

Una web de escaparate para productos de impresión 3D con gestión dinámica de precios basada en costes de materiales.

## Tecnologías principales

| Capa | Tecnología |
|------|-----------|
| Framework | TanStack Start (React 19 + SSR) |
| Enrutamiento | TanStack Router v1 (file-based) |
| Build | Vite 7 |
| Estilos | Tailwind CSS 4 |
| Persistencia | Netlify Blobs (key-value JSON) |
| Despliegue | Netlify |
| Lenguaje | TypeScript 5.7 (strict) |

## Características

- **Inicio** — Hero animado, stats, servicios y datos de contacto
- **Nuestros Productos** — Catálogo con precios calculados automáticamente según coste de materiales
- **Sobre Nosotros** — Historia, valores, proceso y equipamiento
- **Nuestros Links** — Redes sociales y recursos de la comunidad
- **Panel de administración** — Actualiza el coste por gramo de filamento y los precios se recalculan al instante (PIN: `1234`)

## Fórmula de precios

```
Precio = (pesoGramos × costePorGramo + tiempoHoras × costeElectricidadPorHora) × (1 + margen%)
```

Los costes base se guardan en Netlify Blobs y se pueden modificar desde el panel admin de la página de productos.

## Cómo ejecutar localmente

```bash
npm install
npm run dev          # http://localhost:3000
```

O con la CLI de Netlify (para emulación completa incluyendo Blobs):

```bash
netlify dev          # http://localhost:8888
```

## Variables de entorno

No son necesarias para el funcionamiento básico. Para cambiar el PIN de administrador, edita la constante `ADMIN_PIN` en `src/routes/productos.tsx`.
