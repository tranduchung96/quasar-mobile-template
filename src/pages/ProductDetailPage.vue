<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useProductStore } from 'stores/product';
import { computed } from 'vue';

defineOptions({
  name: 'ProductDetailPage'
});

const $router = useRouter();
const back = () => {
  $router.back();
};
const $productStore = useProductStore();
const product = computed(()=> $productStore.getSelectedProduct)
</script>

<template>
<div>
  <div class="absolute top-4 right-1 z-10">
    <q-toolbar class="w-screen">
      <q-btn
        flat
        round
        color="back"
        icon="arrow_back"
        @click="back"
      />
      <q-space />
      <q-btn
        class="absolute top-0 right-0"
        flat
        round
        outline
        rounded
        color="red"
        icon="favorite"
      />
    </q-toolbar>
  </div>
  <div>
    <q-img  :src="product?.image" />
  </div>
</div>
</template>

