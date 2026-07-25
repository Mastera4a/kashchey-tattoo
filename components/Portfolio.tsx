import TattooCard from "@/components/TattooCard";
import { tattooWorks } from "@/data/tattooWorks";

export default function Portfolio() {
  const featuredWorks = tattooWorks.filter(
    (work) => work.featured
  );

  return (
    <section className="portfolio" id="works">
      <div className="portfolio__inner">
        <header className="portfolio__header">
          <p className="section-eyebrow">Избранное</p>

          <h2 className="section-title">Работы</h2>

          <div className="section-divider">
            <span />
            <b>†</b>
            <span />
          </div>

          <p className="portfolio__description">
            Каждый проект создаётся индивидуально — от первого
            наброска до последней детали.
          </p>
        </header>

        <div className="portfolio__grid">
          {featuredWorks.map((work, index) => (
            <TattooCard
              key={work.slug}
              work={work}
              index={index}
            />
          ))}
        </div>

        <div className="portfolio__footer">
          <a className="portfolio__button" href="/portfolio">
            Смотреть все работы
            <span aria-hidden="true">†</span>
          </a>
        </div>
      </div>
    </section>
  );
}