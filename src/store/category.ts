import { defineStore } from "pinia";
import { MenuImg } from "../shared/ui/img-loader/loader.vue";

interface ProductProp {
  id: number;
  imgName: MenuImg;
  title: string;
}

interface CategoryStoreProps {
  products: ProductProp[];
}

export const useCategoryStore = defineStore("category", {
  state: (): CategoryStoreProps => ({
    products: [
      { id: 1, imgName: "maining_1", title: "Asic miners оптом" },
      { id: 2, imgName: "maining_2", title: "Asic miners оптом" },
      { id: 3, imgName: "maining_3", title: "Asic miners оптом" },
      { id: 4, imgName: "maining_4", title: "Asic miners оптом" },
      { id: 5, imgName: "maining_5", title: "Asic miners оптом" },
      { id: 6, imgName: "maining_6", title: "Asic miners оптом" },
    ],
  }),
});
