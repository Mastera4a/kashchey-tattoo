import Link from "next/link";

const processSteps = [
  {
    number: "01",
    title: "Обсуждение идеи",
    description:
      "Ты рассказываешь о задумке, желаемом стиле, размере и месте нанесения.",
    symbol: "✦",
  },
  {
    number: "02",
    title: "Разработка эскиза",
    description:
      "Создаю индивидуальную композицию и адаптирую её под анатомию.",
    symbol: "✎",
  },
  {
    number: "03",
    title: "Подготовка",
    description:
      "Согласовываем детали, дату сеанса и рекомендации перед визитом.",
    symbol: "◇",
  },
  {
    number: "04",
    title: "Сеанс татуировки",
    description:
      "Переносим эскиз и выполняем работу с соблюдением стерильности.",
    symbol: "†",
  },
  {
    number: "05",
    title: "Уход и заживление",
    description:
      "Ты получаешь подробные рекомендации и остаёшься со мной на связи.",
    symbol: "☾",
  },
];

export default function Process() {
    return (
    <section className="process" id="process">
      <div className="process__inner">
        <header className="process__header">
          <p className="section-eyebrow">От идеи до результата</p>

          <h2 className="section-title">Как я работаю</h2>

          <div className="section-divider">
            <span />
            <b>†</b>
            <span />
          </div>

          <p className="process__description">
            Каждый этап проходит спокойно и прозрачно — от первого
            сообщения до полного заживления татуировки.
          </p>
        </header>

        <div className="process__steps">
          {processSteps.map((step) => (
            <article className="process-card" key={step.number}>
              <div className="process-card__top">
                <span className="process-card__number">
                  {step.number}
                </span>

                <span
                  className="process-card__symbol"
                  aria-hidden="true"
                >
                  {step.symbol}
                </span>
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </article>
          ))}
        </div>

        <div className="process__footer">
          <Link className="process__button" href="/process">
            Подробнее о процессе
            <span aria-hidden="true">†</span>
          </Link>
        </div>
      </div>
    </section>
    );
}