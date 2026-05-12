# AGENTS.md — PrintForge Studio

Guía de arquitectura para agentes e IA que trabajen en este proyecto.

## Descripción

Catálogo web de impresión 3D en español. Permite mostrar productos con fotos, precios dinámicos calculados por fórmulas JavaScript y un panel de administración protegido por PIN.

## Estructura de directorios

```
src/
  routes/
    __root.tsx          # Layout raíz: header sticky, footer, fuentes Google
    index.tsx           # Página de inicio (hero, stats, servicios, contacto)
    productos.tsx       # Catálogo + panel admin de precios
    nosotros.tsx        # Sobre nosotros (historia, valores, proceso, equipamiento)
    links.tsx           # Redes sociales y recursos externos
    api.materiales.ts   # GET/PUT costes de materiales → Netlify Blobs
    api.productos.ts    # GET/POST/DELETE productos → Netlify Blobs
  styles.css            # Tema completo (design tokens, componentes, páginas)
  router.tsx            # Configuración del router
  components/ui/        # Primitivos Radix UI (Badge, Card, etc.) — apenas usados
content-collections.ts  # Config vacía (content-collections instalado pero sin uso)
```

## Almacenamiento de datos (Netlify Blobs)

Store: `impresion3d`

| Clave | Tipo | Descripción |
|-------|------|-------------|
| `config` | `ConfigMateriales` | Costes base de materiales |
| `productos` | `Producto[]` | Lista de productos del catálogo |

### Tipos clave

```ts
interface ConfigMateriales {
  costePorGramo: number             // €/g de filamento
  costeElectricidadPorHora: number  // €/h (electricidad + amortización)
  ultimaActualizacion: string       // ISO date
}

interface Producto {
  id: string
  nombre: string
  descripcion: string
  categoria: string
  imagen: string           // URL vacía = placeholder SVG
  pesoGramos: number
  tiempoHoras: number
  margenPorcentaje: number
  disponible: boolean
}
```

### Fórmula de precios

```
precioFinal = (pesoGramos * costePorGramo + tiempoHoras * costeElectricidad) * (1 + margen/100)
```

Calculada 100% en el cliente (React). El servidor solo guarda/sirve los datos.

## Convenciones

- **Idioma**: UI en español, código en inglés
- **Tipografía**: `Rajdhani` (headings) + `Nunito` (body) — Google Fonts
- **Colores**: Tema oscuro (`--forge-bg: #13120f`) con acento naranja (`--forge-accent: #f57c2a`)
- **CSS**: Variables CSS en `:root`, sin Tailwind utilities arbitrarias para el tema; Tailwind solo para utilidades genéricas
- **Admin PIN**: Hardcodeado como `'1234'` en `productos.tsx` — cambiar si se necesita más seguridad
- **Rutas API**: Pattern `api.<recurso>.ts` para endpoints, sin layout ni component

## Decisiones de diseño

- **Sin autenticación real**: La web es un escaparate personal; el PIN simple es suficiente para el caso de uso
- **Precios calculados en cliente**: El usuario solo necesita cambiar el coste del material; no tiene sentido almacenar precios calculados
- **Netlify Blobs en lugar de DB**: El dataset es pequeño y de escritura infrecuente; Blobs es apropiado y zero-config
- **Sin content-collections activo**: El portfolio original los usaba para blog/jobs; esta web no necesita contenido markdown
