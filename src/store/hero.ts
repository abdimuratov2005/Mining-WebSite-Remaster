import { defineStore } from "pinia";
import { MenuImg } from "../shared/ui/img-loader/loader.vue";
interface SlideProps {
  id: number;
  item: MenuImg;
}

interface HeroStateProps {
  slides: SlideProps[];
}
export const useHero = defineStore("hero", {
  state: (): HeroStateProps => ({
    slides: [
      { id: 1, item: "hero_maining" },
      { id: 2, item: "hero_maining" },
      { id: 3, item: "hero_maining" },
      { id: 4, item: "hero_maining" },
    ],
  }),
});
