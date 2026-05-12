import { CONTACT } from '../data/menu'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__row">
        <div className="site-footer__brand">
          <img src="/waffu-logo.png" alt="" width={40} height={40} />
          <div>
            <strong>WAFFU</strong>
            <p className="site-footer__tag">{CONTACT.tagline}</p>
          </div>
        </div>
        <div className="site-footer__links">
          <a href={CONTACT.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href={CONTACT.tiktok} target="_blank" rel="noreferrer">
            TikTok
          </a>
          <a href={`mailto:${CONTACT.email}`}>Correo</a>
        </div>
      </div>
      <p className="site-footer__fine">
        Precios y disponibilidad según catálogo vigente. Sitio informativo; los pedidos se coordinan
        por los canales oficiales.
      </p>
    </footer>
  )
}
