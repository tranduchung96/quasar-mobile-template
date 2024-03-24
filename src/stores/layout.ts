import { defineStore } from 'pinia';
export const useLayoutStore = defineStore('layout', {
  state: ()=>({
    menuOpen: false
  }),
  getters: {
    isMenuOpen: (state) => state.menuOpen
  },
  actions: {
    toggleMenu(){
      this.menuOpen = !this.menuOpen;
    },
    setMenuOpenStatus(status: boolean){
      this.menuOpen = status;
    }
  }
});
