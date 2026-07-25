export type TattooWork = {
  slug: string;
  title: string;
  style: string;
  placement: string;
  image: string;
  featured: boolean;

  description: string;
  size?: string;
  duration?: string;
  year?: number;
};

export const tattooWorks: TattooWork[] = [
  {
    slug: "double-scorpion",
    title: "Двойной скорпион",
    style: "Graphic",
    placement: "Грудь",
    image: "/images/works/double-scorpion.jpg",
    featured: true,
    description:
      "Графическая композиция с двумя скорпионами, расположенная с учётом анатомии груди и плечевого пояса. Работа построена на тонких линиях, мягкой серой растушёвке и выразительных деталях.",
  },
  {
    slug: "forest-twins",
    title: "Лесные близнецы",
    style: "Fine Line",
    placement: "Предплечье",
    image: "/images/works/forest-twins.jpg",
    featured: true,
    description:
      "Миниатюрная парная композиция с лесными животными, выполненная тонкими линиями. Нежная и лёгкая работа с небольшим количеством деталей и аккуратной посадкой на предплечье.",
  },
  {
    slug: "be-your-own-muse",
    title: "Будь собой",
    style: "Lettering",
    placement: "Ключица",
    image: "/images/works/be-your-own-muse.jpg",
    featured: true,
    description:
      "Минималистичная надпись с красным каллиграфическим акцентом. Композиция расположена вдоль линии ключицы и подчёркивает естественную форму тела.",
  },
  {
    slug: "winged-serpent",
    title: "Крылатый змей",
    style: "Graphic",
    placement: "Нога",
    image: "/images/works/winged-serpent.jpg",
    featured: true,
    description:
      "Контрастная графическая композиция с крылатым существом и змеёй. Плотные чёрные элементы сочетаются с открытыми участками кожи и создают выразительный силуэт.",
  },
  {
    slug: "freedom-lettering",
    title: "Свобода линий",
    style: "Lettering",
    placement: "Предплечье",
    image: "/images/works/freedom-lettering.jpg",
    featured: true,
    description:
      "Каллиграфическая надпись, вытянутая вдоль предплечья. Плавные линии и свободные росчерки превращают текст в самостоятельную графическую композицию.",
  },
];