import { defineStore } from 'pinia';
import { Product } from 'components/models';


export const useProductStore = defineStore('product', {
  state: ()=>({
    selectedProduct: null as (Product | null)
  }),
  getters: {
    getSelectedProduct: (state) => state.selectedProduct
  },
  actions: {
    setSelectedProduct(product: Product){
      this.selectedProduct = product;
    }
  }
});
