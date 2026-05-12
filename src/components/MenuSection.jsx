import { ProductCard } from './ProductCard'

export function MenuSection({ section }) {
  const isGluten = section.variant === 'contains-gluten'

  return (
    <section
      className={`menu-block ${isGluten ? 'menu-block--warning' : ''}`}
      id={section.id}
      aria-labelledby={`heading-${section.id}`}
    >
      <div className="menu-block__head">
        <h2 id={`heading-${section.id}`} className="menu-block__title">
          {section.title}
        </h2>
      </div>
      <div className="menu-block__grid">
        {section.items.map((item) => (
          <ProductCard key={item.name} item={item} accent={isGluten} />
        ))}
      </div>
    </section>
  )
}
