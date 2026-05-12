import { CONTACT, ORDER_STEPS } from '../data/menu'

export function OrderPanel() {
  const mailHref = `mailto:${CONTACT.email}?subject=${encodeURIComponent('Pedido WAFFU')}`

  return (
    <section className="order-panel" id="pedidos" aria-labelledby="order-title">
      <div className="order-panel__inner">
        <div className="order-panel__copy">
          <p className="section-kicker section-kicker--light">Concierge de pedidos</p>
          <h2 id="order-title" className="order-panel__title">
            Reserva tu pedido como una experiencia
          </h2>
          <p className="order-panel__text">
            Escríbenos por WhatsApp con 24–48 horas de anticipación. Te ayudamos a elegir,
            coordinar entrega y confirmar la reserva con abono del 50%.
          </p>
          <ol className="order-panel__steps">
            {ORDER_STEPS.map((item) => (
              <li key={item.step}>
                <span>{item.step}</span>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="order-panel__actions">
          {CONTACT.whatsapp.map((w) => (
            <a key={w.name} className="btn btn--primary btn--block" href={w.href} target="_blank" rel="noreferrer">
              WhatsApp — {w.name}
            </a>
          ))}
          <a className="btn btn--ghost btn--block" href={mailHref}>
            {CONTACT.email}
          </a>
        </div>
      </div>
    </section>
  )
}
