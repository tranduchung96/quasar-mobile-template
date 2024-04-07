<script setup lang="ts">
import { useFirebaseAuth } from 'vuefire';
import { useRouter } from 'vue-router';

defineOptions({
  name: 'MenuLayout'
})

const emit = defineEmits(['close']);
const $fireAuth = useFirebaseAuth();
const $router = useRouter();
const signOut = async ()=>{
  await $fireAuth?.signOut();
  await $router.push({
    path: '/login'
  });
}
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
        <q-item>
          <q-item-section>
            <q-btn @click="signOut()">Logout</q-btn>
          </q-item-section>
        </q-item>
      </q-list>
    </div>

</template>

