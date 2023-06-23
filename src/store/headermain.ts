import { defineStore } from "pinia";

interface HeaderMainStateProps {
  modalShow: boolean;
  menuShow: boolean;
  searchBar: boolean,
  search: string;
}

export const useHeaderMain = defineStore("headermain", {
  state: (): HeaderMainStateProps => ({
    modalShow: false,
    menuShow: false,
    searchBar: false,
    search: "",
  }),
  actions: {
    showModal() {
      this.modalShow = !this.modalShow;
    },
    showMenu() {
      this.menuShow = !this.menuShow;
    },
    showSearchBar() {
      this.searchBar = !this.searchBar;
    },
    allModalClose() {
      this.searchBar = false
      this.modalShow = false
    },
    searching() {
      const json = JSON.stringify(this.search)
      alert(json)
    }
  },
});
