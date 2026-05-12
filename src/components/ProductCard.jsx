export function ProductCard({ item, accent }) {
  const priceDisplay = item.price
    ? item.price
    : item.priceLines?.join(' · ')

  return (
    <article className={`product-card ${accent ? 'product-card--accent' : ''}`}>
      <div className="product-card__top">
        <h3 className="product-card__name">{item.name}</h3>
        {priceDisplay ? (
          <p className="product-card__price">{priceDisplay}</p>
        ) : null}
      </div>
      <p className="product-card__desc">{item.description}</p>
      {item.badges?.length ? (
        <ul className="product-card__badges">
          {item.badges.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      ) : null}
    </article>
  )
}
