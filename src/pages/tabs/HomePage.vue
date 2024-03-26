<script setup lang="ts">
import { ref } from 'vue';
import FilterSortProduct from 'components/FilterSortProduct.vue';
import ListProduct from 'components/ListProduct.vue';

defineOptions({
  name: 'HomePage'
})
const tabs: {name: string, label: string}[] = [
  {
    name: 'popular',
    label: 'Popular',
  },
  {
    name: 'mens',
    label: 'Mens',
  },
  {
    name: 'womens',
    label: 'Womens',
  },
  {
    name: 'sale',
    label: 'Sale',
  },

]
const tab = ref('');
</script>

<template>
  <div>
    <q-tabs
      v-model="tab"
      inline-label
      class="bg-white text-gray-500 text-bold pt-5 "
      active-color="primary"
      mobile-arrows
      narrow-indicator
      no-caps
      dense
      shrink
    >
      <template v-for="t in tabs" v-bind:key="t.name">
        <q-tab
          :name="t.name"
          :label="t.label"
          class=""
        />
      </template>
    </q-tabs>
    <FilterSortProduct class="px-5 pt-8" />
    <div class="flex flex-row justify-center pt-5 px-4">
      <ListProduct />
    </div>
</div>
</template>
