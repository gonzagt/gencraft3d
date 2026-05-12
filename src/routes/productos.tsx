import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect, useCallback } from 'react'
import type { Producto } from './api.productos'
import type { ConfigMateriales } from './api.materiales'

export const Route = createFileRoute('/productos')({
  component: Productos,
})

function calcularPrecio(producto: Producto, config: ConfigMateriales): number {
  const costoMaterial = producto.pesoGramos * config.costePorGramo
  const costoElectricidad = producto.tiempoHoras * config.costeElectricidadPorHora
  const base = costoMaterial + costoElectricidad
  return base * (1 + producto.margenPorcentaje / 100)
}

const CATEGORIAS_COLORES: Record<string, string> = {
  Hogar: '#e67e22',
  Oficina: '#2980b9',
  Accesorios: '#8e44ad',
  Tecnología: '#27ae60',
  Decoración: '#c0392b',
}

function ProductoCard({
  producto,
  config,
  adminMode,
  onDelete,
  onToggle,
}: {
  producto: Producto
  config: ConfigMateriales
  adminMode: boolean
  onDelete: (id: string) => void
  onToggle: (id: string) => void
}) {
  const precio = calcularPrecio(producto, config)
  const costoBase =
    producto.pesoGramos * config.costePorGramo +
    producto.tiempoHoras * config.costeElectricidadPorHora
  const color = CATEGORIAS_COLORES[producto.categoria] ?? '#f57c2a'

  return (
    <div className={`producto-card ${!producto.disponible ? 'producto-card--inactivo' : ''}`}>
      <div className="producto-imagen" style={{ '--cat-color': color } as React.CSSProperties}>
        {producto.imagen ? (
          <img src={producto.imagen} alt={producto.nombre} />
        ) : (
          <div className="producto-imagen-placeholder">
            <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polygon points="32,6 58,20 58,44 32,58 6,44 6,20" opacity="0.3"/>
              <polygon points="32,16 48,24 48,40 32,48 16,40 16,24" opacity="0.5"/>
              <circle cx="32" cy="32" r="6"/>
            </svg>
            <span>Sin imagen</span>
          </div>
        )}
        <span className="producto-categoria" style={{ background: color }}>
          {producto.categoria}
        </span>
        {!producto.disponible && <div className="producto-no-disponible">No disponible</div>}
      </div>
      <div className="producto-body">
        <h3 className="producto-nombre">{producto.nombre}</h3>
        <p className="producto-descripcion">{producto.descripcion}</p>
        <div className="producto-detalles">
          <span className="producto-detalle">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M8 2l6 3v6l-6 3-6-3V5z"/>
            </svg>
            {producto.pesoGramos}g
          </span>
          <span className="producto-detalle">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="8" cy="8" r="6"/><path d="M8 4v4l3 2"/>
            </svg>
            {producto.tiempoHoras}h
          </span>
        </div>
        <div className="producto-precio-section">
          <div className="producto-precio-main">
            <span className="producto-precio">{precio.toFixed(2)} €</span>
            {adminMode && (
              <span className="producto-precio-base">Base: {costoBase.toFixed(2)} €</span>
            )}
          </div>
          {adminMode && (
            <span className="producto-margen">+{producto.margenPorcentaje}% margen</span>
          )}
        </div>
        {adminMode && (
          <div className="producto-admin-actions">
            <button
              className="btn-admin-toggle"
              onClick={() => onToggle(producto.id)}
              title={producto.disponible ? 'Ocultar producto' : 'Mostrar producto'}
            >
              {producto.disponible ? (
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M1 10S4 4 10 4s9 6 9 6-3 6-9 6-9-6-9-6z"/><circle cx="10" cy="10" r="2.5"/>
                </svg>
              ) : (
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 3l14 14M10 4C5.58 4 1.9 8.36 1.1 9.64a1 1 0 000 .72C2.32 12.19 5.67 16 10 16a8.7 8.7 0 004.54-1.31M14.5 14.5A8.36 8.36 0 0018.9 10.36a1 1 0 000-.72A9.7 9.7 0 0014.5 5.5"/>
                </svg>
              )}
              {producto.disponible ? 'Ocultar' : 'Mostrar'}
            </button>
            <button
              className="btn-admin-delete"
              onClick={() => onDelete(producto.id)}
              title="Eliminar producto"
            >
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polyline points="3,6 17,6"/><path d="M8 6V4h4v2"/><rect x="4" y="6" width="12" height="12" rx="1"/>
                <line x1="9" y1="10" x2="9" y2="14"/><line x1="11" y1="10" x2="11" y2="14"/>
              </svg>
              Eliminar
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

function NuevoProductoForm({
  onAdd,
  onCancel,
}: {
  onAdd: (p: Omit<Producto, 'id'>) => void
  onCancel: () => void
}) {
  const [form, setForm] = useState({
    nombre: '',
    descripcion: '',
    categoria: 'Hogar',
    imagen: '',
    pesoGramos: 100,
    tiempoHoras: 3,
    margenPorcentaje: 40,
    disponible: true,
  })

  const categorias = ['Hogar', 'Oficina', 'Accesorios', 'Tecnología', 'Decoración', 'Otro']

  function set<K extends keyof typeof form>(k: K, v: (typeof form)[K]) {
    setForm((f) => ({ ...f, [k]: v }))
  }

  return (
    <div className="nuevo-producto-form">
      <h3 className="form-titulo">Nuevo producto</h3>
      <div className="form-grid">
        <label className="form-field">
          <span>Nombre</span>
          <input value={form.nombre} onChange={(e) => set('nombre', e.target.value)} placeholder="Nombre del producto" />
        </label>
        <label className="form-field">
          <span>Categoría</span>
          <select value={form.categoria} onChange={(e) => set('categoria', e.target.value)}>
            {categorias.map((c) => <option key={c}>{c}</option>)}
          </select>
        </label>
        <label className="form-field form-field--full">
          <span>Descripción</span>
          <textarea value={form.descripcion} onChange={(e) => set('descripcion', e.target.value)} rows={2} placeholder="Descripción del producto" />
        </label>
        <label className="form-field">
          <span>URL imagen (opcional)</span>
          <input value={form.imagen} onChange={(e) => set('imagen', e.target.value)} placeholder="https://..." />
        </label>
        <label className="form-field">
          <span>Peso en gramos</span>
          <input type="number" value={form.pesoGramos} min={1} onChange={(e) => set('pesoGramos', Number(e.target.value))} />
        </label>
        <label className="form-field">
          <span>Tiempo impresión (horas)</span>
          <input type="number" value={form.tiempoHoras} min={0.1} step={0.25} onChange={(e) => set('tiempoHoras', Number(e.target.value))} />
        </label>
        <label className="form-field">
          <span>Margen de ganancia (%)</span>
          <input type="number" value={form.margenPorcentaje} min={0} max={500} onChange={(e) => set('margenPorcentaje', Number(e.target.value))} />
        </label>
      </div>
      <div className="form-actions">
        <button className="btn-primary" onClick={() => { if (form.nombre) onAdd(form) }}>
          Añadir producto
        </button>
        <button className="btn-ghost" onClick={onCancel}>Cancelar</button>
      </div>
    </div>
  )
}

export default function Productos() {
  const [productos, setProductos] = useState<Producto[]>([])
  const [config, setConfig] = useState<ConfigMateriales>({
    costePorGramo: 0.025,
    costeElectricidadPorHora: 0.5,
    ultimaActualizacion: '',
  })
  const [loading, setLoading] = useState(true)
  const [adminMode, setAdminMode] = useState(false)
  const [adminPin, setAdminPin] = useState('')
  const [pinError, setPinError] = useState(false)
  const [showPinInput, setShowPinInput] = useState(false)
  const [showNuevoForm, setShowNuevoForm] = useState(false)
  const [saving, setSaving] = useState(false)
  const [categoriaFiltro, setCategoriaFiltro] = useState('Todos')
  const [localConfig, setLocalConfig] = useState({ costePorGramo: 0.025, costeElectricidadPorHora: 0.5 })

  const ADMIN_PIN = '1234'

  useEffect(() => {
    Promise.all([
      fetch('/api/productos').then((r) => r.json()),
      fetch('/api/materiales').then((r) => r.json()),
    ]).then(([prods, cfg]) => {
      setProductos(prods)
      setConfig(cfg)
      setLocalConfig({ costePorGramo: cfg.costePorGramo, costeElectricidadPorHora: cfg.costeElectricidadPorHora })
      setLoading(false)
    }).catch(() => setLoading(false))
  }, [])

  const handlePinSubmit = () => {
    if (adminPin === ADMIN_PIN) {
      setAdminMode(true)
      setShowPinInput(false)
      setPinError(false)
      setAdminPin('')
    } else {
      setPinError(true)
    }
  }

  const handleSaveConfig = useCallback(async () => {
    setSaving(true)
    const res = await fetch('/api/materiales', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(localConfig),
    })
    const updated = await res.json()
    setConfig(updated)
    setSaving(false)
  }, [localConfig])

  const handleDelete = useCallback(async (id: string) => {
    if (!confirm('¿Eliminar este producto?')) return
    await fetch(`/api/productos?id=${id}`, { method: 'DELETE' })
    setProductos((p) => p.filter((x) => x.id !== id))
  }, [])

  const handleToggle = useCallback(async (id: string) => {
    const updated = productos.map((p) =>
      p.id === id ? { ...p, disponible: !p.disponible } : p
    )
    setProductos(updated)
    await fetch('/api/productos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated),
    })
  }, [productos])

  const handleAdd = useCallback(async (p: Omit<Producto, 'id'>) => {
    const res = await fetch('/api/productos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(p),
    })
    const nuevo = await res.json()
    setProductos((prev) => [...prev, nuevo])
    setShowNuevoForm(false)
  }, [])

  const categoriasDisponibles = ['Todos', ...Array.from(new Set(productos.map((p) => p.categoria)))]
  const productosFiltrados = categoriaFiltro === 'Todos'
    ? productos
    : productos.filter((p) => p.categoria === categoriaFiltro)
  const productosVisibles = adminMode ? productosFiltrados : productosFiltrados.filter((p) => p.disponible)

  return (
    <div className="page-productos">
      <div className="productos-hero">
        <div className="productos-hero-content">
          <span className="section-tag">Catálogo</span>
          <h1 className="productos-hero-title">Nuestros Productos</h1>
          <p className="productos-hero-subtitle">
            Precios calculados en tiempo real según el coste actual de los materiales.
          </p>
        </div>
      </div>

      <div className="productos-main">
        {/* Admin toggle */}
        <div className="admin-bar">
          {!adminMode ? (
            <>
              {!showPinInput ? (
                <button className="btn-admin" onClick={() => setShowPinInput(true)}>
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="9" width="14" height="10" rx="1"/>
                    <path d="M7 9V6a3 3 0 016 0v3"/>
                  </svg>
                  Modo admin
                </button>
              ) : (
                <div className="pin-input-row">
                  <input
                    type="password"
                    value={adminPin}
                    onChange={(e) => { setAdminPin(e.target.value); setPinError(false) }}
                    onKeyDown={(e) => e.key === 'Enter' && handlePinSubmit()}
                    placeholder="PIN de administrador"
                    className={pinError ? 'input-error' : ''}
                    autoFocus
                  />
                  <button className="btn-primary" onClick={handlePinSubmit}>Acceder</button>
                  <button className="btn-ghost" onClick={() => { setShowPinInput(false); setAdminPin('') }}>Cancelar</button>
                  {pinError && <span className="error-msg">PIN incorrecto</span>}
                </div>
              )}
            </>
          ) : (
            <div className="admin-active-bar">
              <span className="admin-badge">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M8 1l2 4.5L15 6.5l-3.5 3.4.8 4.8L8 12.4l-4.3 2.3.8-4.8L1 6.5l5-.8z"/>
                </svg>
                Modo administrador activo
              </span>
              <button className="btn-ghost btn-sm" onClick={() => setAdminMode(false)}>
                Salir
              </button>
            </div>
          )}
        </div>

        {/* Panel de costes */}
        {adminMode && (
          <div className="costes-panel">
            <div className="costes-panel-header">
              <h2 className="costes-panel-title">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="10" cy="10" r="9"/>
                  <path d="M10 6v4l3 3"/>
                </svg>
                Configuración de costes de materiales
              </h2>
              <p className="costes-panel-subtitle">
                Modifica estos valores para actualizar automáticamente los precios de todos los productos.
              </p>
            </div>
            <div className="costes-inputs">
              <label className="coste-field">
                <span className="coste-label">Coste del filamento</span>
                <div className="coste-input-row">
                  <input
                    type="number"
                    value={localConfig.costePorGramo}
                    step={0.001}
                    min={0.001}
                    onChange={(e) => setLocalConfig((c) => ({ ...c, costePorGramo: Number(e.target.value) }))}
                  />
                  <span className="coste-unit">€ / gramo</span>
                </div>
                <span className="coste-hint">Precio por gramo de material impreso</span>
              </label>
              <label className="coste-field">
                <span className="coste-label">Coste eléctrico</span>
                <div className="coste-input-row">
                  <input
                    type="number"
                    value={localConfig.costeElectricidadPorHora}
                    step={0.05}
                    min={0.01}
                    onChange={(e) => setLocalConfig((c) => ({ ...c, costeElectricidadPorHora: Number(e.target.value) }))}
                  />
                  <span className="coste-unit">€ / hora</span>
                </div>
                <span className="coste-hint">Electricidad + amortización de la impresora</span>
              </label>
              <div className="coste-formula-box">
                <span className="coste-formula-title">Fórmula de precio</span>
                <code className="coste-formula">
                  Precio = (peso × {localConfig.costePorGramo}€/g + tiempo × {localConfig.costeElectricidadPorHora}€/h) × (1 + margen%)
                </code>
                {config.ultimaActualizacion && (
                  <span className="coste-ultima">
                    Última actualización: {new Date(config.ultimaActualizacion).toLocaleString('es-ES')}
                  </span>
                )}
              </div>
            </div>
            <button className="btn-primary btn-save" onClick={handleSaveConfig} disabled={saving}>
              {saving ? 'Guardando...' : 'Guardar cambios'}
            </button>
          </div>
        )}

        {/* Filtros */}
        <div className="filtros-bar">
          <div className="filtros-categorias">
            {categoriasDisponibles.map((cat) => (
              <button
                key={cat}
                className={`filtro-btn ${categoriaFiltro === cat ? 'filtro-btn--active' : ''}`}
                onClick={() => setCategoriaFiltro(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          {adminMode && (
            <button className="btn-add-product" onClick={() => setShowNuevoForm(true)}>
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="10" y1="4" x2="10" y2="16"/><line x1="4" y1="10" x2="16" y2="10"/>
              </svg>
              Añadir producto
            </button>
          )}
        </div>

        {showNuevoForm && (
          <NuevoProductoForm onAdd={handleAdd} onCancel={() => setShowNuevoForm(false)} />
        )}

        {/* Grid de productos */}
        {loading ? (
          <div className="productos-skeleton">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="skeleton-card">
                <div className="skeleton-img" />
                <div className="skeleton-body">
                  <div className="skeleton-line skeleton-line--short" />
                  <div className="skeleton-line" />
                  <div className="skeleton-line skeleton-line--medium" />
                  <div className="skeleton-price" />
                </div>
              </div>
            ))}
          </div>
        ) : productosVisibles.length === 0 ? (
          <div className="empty-state">
            <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polygon points="32,6 58,20 58,44 32,58 6,44 6,20" opacity="0.4"/>
              <circle cx="32" cy="32" r="10" opacity="0.6"/>
              <line x1="24" y1="24" x2="40" y2="40"/><line x1="40" y1="24" x2="24" y2="40"/>
            </svg>
            <p>No hay productos en esta categoría.</p>
          </div>
        ) : (
          <div className="productos-grid">
            {productosVisibles.map((p) => (
              <ProductoCard
                key={p.id}
                producto={p}
                config={config}
                adminMode={adminMode}
                onDelete={handleDelete}
                onToggle={handleToggle}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
