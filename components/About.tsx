export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__inner">
        <div className="about__visual">
          <div className="about__photo">
            <div className="about__photo-overlay" />

            <span className="about__photo-label">
              Kashchey
            </span>
          </div>

          <div className="about__seal" aria-hidden="true">
            †
          </div>
        </div>

        <div className="about__content">
          <p className="section-eyebrow">
            Знакомство
          </p>

          <h2 className="section-title">
            О мастере
          </h2>

          <div className="section-divider">
            <span />
            <b>†</b>
            <span />
          </div>

            <p className="about__lead">
            Привет, я — Kashchey. Создаю татуировки, которые становятся
            частью истории человека.
            </p>

            <p className="about__text">
            Для меня татуировка — это не просто рисунок на коже.
            Это состояние, символ, воспоминание или способ показать миру
            часть своей личности.
            </p>

            <p className="about__text">
            Я работаю с индивидуальными эскизами в направлениях blackwork,
            графика, готика и dark art.
            </p>

            <a className="about__button" href="#works">
                Смотреть работы
                <span aria-hidden="true">†</span>
            </a>
        </div>

        <div className="about__advantages">
          <article className="advantage-card">
            <span className="advantage-card__icon">✦</span>

            <div>
              <h3>Индивидуальные эскизы</h3>
              <p>
                Не повторяю чужие работы и адаптирую композицию под тебя.
              </p>
            </div>
          </article>

          <article className="advantage-card">
            <span className="advantage-card__icon">☠</span>

            <div>
              <h3>Стерильность</h3>
              <p>
                Одноразовые расходные материалы и строгое соблюдение безопасности.
              </p>
            </div>
          </article>

          <article className="advantage-card">
            <span className="advantage-card__icon">♢</span>

            <div>
              <h3>Премиальные материалы</h3>
              <p>
                Использую профессиональное оборудование и качественные пигменты.
              </p>
            </div>
          </article>

          <article className="advantage-card">
            <span className="advantage-card__icon">†</span>

            <div>
              <h3>Комфортная атмосфера</h3>
              <p>
                Спокойная работа, уважение к клиенту и внимание к деталям.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}