import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { tattooWorks } from "@/data/tattooWorks";

type WorkPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return tattooWorks.map((work) => ({
    slug: work.slug,
  }));
}

export async function generateMetadata({
  params,
}: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;

  const work = tattooWorks.find(
    (item) => item.slug === slug
  );

  if (!work) {
    return {
      title: "Работа не найдена | Kashchey Tattoo",
    };
  }

  return {
    title: `${work.title} | Kashchey Tattoo`,
    description: work.description,
    openGraph: {
      title: `${work.title} | Kashchey Tattoo`,
      description: work.description,
      images: [work.image],
    },
  };
}

export default async function WorkPage({
  params,
}: WorkPageProps) {
  const { slug } = await params;

  const workIndex = tattooWorks.findIndex(
    (item) => item.slug === slug
  );

  if (workIndex === -1) {
    notFound();
  }

  const work = tattooWorks[workIndex];

  const previousWork =
    tattooWorks[
      (workIndex - 1 + tattooWorks.length) %
        tattooWorks.length
    ];

  const nextWork =
    tattooWorks[
      (workIndex + 1) % tattooWorks.length
    ];

  return (
    <main className="work-page">
      <section className="work-details">
        <div className="work-details__inner">
          <div className="work-details__visual">
            <div className="work-details__image">
              <Image
                src={work.image}
                alt={`Татуировка «${work.title}»`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              <div className="work-details__image-shade" />
            </div>
          </div>

          <div className="work-details__content">
            <Link
              className="work-details__back"
              href="/portfolio"
            >
              <span aria-hidden="true">←</span>
              Все работы
            </Link>

            <p className="section-eyebrow">
              {work.style}
            </p>

            <h1 className="work-details__title">
              {work.title}
            </h1>

            <div className="section-divider">
              <span />
              <b>†</b>
              <span />
            </div>

            <p className="work-details__description">
              {work.description}
            </p>

            <dl className="work-details__facts">
              <div>
                <dt>Стиль</dt>
                <dd>{work.style}</dd>
              </div>

              <div>
                <dt>Место нанесения</dt>
                <dd>{work.placement}</dd>
              </div>

              {work.size && (
                <div>
                  <dt>Размер</dt>
                  <dd>{work.size}</dd>
                </div>
              )}

              {work.duration && (
                <div>
                  <dt>Продолжительность</dt>
                  <dd>{work.duration}</dd>
                </div>
              )}

              {work.year && (
                <div>
                  <dt>Год</dt>
                  <dd>{work.year}</dd>
                </div>
              )}
            </dl>

            <Link
              className="work-details__booking"
              href="/#booking"
            >
              Обсудить похожую идею
              <span aria-hidden="true">†</span>
            </Link>
          </div>
        </div>

        <nav
          className="work-navigation"
          aria-label="Навигация между работами"
        >
          <Link
            className="work-navigation__item"
            href={`/portfolio/${previousWork.slug}`}
          >
            <span className="work-navigation__direction">
              ← Предыдущая работа
            </span>

            <strong>{previousWork.title}</strong>
          </Link>

          <Link
            className="work-navigation__item work-navigation__item--next"
            href={`/portfolio/${nextWork.slug}`}
          >
            <span className="work-navigation__direction">
              Следующая работа →
            </span>

            <strong>{nextWork.title}</strong>
          </Link>
        </nav>
      </section>
    </main>
  );
}