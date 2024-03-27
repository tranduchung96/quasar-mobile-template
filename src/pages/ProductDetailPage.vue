<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useProductStore } from 'stores/product';
import { computed, ref } from 'vue';

defineOptions({
  name: 'ProductDetailPage'
});

const $router = useRouter();
const back = () => {
  $router.back();
};
const $productStore = useProductStore();
const product = computed(()=> $productStore.getSelectedProduct);
const rating = ref(5);
</script>

<template>
<div class="bg-gray-300">
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

  <q-card class="my-card" flat bordered>
    <q-img :src="product?.image" />
    <q-card-section>
      <div class="flex flex-row justify-between">
        <div class="flex flex-col ">
          <span class="text-xs text-gray-500">
            Geeta Men
          </span>
          <span class="text-lg text-bold text-black">
            {{product?.name}}
          </span>
          <q-rating
            v-model="rating"
            max="5"
            size="2em"
            color="yellow"
            icon="star_border"
            icon-selected="star"
            icon-half="star_half"
            no-dimming
          />
        </div>
        <div class="flex flex-col justify-center">
          <span class="text-bold text-black">
            $ {{ product?.price }}  USD
          </span>
        </div>
      </div>
    </q-card-section>

    <q-card-section>
      <div class="text-subtitle1">
        $・Italian, Cafe
      </div>
      <div class="text-caption text-grey">
        Small plates, salads & sandwiches in an intimate setting.
      </div>
    </q-card-section>

    <q-separator />

    <q-card-actions>
      <q-btn flat round icon="event" />
      <q-btn flat color="primary">
        Reserve
      </q-btn>
    </q-card-actions>
  </q-card>
</div>
</template>

