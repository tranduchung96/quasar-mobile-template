import { defineStore } from 'pinia';
export const useNotificationStore = defineStore('notification', {
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
