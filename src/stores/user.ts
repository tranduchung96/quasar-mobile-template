import { defineStore } from 'pinia';
export const useUserStore = defineStore('user', {
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
