<script setup lang="ts">
defineOptions({
  name: 'QuantitySelect'
});

import { ref } from 'vue';

defineProps<{
  size?: 'xs' | 'md' | 'lg'
}>();
const quantity = ref(1);
</script>

<template>
  <div class="flex flex-row justify-start align-middle w-fit">
    <q-btn
      @click="quantity = (quantity > 1? quantity - 1:quantity)"
      label="-"
      :round="size!=='xs'"
      :rounded="size==='xs'"
      no-wrap
      :size="size??'md'"
    />
    <q-input
      v-model="quantity"
      type="number"
      dense
      :input-class="size!='xs'?'p-0 w-8 text-center text-bold text-lg':'p-0 w-8 text-center text-bold text-xs'"
      disable
      borderless
      hide-bottom-space
      square
    />
    <q-btn
      @click="quantity++"
      label="+"
      :round="size!=='xs'"
      :rounded="size==='xs'"
      no-wrap
      :size="size??'md'"
    />
  </div>
</template>

