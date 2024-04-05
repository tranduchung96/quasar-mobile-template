<script setup lang="ts">
import QuantitySelect from 'components/QuantitySelect.vue';

defineOptions({
  name: 'CartProduct'
})

import { ref } from 'vue';

const product = ref({
  'id': 1,
  'name': 'Almond Toe Court Shoes, Patent Black',
  'category': 'Womens Footwear',
  'price': 99.00,
  'stock': 5,
  'image': 'https://m.media-amazon.com/images/I/81pg+bR4v1L._AC_SX466_.jpg'
});
</script>

<template>

  <div class="px-2">
    <q-card class="rounded-xl border-2 bg-gray-100" flat bordered>
      <q-card-section horizontal>
        <q-card-section class="col-4 flex flex-center">
          <q-img
            class="rounded-borders"
            :src="product.image"
          />
        </q-card-section>
        <q-card-section class="flex flex-col justify-center">
          <div class="text-overline">Printed Shirt</div>
          <div class="text-caption text-black">
            {{product.category}}
          </div>
          <div class="text-bold text-lg">
            ${{product.price}}.<span class="text-base">00 USD</span>
          </div>
        </q-card-section>
        <q-card-actions class="flex flex-col justify-between">
          <div class="flex flex-row justify-end w-full">
            <q-btn
              size="sm"
              flat
              round
              padding="0 0"
              icon="clear"
            />
          </div>
          <QuantitySelect size="xs" />
        </q-card-actions>
      </q-card-section>

    </q-card>
  </div>
</template>
