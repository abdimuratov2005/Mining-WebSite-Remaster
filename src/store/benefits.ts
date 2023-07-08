import { defineStore } from "pinia";

interface Benefit {
  id: number;
  info: string;
}

interface BenefitsStateProps {
  benefits: Benefit[];
}

export const useBenefitsStore = defineStore("benefits", {
  state: (): BenefitsStateProps => ({
    benefits: [
      { id: 1, info: "Более 5 лет успешной работы" },
      { id: 2, info: "Сотни положительных отзывов" },
      { id: 3, info: "Работаем по всей России" },
      { id: 4, info: "Сотрудничество с производителем" },
      { id: 5, info: "Гарантия на оборудование" },
      { id: 6, info: "Собственный склад в Москве" },
    ],
  }),
});
