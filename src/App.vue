<template>

  <router-view v-slot="{ Component }">
    <transition name="slide-fade" >
      <keep-alive>
        <component :is="Component" :key="key" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import {
  computed,
  // onMounted
} from 'vue';

defineOptions({
  name: 'App'
});



const $route = useRoute();

// onMounted(()=>{
//   setTimeout(()=>{
//     $router.push({path: '/welcome'})
//   }, 2000)
// })
const key = computed(() => $route.path);

</script>
