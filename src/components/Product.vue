<script setup lang="ts">
import { Product } from 'components/models';
import { useRouter } from 'vue-router';
import { useProductStore } from 'stores/product';

defineOptions({
  name: 'ProductComponent'
});

const props = defineProps<{
  product: Product
}>()
const $router = useRouter();
const $product = useProductStore();
const openProduct = ()=>{
  $product.setSelectedProduct(props.product);
  $router.push({
    path: '/product'
  })
}
</script>

<template>
  <div class="px-5">
    <q-card
      class="p-2 mb-5 rounded-3xl"
      style="min-height: 200px"
      flat
      bordered
      @click="openProduct"
    >
      <q-img class="rounded-borders pt-4" :src="product.image" />
      <q-card-actions class="text-center">
        <span class="text-xs">
          {{product.name}}
        </span>
      </q-card-actions>
      <q-card-actions class="justify-center">
        <span class="text-bold text-gray-500">
          $ {{ product.price }}  USD
        </span>
      </q-card-actions>
      <q-btn
        class="absolute top-0 right-0"
        flat
        round
        outline
        rounded
        color="red"
        icon="favorite"
      />
    </q-card>
  </div>
</template>

