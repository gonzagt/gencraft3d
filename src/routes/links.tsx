import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/links')({
  component: Links,
})

const LINKS = [
  {
    categoria: 'Redes sociales',
    items: [
      {
        nombre: 'Instagram',
        url: 'https://instagram.com',
        descripcion: 'Fotos de nuestras últimas impresiones y proyectos en curso.',
        icono: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/>
            <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
          </svg>
        ),
        color: '#e1306c',
      },
      {
        nombre: 'TikTok',
        url: 'https://tiktok.com',
        descripcion: 'Time-lapses de impresión y trucos de postprocesado.',
        icono: (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.73a8.18 8.18 0 004.79 1.53V6.8a4.86 4.86 0 01-1.02-.11z"/>
          </svg>
        ),
        color: '#010101',
      },
      {
        nombre: 'YouTube',
        url: 'https://youtube.com',
        descripcion: 'Tutoriales, reseñas de materiales y guías de configuración.',
        icono: (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.5 6.19a3 3 0 00-2.12-2.12C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.57A3 3 0 00.5 6.19 31.1 31.1 0 000 12a31.1 31.1 0 00.5 5.81 3 3 0 002.12 2.12C4.46 20.5 12 20.5 12 20.5s7.54 0 9.38-.57a3 3 0 002.12-2.12A31.1 31.1 0 0024 12a31.1 31.1 0 00-.5-5.81zM9.75 15.5v-7l6.5 3.5-6.5 3.5z"/>
          </svg>
        ),
        color: '#ff0000',
      },
    ],
  },
  {
    categoria: 'Comunidad y recursos',
    items: [
      {
        nombre: 'Printables.com',
        url: 'https://www.printables.com',
        descripcion: 'Nuestra colección de modelos gratuitos para descargar.',
        icono: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5"/>
          </svg>
        ),
        color: '#fa6831',
      },
      {
        nombre: 'Thingiverse',
        url: 'https://www.thingiverse.com',
        descripcion: 'Más diseños y remix de la comunidad maker.',
        icono: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10"/>
            <circle cx="12" cy="12" r="4"/>
          </svg>
        ),
        color: '#248bfb',
      },
      {
        nombre: 'Makerworld',
        url: 'https://makerworld.com',
        descripcion: 'Perfiles de impresión y proyectos Bambu Lab.',
        icono: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="8" height="8" rx="1"/>
            <rect x="13" y="3" width="8" height="8" rx="1"/>
            <rect x="3" y="13" width="8" height="8" rx="1"/>
            <rect x="13" y="13" width="8" height="8" rx="1"/>
          </svg>
        ),
        color: '#00b388',
      },
    ],
  },
  {
    categoria: 'Contacto directo',
    items: [
      {
        nombre: 'WhatsApp',
        url: 'https://wa.me/34600000000',
        descripcion: 'Mensaje directo para consultas rápidas o pedidos urgentes.',
        icono: (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.47 14.38c-.28-.14-1.65-.81-1.9-.9-.26-.1-.44-.14-.63.14-.19.28-.72.9-.88 1.09-.16.18-.32.2-.6.07a7.56 7.56 0 01-2.22-1.37 8.3 8.3 0 01-1.54-1.91c-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.17.19-.28.28-.47.1-.19.05-.35-.02-.5-.07-.14-.63-1.52-.86-2.08-.23-.55-.46-.47-.63-.48h-.54c-.18 0-.48.07-.73.35-.26.28-.98.96-.98 2.32 0 1.37 1 2.69 1.14 2.88.14.19 1.96 3 4.76 4.2.67.29 1.18.46 1.59.59.67.21 1.28.18 1.76.11.54-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.06-.12-.25-.19-.53-.33zM12.01 2A10 10 0 002 12c0 1.77.46 3.41 1.27 4.83L2 22l5.27-1.38A10 10 0 1012.01 2z"/>
          </svg>
        ),
        color: '#25d366',
      },
      {
        nombre: 'Correo electrónico',
        url: 'mailto:hola@printforge.es',
        descripcion: 'Para presupuestos, colaboraciones o cualquier consulta detallada.',
        icono: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        ),
        color: '#f57c2a',
      },
    ],
  },
]

function Links() {
  return (
    <div className="page-links">
      <section className="links-hero">
        <span className="section-tag">Encuéntranos</span>
        <h1 className="links-hero-title">Nuestros Links</h1>
        <p className="links-hero-subtitle">
          Síguenos, descarga nuestros modelos o escríbenos directamente.
        </p>
      </section>

      <div className="links-main">
        {LINKS.map((grupo) => (
          <div key={grupo.categoria} className="links-grupo">
            <h2 className="links-categoria-titulo">{grupo.categoria}</h2>
            <div className="links-grid">
              {grupo.items.map((link) => (
                <a
                  key={link.nombre}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-card"
                  style={{ '--link-color': link.color } as React.CSSProperties}
                >
                  <div className="link-card-icon" style={{ color: link.color }}>
                    {link.icono}
                  </div>
                  <div className="link-card-body">
                    <span className="link-card-nombre">{link.nombre}</span>
                    <p className="link-card-descripcion">{link.descripcion}</p>
                  </div>
                  <div className="link-card-arrow">
                    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 10h12M11 5l5 5-5 5"/>
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* QR visual placeholder */}
      <section className="qr-section">
        <div className="qr-inner">
          <div className="qr-text">
            <h2>Comparte nuestro catálogo</h2>
            <p>Copia el enlace de nuestra tienda y compártelo con quien quieras.</p>
            <button
              className="btn-copy"
              onClick={() => {
                navigator.clipboard?.writeText(window.location.origin)
              }}
            >
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="8" y="2" width="10" height="13" rx="1.5"/>
                <path d="M4 5H3a1.5 1.5 0 00-1.5 1.5v10A1.5 1.5 0 003 18h10a1.5 1.5 0 001.5-1.5v-1"/>
              </svg>
              Copiar enlace
            </button>
          </div>
          <div className="qr-placeholder">
            <svg viewBox="0 0 100 100" fill="none">
              {/* QR pattern decorative */}
              {[0,1,2,3,4,5,6].map(row =>
                [0,1,2,3,4,5,6].map(col => {
                  const isCorner = (row < 2 && col < 2) || (row < 2 && col > 4) || (row > 4 && col < 2)
                  const val = Math.sin(row * 7 + col * 3) > 0
                  if (!isCorner && !val) return null
                  return <rect key={`${row}-${col}`} x={8 + col*12} y={8 + row*12} width={10} height={10} fill="currentColor" opacity={isCorner ? 0.8 : 0.4} rx={1}/>
                })
              )}
              <text x="50" y="96" textAnchor="middle" fontSize="5" fill="currentColor" opacity="0.5">printforge.es</text>
            </svg>
          </div>
        </div>
      </section>
    </div>
  )
}
