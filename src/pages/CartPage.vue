<script setup lang="ts">

import { useRouter } from 'vue-router';
import CartProduct from 'components/CartProduct.vue';

const $router = useRouter();
</script>

<template>

  <div class="bg-white">
    <div class="sticky top-4 right-1 z-10">
      <q-toolbar class="w-screen">
        <q-btn
          flat
          round
          color="back"
          icon="arrow_back"
          @click="$router.back()"
          class="absolute"
        />
        <q-toolbar-title class="text-center">
          My Cart
        </q-toolbar-title>
      </q-toolbar>
    </div>
    <div>
      <CartProduct />
    </div>
  </div>

</template>
