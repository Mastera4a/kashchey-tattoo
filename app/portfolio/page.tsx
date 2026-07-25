import type { Metadata } from "next";

import Header from "@/components/Header";
import TattooCard from "@/components/TattooCard";
import { tattooWorks } from "@/data/tattooWorks";

export const metadata: Metadata = {
  title: "Портфолио | Kashchey Tattoo",
  description:
    "Портфолио тату-мастера Kashchey: графика, fine line, lettering и авторские татуировки.",
};

export default function PortfolioPage() {
  return (
    <main className="portfolio-page">
      <Header />

      <section className="portfolio-page__hero">
        <div className="portfolio-page__hero-inner">
          <p className="section-eyebrow">Портфолио</p>

          <h1 className="portfolio-page__title">
            Все работы
          </h1>

          <div className="section-divider">
            <span />
            <b>†</b>
            <span />
          </div>

          <p className="portfolio-page__description">
            Авторские татуировки, индивидуальные эскизы и работы
            в направлениях graphic, fine line и lettering.
          </p>
        </div>
      </section>

      <section className="portfolio-page__works">
        <div className="portfolio-page__inner">
          <div className="portfolio-page__grid">
            {tattooWorks.map((work, index) => (
              <TattooCard
                key={work.slug}
                work={work}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}