<script setup lang="ts">
defineOptions({
  name: 'MenuLayout'
})

const emit = defineEmits(['close']);

</script>

<template>
    <div class="fit bg-primary">
      <div class="flex flex-row justify-end w-full">
        <q-btn
          icon="clear"
          flat
          @click="emit('close')"
        />

      </div>
      <div>

      </div>
      <q-list padding>
        <q-item>
          <q-item-section>
            <q-btn to="/congrats">Congrats</q-btn>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <q-btn to="/failed">Failed Order</q-btn>
          </q-item-section>
        </q-item>
      </q-list>
    </div>

</template>

