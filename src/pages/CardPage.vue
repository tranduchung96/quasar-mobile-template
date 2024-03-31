<script setup lang="ts">

import { useRouter } from 'vue-router';
import { reactive } from 'vue';

const $router = useRouter();
const cardIfo = reactive<{
  name: string,
  number: string,
  expire: string,
  cvc: string
}>({
  name: '',
  number: '',
  expire: '',
  cvc: ''
});
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
          <q-toolbar-title class="text-center text-black">
            Credit / Debit card
          </q-toolbar-title>
        </q-toolbar>
      </q-header>
      <q-page-container>
        <div class="flex flex-col justify-start">
          <div class="bg-primary px-10 mx-5 rounded">
            <div class="flex flex-row justify-end py-4">
              <q-img width="64px" height="40px" src="src/assets/card_logo.png" />
            </div>
            <div class="flex justify-between py-4">
              <span class="text-xl">
                5757
              </span>
              <span class="text-xl">
                4747
              </span>
              <span class="text-xl">
                5757
              </span>
              <span class="text-xl">
                4747
              </span>
            </div>
            <div class="flex justify-between py-4">
              <div class="text-lg">
                Varat Singh Sharma
              </div>
              <div class="text-lg">
                7/21
              </div>
            </div>
          </div>
          <div class="flex justify-center py-5">
            <q-img
              src="src/assets/camera_icon.svg"
              width="34px"
              height="29px"
              class="font-light"
            />
          </div>
          <div class="px-5">
            <q-form>
              <q-item class="flex flex-col justify-start">
                <q-item-label class="text-bold py-1">
                  Name on card
                </q-item-label>
                <q-item-section>
                  <q-input
                    filled
                    hide-hint
                    round
                    bottom-slots
                    fill-mask
                    borderless
                    v-model="cardIfo.name"
                    type="text"
                    lazy-rules
                    input-class="rounded"
                  />
                </q-item-section>
              </q-item>
              <q-item class="flex flex-col justify-start">
                <q-item-label class="text-bold py-1">
                  Card number
                </q-item-label>
                <q-item-section>
                  <q-input
                    filled
                    hide-hint
                    round
                    bottom-slots
                    fill-mask
                    borderless
                    :stack-label="false"
                    type="number"
                    v-model="cardIfo.number"
                  >

                    <template v-slot:append>
                      <q-img
                        src="src/assets/card.svg"
                        width="40px"
                        height="30px"
                      ></q-img>
                    </template>
                  </q-input>
                </q-item-section>
              </q-item>
              <q-item class="flex flex-row justify-between">
                <q-item-section class="w-2/5">
                  <q-item-label class="text-bold py-1">
                    Expiry date
                  </q-item-label>
                  <q-item-section>
                    <q-input
                      filled
                      hide-hint
                      round
                      bottom-slots
                      fill-mask
                      borderless
                      :stack-label="false"
                      type="date"
                      v-model="cardIfo.expire"
                    />
                  </q-item-section>
                </q-item-section>
                <q-item-section class="w-2/5">
                  <q-item-label class="text-bold py-1">
                    CVC
                  </q-item-label>
                  <q-item-section>
                    <q-input
                      filled
                      hide-hint
                      round
                      bottom-slots
                      fill-mask
                      borderless
                      :stack-label="false"
                      type="number"
                      v-model="cardIfo.cvc"
                    >
                      <template v-slot:append>
                        <q-img width="40px" height="30px" src="src/assets/cvc_hint.svg" />
                      </template>
                    </q-input>
                  </q-item-section>
                </q-item-section>
              </q-item>
              </q-form>
          </div>
        </div>

      </q-page-container>
      <q-footer class="bg-transparent flex flex-row justify-center py-4">
        <q-btn
          class="w-11/12 flex flex-row justify-between"
          color="primary"
          padding="15px 0"
          rounded
        >
          Use this card
        </q-btn>
      </q-footer>
    </q-layout>
  </div>

</template>


