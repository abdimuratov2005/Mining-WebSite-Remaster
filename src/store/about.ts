import { defineStore } from "pinia";

interface Advantage {
  id: number;
  icon: string;
  text: string;
}

interface AboutState {
  advantages: Advantage[];
}

export const useAboutStore = defineStore("about", {
  state: (): AboutState => ({
    advantages: [
      {
        id: 1,
        icon: "_icon-7rabota",
        text: "Работаем без выходных – 7 дней в неделю",
      },
      {
        id: 1,
        icon: "_icon-sotrudnichestvo",
        text: "Прямое сотрудничество с поставщиками",
      },
      {
        id: 1,
        icon: "_icon-samolyot",
        text: "Быстрая авиадоставка от 14 дней",
      },
      {
        id: 1,
        icon: "_icon-predoplata",
        text: "Предоплата за предзаказ от 30%",
      },
      {
        id: 1,
        icon: "_icon-dogovor",
        text: "Официальный договор, полная защита средств",
      },
      {
        id: 1,
        icon: "_icon-videoproverka",
        text: "Видеопроверка для удаленных клиентов",
      },
    ],
  }),
});
