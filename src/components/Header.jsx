import { useEffect, useState } from 'react'
import { MENU_SECTIONS } from '../data/menu'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="site-header__inner">
        <a className="site-header__brand" href="#top" aria-label="WAFFU inicio">
          <img src="/waffu-logo.png" alt="" width={48} height={48} className="site-header__logo" />
          <span className="site-header__wordmark">WAFFU</span>
        </a>
        <nav className="site-header__nav" aria-label="Secciones del menú">
          {MENU_SECTIONS.map((s) => (
            <a key={s.id} className="site-header__link" href={`#${s.id}`}>
              {s.title}
            </a>
          ))}
          <a className="site-header__link site-header__link--emphasis" href="#pedidos">
            Pedidos
          </a>
        </nav>
        <a className="btn btn--small btn--primary site-header__cta" href="#pedidos">
          Pedir
        </a>
      </div>
    </header>
  )
}
