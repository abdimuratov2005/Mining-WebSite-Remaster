import { defineStore } from "pinia";

interface NavItems {
  id: number;
  name: string;
  link: string;
}

interface NavbarProps {
  navbar: NavItems[];
  navbarFooterLeft: NavItems[];
  navbarFooterRight: NavItems[];
}

export const useNavbarItems = defineStore("navitems", {
  state: (): NavbarProps => ({
    navbar: [
      { id: 1, name: "Каталог товаров", link: "/" },
      { id: 2, name: "Цены", link: "/" },
      { id: 3, name: "Калькулятор", link: "/" },
      { id: 4, name: "Доставка", link: "/" },
      { id: 5, name: "Отзывы", link: "/" },
    ],
    navbarFooterLeft: [
      { id: 1, name: "О компании", link: "/" },
      { id: 2, name: "Цены", link: "/" },
      { id: 3, name: "Калькулятор", link: "/" },
      { id: 4, name: "Доставка", link: "/" },
      { id: 5, name: "Отзывы", link: "/" },
      { id: 6, name: "Контакты", link: "/" },
    ],
    navbarFooterRight: [
      { id: 1, name: "Asic miners", link: "/" },
      { id: 2, name: "GPU фермы", link: "/" },
      { id: 3, name: "Видеокарты", link: "/" },
      { id: 4, name: "Аксессуары", link: "/" },
      { id: 5, name: "Компьютерные комплектующие", link: "/" },
      { id: 6, name: "Комплектующие для майнинга", link: "/" },
    ]
  }),
});
