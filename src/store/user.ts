import { defineStore } from "pinia";

interface Header {
  favorite: number | string
  korzina: number | string
}

interface UserState {
  header: Header
}

export const useUserStore = defineStore('userData', {
  state: (): UserState => ({
    header: {
      favorite: 5,
      korzina: 2
    }
  })
})