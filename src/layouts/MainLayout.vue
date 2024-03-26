<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <q-header elevated class="bg-white text-grey-8 q-py-xs" height-hint="40">
      <q-toolbar class="flex flex-row justify-between">
        <div class="q-gutter-sm row items-center no-wrap">
          <q-toolbar-title shrink class="text-weight-bold">
            Geeta.
          </q-toolbar-title>
        </div>
        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn round dense flat color="grey-8" icon="notifications">
            <q-badge color="red" text-color="white" floating>
              5
            </q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>
          <q-btn round dense flat color="grey-8" icon="shopping_bag">
            <q-badge color="red" text-color="white" floating>
              3
            </q-badge>
            <q-tooltip>Messages</q-tooltip>
          </q-btn>
          <q-btn round dense flat color="grey-8" icon="favorite">
            <q-tooltip>Wish List</q-tooltip>
          </q-btn>
          <q-btn round dense flat color="grey-8" icon="search">
            <q-tooltip>Cart</q-tooltip>
          </q-btn>
          <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu" icon="menu" />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-grey-2" :width="240">
      <q-scroll-area class="fit">
        <q-list padding>

        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view v-slot="{ Component }">
        <transition name="fade-transform" mode="out-in">
          <keep-alive>
            <component :is="Component" :key="key" />
          </keep-alive>
        </transition>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
// import TabsPage from 'pages/tabs/TabsPage.vue';

defineOptions({
  name: 'MyLayout'
});
const $router = useRouter();
const leftDrawerOpen = ref(false);
const key = computed(() => $router.currentRoute.value.fullPath);

</script>
