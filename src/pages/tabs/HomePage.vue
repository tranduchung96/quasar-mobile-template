<script setup lang="ts">
import { ref } from 'vue';
import FilterSortProduct from 'components/FilterSortProduct.vue';
import ListProduct from 'components/ListProduct.vue';

defineOptions({
  name: 'HomePage'
});

const tabs: { name: string, label: string }[] = [
  {
    name: 'popular',
    label: 'Popular'
  },
  {
    name: 'men',
    label: 'Men'
  },
  {
    name: 'women',
    label: 'Women'
  },
  {
    name: 'sale',
    label: 'Sale'
  }
];

const tab = ref<string>('mails');
</script>

<template>
  <div>
    <q-tabs
      class="text-gray-500 pt-5"
      v-model="tab"
      mobile-arrows
      narrow-indicator
      no-caps
      dense
      align="justify"
      active-color="primary"
    >
      <template v-for="tab in tabs" v-bind:key="tab.name">
        <q-tab :name="tab.name" :label="tab.label" />
      </template>
    </q-tabs>
    <FilterSortProduct class="px-5 pt-8" />
    <div class="flex flex-row justify-center pt-5 px-4">
      <ListProduct />
    </div>
  </div>
</template>
