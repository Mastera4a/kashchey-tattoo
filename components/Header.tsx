export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <a className="header__brand" href="#">
          <span className="header__brand-name">Kashchey</span>
          <span className="header__brand-subtitle">Tattoo</span>
        </a>

        <nav className="header__navigation" aria-label="Основная навигация">
          <a href="#about">О мастере</a>
          <a href="#works">Работы</a>
          <a href="#services">Услуги</a>
          <a href="#process">Как я работаю</a>
          <a href="#reviews">Отзывы</a>
          <a href="#contacts">Контакты</a>
        </nav>

        <a className="header__booking-button" href="#booking">
          Записаться
          <span aria-hidden="true">†</span>
        </a>
      </div>
    </header>
  );
}