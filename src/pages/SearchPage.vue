<script setup lang="ts">
import ListProduct from 'components/ListProduct.vue';
import SearchInput from 'components/SearchInput.vue';

defineOptions({
  name: 'SearchPage'
});


</script>

<template>
  <div class="bg-white">
    <q-layout>
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
            Find products
          </q-toolbar-title>
        </q-toolbar>
      </q-header>
      <q-page-container>
        <SearchInput />
        <div class="flex flex-row justify-center pt-5 px-4">
          <ListProduct />
        </div>
      </q-page-container>
    </q-layout>

  </div>
</template>
