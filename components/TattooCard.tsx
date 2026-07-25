import Link from "next/link";

import type { TattooWork } from "@/data/tattooWorks";

type TattooCardProps = {
  work: TattooWork;
  index: number;
};

export default function TattooCard({
  work,
  index,
}: TattooCardProps) {
  return (
    <article
      className={`tattoo-card tattoo-card--${index + 1}`}
    >
      <Link
        className="tattoo-card__link"
        href={`/portfolio/${work.slug}`}
        aria-label={`Открыть работу «${work.title}»`}
      >
        <div
          className="tattoo-card__image"
          style={{
            backgroundImage: `url("${work.image}")`,
          }}
        >
          <span className="tattoo-card__number">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="tattoo-card__overlay" />

        <div className="tattoo-card__content">
          <p>{work.style}</p>
          <h3>{work.title}</h3>
          <span>{work.placement}</span>
        </div>
      </Link>
    </article>
  );
}