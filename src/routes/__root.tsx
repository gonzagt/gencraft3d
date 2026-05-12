import { HeadContent, Outlet, Scripts, createRootRoute, Link, useRouterState } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'PrintForge Studio — Impresión 3D Artesanal' },
      { name: 'description', content: 'Impresiones 3D de alta calidad. Diseños únicos, materiales premium y precios accesibles.' },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Nunito:ital,wght@0,300;0,400;0,600;1,300&display=swap',
      },
    ],
  }),
  shellComponent: RootDocument,
})

const NAV_LINKS = [
  { to: '/', label: 'Inicio' },
  { to: '/productos', label: 'Nuestros Productos' },
  { to: '/nosotros', label: 'Sobre Nosotros' },
  { to: '/links', label: 'Nuestros Links' },
]

function NavBar() {
  const router = useRouterState()
  const pathname = router.location.pathname

  return (
    <header className="forge-header">
      <div className="forge-header-inner">
        <Link to="/" className="forge-logo">
          <span className="forge-logo-icon">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <polygon points="14,2 26,8 26,20 14,26 2,20 2,8" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <polygon points="14,7 21,10.5 21,17.5 14,21 7,17.5 7,10.5" fill="currentColor" opacity="0.3"/>
              <circle cx="14" cy="14" r="2.5" fill="currentColor"/>
            </svg>
          </span>
          <span className="forge-logo-text">PrintForge</span>
        </Link>

        <nav className="forge-nav">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`forge-nav-link ${pathname === link.to ? 'forge-nav-link--active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <MobileMenu pathname={pathname} />
      </div>
    </header>
  )
}

function MobileMenu({ pathname }: { pathname: string }) {
  return (
    <details className="forge-mobile-menu">
      <summary className="forge-hamburger" aria-label="Menú">
        <span /><span /><span />
      </summary>
      <div className="forge-mobile-dropdown">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`forge-mobile-link ${pathname === link.to ? 'forge-mobile-link--active' : ''}`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </details>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        <NavBar />
        <main className="forge-main">
          {children}
        </main>
        <footer className="forge-footer">
          <div className="forge-footer-inner">
            <div className="forge-footer-brand">
              <span className="forge-footer-logo">PrintForge Studio</span>
              <p>Impresiones 3D de alta calidad,<br/>diseñadas con pasión.</p>
            </div>
            <div className="forge-footer-links">
              {NAV_LINKS.map((link) => (
                <Link key={link.to} to={link.to} className="forge-footer-nav-link">
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="forge-footer-contact">
              <span className="forge-footer-section-title">Contacto</span>
              <a href="mailto:hola@printforge.es" className="forge-footer-contact-link">hola@printforge.es</a>
              <a href="tel:+34600000000" className="forge-footer-contact-link">+34 600 000 000</a>
            </div>
          </div>
          <div className="forge-footer-bottom">
            <span>© {new Date().getFullYear()} PrintForge Studio. Todos los derechos reservados.</span>
          </div>
        </footer>
        <Scripts />
      </body>
    </html>
  )
}
