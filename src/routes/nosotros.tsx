import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/nosotros')({
  component: Nosotros,
})

function Nosotros() {
  return (
    <div className="page-nosotros">
      {/* Hero */}
      <section className="nosotros-hero">
        <div className="nosotros-hero-bg" />
        <div className="nosotros-hero-content">
          <span className="section-tag">Quiénes somos</span>
          <h1 className="nosotros-hero-title">Sobre Nosotros</h1>
          <p className="nosotros-hero-subtitle">
            Pasión por la fabricación digital y los objetos que dejan huella.
          </p>
        </div>
      </section>

      {/* Historia */}
      <section className="section nosotros-historia-section">
        <div className="nosotros-split">
          <div className="nosotros-text-block">
            <span className="section-tag">Nuestra historia</span>
            <h2 className="section-title">De afición a oficio</h2>
            <p className="nosotros-parrafo">
              Todo comenzó con una impresora 3D comprada por curiosidad y una mesa llena de filamento de colores.
              Lo que empezó como un hobbie se convirtió pronto en una pequeña factoría de ideas: llaveros para
              amigos, piezas de recambio imposibles de encontrar, decoración personalizada.
            </p>
            <p className="nosotros-parrafo">
              Con el tiempo perfeccionamos técnicas, calibramos impresoras y aprendimos que la diferencia entre
              una pieza buena y una excepcional está en los detalles: la temperatura de extrusión, la velocidad,
              el tipo de relleno y, sobre todo, la atención a lo que el cliente realmente necesita.
            </p>
            <p className="nosotros-parrafo">
              Hoy fabricamos piezas para particulares, pequeñas empresas y creadores que necesitan materializar
              sus ideas con rapidez y precisión.
            </p>
          </div>
          <div className="nosotros-visual-block">
            <div className="nosotros-printer-illustration">
              <svg viewBox="0 0 200 220" fill="none" className="printer-svg">
                {/* Base */}
                <rect x="20" y="180" width="160" height="20" rx="4" fill="currentColor" opacity="0.15"/>
                {/* Frame */}
                <rect x="30" y="60" width="140" height="130" rx="6" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4"/>
                {/* Print bed */}
                <rect x="50" y="150" width="100" height="8" rx="2" fill="currentColor" opacity="0.3"/>
                {/* Gantry */}
                <rect x="30" y="80" width="140" height="4" rx="2" fill="currentColor" opacity="0.5"/>
                {/* Print head */}
                <rect x="88" y="76" width="24" height="40" rx="3" fill="currentColor" opacity="0.6"/>
                {/* Nozzle */}
                <polygon points="96,116 104,116 100,124" fill="#f57c2a" opacity="0.9"/>
                {/* Filament glow */}
                <line x1="100" y1="124" x2="100" y2="148" stroke="#f57c2a" strokeWidth="2" strokeDasharray="3 2" opacity="0.8"/>
                {/* Object being printed */}
                <rect x="70" y="132" width="60" height="18" rx="3" fill="#f57c2a" opacity="0.3"/>
                {/* Rails */}
                <line x1="30" y1="60" x2="30" y2="180" stroke="currentColor" strokeWidth="2" opacity="0.4"/>
                <line x1="170" y1="60" x2="170" y2="180" stroke="currentColor" strokeWidth="2" opacity="0.4"/>
                {/* Top */}
                <rect x="30" y="56" width="140" height="6" rx="3" fill="currentColor" opacity="0.3"/>
                {/* Logo label */}
                <rect x="60" y="185" width="80" height="10" rx="2" fill="currentColor" opacity="0.2"/>
                {/* Filament spool hint */}
                <circle cx="162" cy="40" r="20" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
                <circle cx="162" cy="40" r="8" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
              </svg>
              <div className="printer-glow" />
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="section nosotros-valores-section">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Lo que nos mueve</span>
            <h2 className="section-title">Nuestros valores</h2>
          </div>
          <div className="valores-grid">
            {[
              {
                num: '01',
                titulo: 'Precisión',
                texto: 'Cada pieza se imprime con las tolerancias más ajustadas posibles. No entregamos productos defectuosos.',
              },
              {
                num: '02',
                titulo: 'Materiales',
                texto: 'Usamos filamentos de primera calidad: PLA+, PETG y TPU de marcas contrastadas. Sin sorpresas.',
              },
              {
                num: '03',
                titulo: 'Honestidad',
                texto: 'Precios transparentes calculados con fórmulas reales. Sabes exactamente por qué pagas lo que pagas.',
              },
              {
                num: '04',
                titulo: 'Rapidez',
                texto: 'La mayoría de piezas estándar están listas en 24-48 horas. Proyectos personalizados en 3-5 días.',
              },
              {
                num: '05',
                titulo: 'Sostenibilidad',
                texto: 'Optimizamos el consumo de filamento y reciclamos los residuos de impresión siempre que es posible.',
              },
              {
                num: '06',
                titulo: 'Mejora continua',
                texto: 'Actualizamos equipos, aprendemos nuevas técnicas y perfeccionamos cada proceso constantemente.',
              },
            ].map((v) => (
              <div key={v.num} className="valor-card">
                <span className="valor-num">{v.num}</span>
                <h3 className="valor-titulo">{v.titulo}</h3>
                <p className="valor-texto">{v.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="section nosotros-proceso-section">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Cómo trabajamos</span>
            <h2 className="section-title">El proceso</h2>
          </div>
          <div className="proceso-timeline">
            {[
              { paso: '1', titulo: 'Diseño o modelo', texto: 'Recibes tu idea en formato STL, OBJ o nos describes lo que necesitas.' },
              { paso: '2', titulo: 'Presupuesto', texto: 'Calculamos el precio según peso, tiempo y materiales. Sin letra pequeña.' },
              { paso: '3', titulo: 'Impresión', texto: 'Fabricamos tu pieza con las impresoras calibradas para el material elegido.' },
              { paso: '4', titulo: 'Control de calidad', texto: 'Revisamos medidas, acabado superficial y resistencia antes de empaquetar.' },
              { paso: '5', titulo: 'Envío', texto: 'Enviamos por mensajería o recogida en mano según tu preferencia.' },
            ].map((paso, i) => (
              <div key={paso.paso} className="proceso-step">
                <div className="proceso-step-num">
                  <span>{paso.paso}</span>
                  {i < 4 && <div className="proceso-step-line" />}
                </div>
                <div className="proceso-step-body">
                  <h3>{paso.titulo}</h3>
                  <p>{paso.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipamiento */}
      <section className="section nosotros-equipamiento-section">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Equipamiento</span>
            <h2 className="section-title">Nuestras herramientas</h2>
          </div>
          <div className="equipamiento-grid">
            {[
              { nombre: 'Bambu Lab X1C', tipo: 'Impresora FDM', spec: '0.05–0.35 mm altura de capa' },
              { nombre: 'Creality Ender 3 S1 Pro', tipo: 'Impresora FDM', spec: 'Superficie magnética flexible' },
              { nombre: 'PrusaSlicer / Bambu Studio', tipo: 'Software de laminado', spec: 'Soportes inteligentes' },
              { nombre: 'Calibrador digital Mitutoyo', tipo: 'Control de calidad', spec: 'Precisión ±0.01 mm' },
            ].map((eq) => (
              <div key={eq.nombre} className="equipo-card">
                <div className="equipo-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5"/>
                    <polygon points="12,7 17,10 17,14 12,17 7,14 7,10" opacity="0.5"/>
                  </svg>
                </div>
                <div className="equipo-info">
                  <span className="equipo-nombre">{eq.nombre}</span>
                  <span className="equipo-tipo">{eq.tipo}</span>
                  <span className="equipo-spec">{eq.spec}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-inner">
          <h2 className="cta-title">¿Tienes un proyecto en mente?</h2>
          <p className="cta-text">Cuéntanos qué necesitas y te preparamos un presupuesto sin compromiso.</p>
          <Link to="/productos" className="btn-primary btn-large">Ver nuestro catálogo</Link>
        </div>
      </section>
    </div>
  )
}
