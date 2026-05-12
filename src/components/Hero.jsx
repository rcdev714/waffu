import { useEffect, useState } from 'react'
import { CONTACT, TOP_PICKS } from '../data/menu'

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activePick = TOP_PICKS[activeIndex]
  const pickImages = ['/waffleconguacamole.png', '/berrykiss.png', '/carrotcake.png']

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % TOP_PICKS.length)
    }, 4500)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__glow" aria-hidden />
      <div className="hero__shell">
        <div className="hero__content">
          <p className="hero__eyebrow">WAFFU Ecuador · pedidos 24–48h</p>
          <h1 id="hero-title" className="hero__title">
            {CONTACT.tagline}
          </h1>
          <p className="hero__lead">
            Waffles de verde y choclo, galletas y tortas artesanales con opciones sin gluten y sin
            azúcares refinados.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#pedidos">
              Pedir por WhatsApp
            </a>
            <a className="btn btn--ghost" href="#menu">
              Ver menú
            </a>
          </div>
        </div>
        <div className="hero-showcase" aria-live="polite">
          <img
            className="hero-showcase__image"
            src={pickImages[activeIndex]}
            alt={activePick.name}
            width={520}
            height={520}
          />
          <div className="hero-showcase__media">
            <span>{activePick.label}</span>
          </div>
          <div className="hero-showcase__copy">
            <p className="hero-showcase__meta">{activePick.price}</p>
            <h2>{activePick.name}</h2>
            <p>{activePick.copy}</p>
            <a className="hero-showcase__link" href={`#${activePick.sectionId}`}>
              {activePick.cta}
            </a>
          </div>
          <div className="hero-showcase__dots" aria-label="Top picks">
            {TOP_PICKS.map((pick, index) => (
              <button
                aria-label={`Mostrar ${pick.name}`}
                aria-pressed={index === activeIndex}
                className={index === activeIndex ? 'is-active' : ''}
                key={pick.name}
                onClick={() => setActiveIndex(index)}
                type="button"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
