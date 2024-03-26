<template>

  <router-view v-slot="{ Component }">
    <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <component :is="Component" :key="key" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { computed, onMounted } from 'vue';

defineOptions({
  name: 'App'
});



const $router = useRouter();

onMounted(()=>{
  setTimeout(()=>{
    $router.push({path: '/welcome'})
  }, 2000)
})
const key = computed(() => $router.currentRoute.value.fullPath);

</script>
