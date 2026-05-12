import { createFileRoute } from '@tanstack/react-router'
import { getStore } from '@netlify/blobs'

export interface ConfigMateriales {
  costePorGramo: number
  costeElectricidadPorHora: number
  ultimaActualizacion: string
}

const DEFAULT_CONFIG: ConfigMateriales = {
  costePorGramo: 0.025,
  costeElectricidadPorHora: 0.5,
  ultimaActualizacion: new Date().toISOString(),
}

async function getConfig(): Promise<ConfigMateriales> {
  const store = getStore('impresion3d')
  const data = await store.get('config', { type: 'json' })
  return (data as ConfigMateriales) ?? DEFAULT_CONFIG
}

export const Route = createFileRoute('/api/materiales')({
  server: {
    handlers: {
      GET: async () => {
        try {
          const config = await getConfig()
          return Response.json(config)
        } catch {
          return Response.json(DEFAULT_CONFIG)
        }
      },
      PUT: async ({ request }) => {
        try {
          const body = (await request.json()) as Partial<ConfigMateriales>
          const current = await getConfig()
          const updated: ConfigMateriales = {
            costePorGramo:
              typeof body.costePorGramo === 'number'
                ? body.costePorGramo
                : current.costePorGramo,
            costeElectricidadPorHora:
              typeof body.costeElectricidadPorHora === 'number'
                ? body.costeElectricidadPorHora
                : current.costeElectricidadPorHora,
            ultimaActualizacion: new Date().toISOString(),
          }
          const store = getStore('impresion3d')
          await store.setJSON('config', updated)
          return Response.json(updated)
        } catch (err) {
          return Response.json({ error: 'Error al guardar configuración' }, { status: 500 })
        }
      },
    },
  },
})
