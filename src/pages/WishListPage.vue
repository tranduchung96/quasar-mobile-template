<script setup lang="ts">

import { useRouter } from 'vue-router';
import CartProduct from 'components/CartProduct.vue';

const $router = useRouter();
</script>

<template>
  <div class="bg-white">
    <q-layout view="hHh lpR fFf" class="bg-grey-1">
      <q-header class="bg-transparent">
        <q-toolbar class="w-screen">
          <q-btn
            flat
            round
            color="back"
            icon="arrow_back"
            text-color="black"
            @click="$router.back()"
            class="absolute"
          />
          <q-toolbar-title class="text-center text-black">
            Wish List
          </q-toolbar-title>
        </q-toolbar>
      </q-header>
      <q-page-container>
        <template v-for="i in 10" v-bind:key="i">
          <CartProduct class="py-1" />
        </template>
      </q-page-container>
      <q-footer class="bg-transparent flex flex-row justify-center py-2">
        <q-btn
          class="w-11/12 flex flex-row justify-between"
          color="primary"
          padding="10px 0"
          rounded
        >
          <div class="w-full flex flex-row justify-between">
            <div class="flex-1">
              <q-icon name="shopping_bag" />
              Add all to cart
            </div>
          </div>
        </q-btn>
      </q-footer>
    </q-layout>

  </div>

</template>
