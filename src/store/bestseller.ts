import { defineStore } from "pinia";
import { MenuImg } from "../shared/ui/img-loader/loader.vue";

type HowTypes = "В наличии" | "Под заказ";
type HeaderTypes = "Хит" | "Sale" | "New";

interface Product {
  id: number;
  like: boolean;
  img: MenuImg;
  header: HeaderTypes;
  name: string;
  how: HowTypes;
  price: number;
  skitka?: number;
}

interface BestsellerStateProps {
  products: Product[];
}

export const useBestsellerStore = defineStore("bestseller", {
  state: (): BestsellerStateProps => ({
    products: [
      {
        id: 1,
        like: false,
        img: "bestseller1",
        header: "Хит",
        how: "В наличии",
        name: "Antminer L7 8800 Mh/s",
        price: 615,
      },
      {
        id: 2,
        like: false,
        img: "bestseller2",
        header: "Sale",
        how: "Под заказ",
        name: "Antminer S19j pro 110 Th/s",
        price: 245,
        skitka: 315,
      },
      {
        id: 3,
        like: false,
        img: "bestseller3",
        header: "New",
        how: "В наличии",
        name: "Whatsminer M3x 12.5 Th/...",
        price: 14,
      },
      {
        id: 4,
        like: false,
        img: "bestseller4",
        header: "Sale",
        how: "В наличии",
        name: "Antminer Z15e 200 ksol",
        price: 290,
        skitka: 325,
      },
      {
        id: 5,
        like: false,
        img: "bestseller5",
        header: "Хит",
        how: "Под заказ",
        name: "Innosilicon A11 1500 Mh/s...",
        price: 173,
      },
      {
        id: 6,
        like: false,
        img: "bestseller1",
        header: "Хит",
        how: "В наличии",
        name: "Antminer L7 8800 Mh/s",
        price: 615,
      },
      {
        id: 7,
        like: false,
        img: "bestseller2",
        header: "Sale",
        how: "Под заказ",
        name: "Antminer S19j pro 110 Th/s",
        price: 245,
        skitka: 315,
      },
      {
        id: 8,
        like: false,
        img: "bestseller3",
        header: "New",
        how: "В наличии",
        name: "Whatsminer M3x 12.5 Th/...",
        price: 14,
      },
      {
        id: 9,
        like: false,
        img: "bestseller4",
        header: "Sale",
        how: "В наличии",
        name: "Antminer Z15e 200 ksol",
        price: 290,
        skitka: 325,
      },
      {
        id: 10,
        like: false,
        img: "bestseller5",
        header: "Хит",
        how: "Под заказ",
        name: "Innosilicon A11 1500 Mh/s...",
        price: 173,
      },
      {
        id: 11,
        like: false,
        img: "bestseller1",
        header: "Хит",
        how: "В наличии",
        name: "Antminer L7 8800 Mh/s",
        price: 615,
      },
      {
        id: 12,
        like: false,
        img: "bestseller2",
        header: "Sale",
        how: "Под заказ",
        name: "Antminer S19j pro 110 Th/s",
        price: 245,
        skitka: 315,
      },
      {
        id: 13,
        like: false,
        img: "bestseller3",
        header: "New",
        how: "В наличии",
        name: "Whatsminer M3x 12.5 Th/...",
        price: 14,
      },
      {
        id: 14,
        like: false,
        img: "bestseller4",
        header: "Sale",
        how: "В наличии",
        name: "Antminer Z15e 200 ksol",
        price: 290,
        skitka: 325,
      },
      {
        id: 15,
        like: false,
        img: "bestseller5",
        header: "Хит",
        how: "Под заказ",
        name: "Innosilicon A11 1500 Mh/s...",
        price: 173,
      },
    ],
  }),
  actions: {
    // setLike(){
    //   for (let i = 0; i < this.products.length; i++) {
    //     let like = this.products[i].like;
    //     like = !like
    //   }
    // }
  },
});
