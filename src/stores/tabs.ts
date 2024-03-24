import { defineStore } from 'pinia';
import { Tab } from 'src/models/tab';
const tabs: Tab[] = [
  {
    name: 'home',
    icon: 'home',
    label: 'Home'
  },
  {
    name: 'feed',
    icon: 'feed',
    label: 'Feeds'
  },
  {
    name: 'setting',
    icon: 'settings',
    label: 'Setting'
  }
];
export const useTabsStore = defineStore('tabs', {
  state: ()=>({
    menuOpen: false
  }),
  getters: {
    getTabs: ()=> tabs
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
