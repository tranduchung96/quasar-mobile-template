<script setup lang="ts">
import { ref } from 'vue';

defineOptions({
  name: 'SearchInput'
})
const search = ref<string>('')
</script>

<template>
  <div class="flex flex-row justify-center">
<!--    <div-->
    <q-input
      v-model="search"
      rounded
      outlined
      bg-color="grey-3"
      class="w-11/12"
    >
      <template v-slot:prepend>
        <q-icon name="search" />
      </template>
    </q-input>

  </div>
</template>

