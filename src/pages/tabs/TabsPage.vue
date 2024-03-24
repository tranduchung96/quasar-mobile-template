<script setup lang="ts">


defineOptions({
  name: 'TabsPage'
})
import { computed, onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useTabsStore } from 'stores/tabs';
import {useRoute} from 'vue-router';

const $router = useRouter();
const $route = useRoute();
const $tabs = useTabsStore();
const tab = ref('home');
watch(tab, (value)=>{
  $router.push({
    path: '/tabs/' + value
  })
})

const tabs = computed(()=> $tabs.getTabs)

onMounted(()=>{
  selectTab();
});

const selectTab = () =>{
  const path = $route.path;
  const paths = path.split('/');
  const tabName = paths[paths.length - 1];
  if(tabName){
    tab.value = tabName;
  }
}
</script>

<template>
  <q-tabs v-model="tab"  mobile-arrows narrow-indicator no-caps dense align="justify">
    <template v-for="t in tabs" v-bind:key="t.name">
      <q-tab :name="t.name" :icon="t.icon" :label="t.label" />
    </template>
  </q-tabs>
</template>
