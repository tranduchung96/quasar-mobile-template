<script setup lang="ts">

import { useRouter } from 'vue-router';

const $router = useRouter();

</script>

<template>
  <div class="bg-white">
    <q-layout view="hHh lpR fFf" class="bg-grey-1">
      <q-header class="bg-transparent">
        <q-toolbar class="w-screen">
          <q-btn
            flat
            round
            color="back"
            icon="arrow_back"
            text-color="black"
            @click="$router.back()"
            class="absolute"
          />
        </q-toolbar>
      </q-header>
      <q-page-container>
        <div class="pt-10">
          <div class="w-full flex flex-row justify-center">
           <q-img
             src="src/assets/congrats.svg"
             height="150px"
             width="150px"
           />
          </div>
          <div class="flex flex-row justify-center pt-10">
            <span class="text-bold text-black text-2xl w-11/12 text-center">
              Congrats! Your Order has
              been placed
            </span>
          </div>
          <div class="flex flex-row justify-center pt-5">
            <span class="font-light text-gray-500 text-xs w-11/12 text-center">
              Your items has been placed and is on
                it’s way to being processed
            </span>
          </div>
          <div class="flex flex-row justify-center pt-16">
            <div class="w-11/12 flex flex-col justify-start align-middle">
              <div class="py-2">
                <q-btn
                  class="py-3 w-full"
                  color="primary"
                  rounded
                  icon="local_shipping"
                >
                  Track Order
                </q-btn>
              </div>
              <div class="py-2">
                <q-btn
                  class="py-3 w-full"
                  color="primary"
                  rounded
                >
                  Continue shopping
                </q-btn>
              </div>
              <div class="py-2 w-full flex justify-center">
                <q-btn
                  class="py-3"
                  color="transparent"
                  text-color="black"
                  rounded
                  icon="arrow_back"
                  flat
                  dense
                  no-caps
                  :ripple="false"
                  @click="$router.back()"
                >
                  Back to home
                </q-btn>
              </div>
            </div>

          </div>
        </div>
      </q-page-container>
    </q-layout>
  </div>

</template>


