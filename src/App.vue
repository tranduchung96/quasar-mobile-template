<template>

  <router-view />
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';

defineOptions({
  name: 'App'
});



const $router = useRouter();

onMounted(()=>{
  setTimeout(()=>{
    $router.push({path: '/welcome'})
  }, 2000)
})

</script>
