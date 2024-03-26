<script setup lang="ts">
defineOptions({
  name: 'FilterSortProduct'
})

</script>

<template>
  <div class="flex flex-row justify-between align-middle">
    <div class="flex flex-row justify-start align-middle ">
      <div class="flex flex-col justify-center">
       <span>Filter  & Sort</span>
      </div>
      <q-btn round dense flat color="grey-8" icon="tune">
        <q-badge color="red" text-color="white" floating>
          3
        </q-badge>
      </q-btn>
    </div>
    <div>
      <q-btn round dense flat color="grey-8" icon="grid_view" />
      <q-btn round dense flat color="grey-8" icon="square" />
    </div>

  </div>
</template>

