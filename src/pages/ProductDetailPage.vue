<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useProductStore } from 'stores/product';
import { computed, ref } from 'vue';
import QuantitySelect from 'components/QuantitySelect.vue';

defineOptions({
  name: 'ProductDetailPage'
});

const $router = useRouter();
const $productStore = useProductStore();
const product = computed(() => $productStore.getSelectedProduct);
const rating = ref(5);
const size = ref('S');
const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
</script>

<template>
  <div class="bg-white">
    <div class="sticky top-4 z-10">
      <q-toolbar class="w-screen">
        <q-btn
          flat
          round
          color="back"
          icon="arrow_back"
          @click="$router.back()"
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

    <q-card flat bordered>
      <q-img :src="product?.image" />
      <q-card-section>
        <div class="flex flex-row justify-between">
          <div class="flex flex-col ">
          <span class="text-xs text-gray-500">
            Geeta Men
          </span>
            <span class="text-lg text-bold text-black">
            {{ product?.name }}
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
        <div class="flex flex-row justify-between px-2">
          <QuantitySelect />
          <q-btn
            round
            size="md"
            icon="ios_share"
            class="bg-gray-400"
          />
        </div>
      </q-card-section>
      <q-card-section>
        <div class="flex flex-row justify-between px-2">
          <label class="text-bold">
            Description
          </label>
          <p class="text-left text-xs">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book...
          </p>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="flex flex-col justify-start px-2">
          <label class="text-bold">
            Select size
          </label>
          <div class="flex flex-row justify-start">
            <template v-for="s in sizes" v-bind:key="s">
              <q-btn
                @click="size=s"
                :label="s"
                :color="size==s?'primary':'white'"
                :text-color="size==s?'white':'black'"
                class="mr-3"
              />
            </template>

          </div>
        </div>
      </q-card-section>
      <q-separator />
      <q-card-actions>
        <q-btn
          icon="local_mall"
          label="Add to cart"
          class="w-full"
          rounded
          color="primary"
          padding="10px 0"
          to="/cart"
        />
      </q-card-actions>
    </q-card>
  </div>
</template>

