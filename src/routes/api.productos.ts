import { createFileRoute } from '@tanstack/react-router'
import { getStore } from '@netlify/blobs'

export interface Producto {
  id: string
  nombre: string
  descripcion: string
  categoria: string
  imagen: string
  pesoGramos: number
  tiempoHoras: number
  margenPorcentaje: number
  disponible: boolean
}

const PRODUCTOS_INICIALES: Producto[] = [
  {
    id: '1',
    nombre: 'Macetero Geométrico',
    descripcion: 'Diseño moderno con formas hexagonales. Perfecto para suculentas y cactus. Con orificio de drenaje.',
    categoria: 'Hogar',
    imagen: '',
    pesoGramos: 120,
    tiempoHoras: 4.5,
    margenPorcentaje: 35,
    disponible: true,
  },
  {
    id: '2',
    nombre: 'Organizador de Escritorio',
    descripcion: 'Compartimentos múltiples para bolígrafos, clips y material de oficina. Estilo minimalista.',
    categoria: 'Oficina',
    imagen: '',
    pesoGramos: 200,
    tiempoHoras: 7,
    margenPorcentaje: 35,
    disponible: true,
  },
  {
    id: '3',
    nombre: 'Llavero Personalizado',
    descripcion: 'Llavero resistente con texto o diseño personalizado. Varios colores disponibles.',
    categoria: 'Accesorios',
    imagen: '',
    pesoGramos: 15,
    tiempoHoras: 0.75,
    margenPorcentaje: 60,
    disponible: true,
  },
  {
    id: '4',
    nombre: 'Soporte para Móvil',
    descripcion: 'Soporte ajustable para teléfono, compatible con todos los tamaños. Plegable y compacto.',
    categoria: 'Tecnología',
    imagen: '',
    pesoGramos: 85,
    tiempoHoras: 3,
    margenPorcentaje: 40,
    disponible: true,
  },
  {
    id: '5',
    nombre: 'Figura Decorativa Abstracta',
    descripcion: 'Escultura de diseño contemporáneo. Cada pieza es única, ideal como regalo o decoración.',
    categoria: 'Decoración',
    imagen: '',
    pesoGramos: 160,
    tiempoHoras: 6,
    margenPorcentaje: 45,
    disponible: true,
  },
  {
    id: '6',
    nombre: 'Clip de Cables',
    descripcion: 'Organizador de cables para escritorio. Pack de 6 unidades. Fácil instalación adhesiva.',
    categoria: 'Oficina',
    imagen: '',
    pesoGramos: 30,
    tiempoHoras: 1.5,
    margenPorcentaje: 55,
    disponible: true,
  },
]

async function getProductos(): Promise<Producto[]> {
  const store = getStore('impresion3d')
  const data = await store.get('productos', { type: 'json' })
  if (!data) {
    await store.setJSON('productos', PRODUCTOS_INICIALES)
    return PRODUCTOS_INICIALES
  }
  return data as Producto[]
}

export const Route = createFileRoute('/api/productos')({
  server: {
    handlers: {
      GET: async () => {
        try {
          const productos = await getProductos()
          return Response.json(productos)
        } catch {
          return Response.json(PRODUCTOS_INICIALES)
        }
      },
      POST: async ({ request }) => {
        try {
          const body = (await request.json()) as Producto | Producto[]
          const store = getStore('impresion3d')
          if (Array.isArray(body)) {
            await store.setJSON('productos', body)
            return Response.json(body)
          }
          const productos = await getProductos()
          const newProduct = { ...body, id: Date.now().toString() }
          const updated = [...productos, newProduct]
          await store.setJSON('productos', updated)
          return Response.json(newProduct, { status: 201 })
        } catch {
          return Response.json({ error: 'Error al guardar producto' }, { status: 500 })
        }
      },
      DELETE: async ({ request }) => {
        try {
          const url = new URL(request.url)
          const id = url.searchParams.get('id')
          if (!id) {
            return Response.json({ error: 'ID requerido' }, { status: 400 })
          }
          const productos = await getProductos()
          const updated = productos.filter((p) => p.id !== id)
          const store = getStore('impresion3d')
          await store.setJSON('productos', updated)
          return Response.json({ ok: true })
        } catch {
          return Response.json({ error: 'Error al eliminar' }, { status: 500 })
        }
      },
    },
  },
})
