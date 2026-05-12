import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Inicio,
})

function Inicio() {
  return (
    <div className="page-inicio">
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-grid" />
          <div className="hero-glow" />
        </div>
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Impresión 3D artesanal
          </div>
          <h1 className="hero-title">
            Del diseño<br />
            <em>a la realidad</em>
          </h1>
          <p className="hero-subtitle">
            Creamos piezas únicas con impresoras 3D de precisión. Cada objeto es
            fabricado con materiales de primera calidad y atención al detalle.
          </p>
          <div className="hero-actions">
            <Link to="/productos" className="btn-primary">
              Ver productos
            </Link>
            <Link to="/nosotros" className="btn-ghost">
              Nuestra historia
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-cube-wrapper">
            <div className="hero-cube">
              <div className="cube-face cube-face--front" />
              <div className="cube-face cube-face--back" />
              <div className="cube-face cube-face--left" />
              <div className="cube-face cube-face--right" />
              <div className="cube-face cube-face--top" />
              <div className="cube-face cube-face--bottom" />
            </div>
          </div>
          <div className="hero-particles">
            {[...Array(12)].map((_, i) => (
              <span key={i} className="particle" style={{ '--i': i } as React.CSSProperties} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="stats-grid">
          {[
            { valor: '+200', label: 'Piezas fabricadas' },
            { valor: '0.2mm', label: 'Precisión de capa' },
            { valor: '8', label: 'Colores disponibles' },
            { valor: '100%', label: 'Satisfacción garantizada' },
          ].map((s) => (
            <div key={s.label} className="stat-card">
              <span className="stat-valor">{s.valor}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ¿Qué hacemos? */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Servicios</span>
            <h2 className="section-title">¿Qué fabricamos?</h2>
          </div>
          <div className="services-grid">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                ),
                titulo: 'Objetos del hogar',
                texto: 'Maceteros, organizadores, decoración y accesorios funcionales para tu casa.',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
                  </svg>
                ),
                titulo: 'Accesorios únicos',
                texto: 'Llaveros, joyería, soportes y gadgets personalizados con tu diseño o el nuestro.',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/>
                  </svg>
                ),
                titulo: 'Prototipos y piezas',
                texto: 'Fabricación de prototipos técnicos, piezas de recambio y componentes a medida.',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                ),
                titulo: 'Diseño personalizado',
                texto: '¿Tienes una idea? La hacemos realidad. Diseño desde cero o adaptamos tu modelo.',
              },
            ].map((s) => (
              <div key={s.titulo} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <h3 className="service-titulo">{s.titulo}</h3>
                <p className="service-texto">{s.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-inner">
          <h2 className="cta-title">¿Listo para ver nuestro catálogo?</h2>
          <p className="cta-text">Explora nuestros productos disponibles con precios actualizados en tiempo real.</p>
          <Link to="/productos" className="btn-primary btn-large">
            Explorar productos
          </Link>
        </div>
      </section>

      {/* Contacto rápido */}
      <section className="contacto-section">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Contáctanos</span>
            <h2 className="section-title">¿Hablamos?</h2>
          </div>
          <div className="contacto-grid">
            <div className="contacto-card">
              <div className="contacto-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <span className="contacto-label">Email</span>
              <a href="mailto:hola@printforge.es" className="contacto-valor">hola@printforge.es</a>
            </div>
            <div className="contacto-card">
              <div className="contacto-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 .01h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
                </svg>
              </div>
              <span className="contacto-label">Teléfono</span>
              <a href="tel:+34600000000" className="contacto-valor">+34 600 000 000</a>
            </div>
            <div className="contacto-card">
              <div className="contacto-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <span className="contacto-label">Ubicación</span>
              <span className="contacto-valor">Madrid, España</span>
            </div>
            <div className="contacto-card">
              <div className="contacto-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <span className="contacto-label">Horario</span>
              <span className="contacto-valor">Lun–Vie 9:00–18:00</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
