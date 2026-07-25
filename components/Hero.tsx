export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">Kashchey Tattoo</p>

        <h1 className="hero__title">
          Татуировки,
          <br />
          что останутся
          <br />
          с тобой <span>навсегда</span>
        </h1>

        <p className="hero__description">
          Индивидуальный подход. Честность. Качество.
          <br />
          Твои идеи — моя работа.
        </p>

        <a className="hero__button" href="#booking">
          Записаться на консультацию
          <span aria-hidden="true">†</span>
        </a>
      </div>

      <div className="hero__decoration" aria-hidden="true">
        <span className="hero__decoration-circle" />
        <span className="hero__decoration-cross">†</span>
      </div>
    </section>
  );
}