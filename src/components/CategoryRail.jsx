import { MENU_SECTIONS } from '../data/menu'

const categoryImagesBySection = {
  'waffles-salados': '/saltywaffleshero.png',
  'waffles-dulces': '/chocochrush.png',
  galletas: '/galletashoro.png',
  tortas: '/tortasypasteleshero.png',
  'muffins-donuts': '/muffinsydonutshero.png',
  'con-gluten': '/alfajoresycinnabonhero.png',
}

export function CategoryRail() {
  return (
    <section className="category-rail" aria-labelledby="category-title">
      <div className="category-rail__head">
        <p className="section-kicker">Explora rápido</p>
        <h2 id="category-title">Categorías</h2>
      </div>
      <div className="category-rail__scroll">
        {MENU_SECTIONS.map((section) => (
          <a
            className={section.variant === 'contains-gluten' ? 'category-card category-card--gluten' : 'category-card'}
            href={`#${section.id}`}
            key={section.id}
          >
            <img
              className="category-card__image"
              src={categoryImagesBySection[section.id] || '/waffu-logo.png'}
              alt={section.title}
              width={72}
              height={72}
            />
            <span>{section.title}</span>
            <small>{section.items.length} opciones</small>
          </a>
        ))}
      </div>
    </section>
  )
}
