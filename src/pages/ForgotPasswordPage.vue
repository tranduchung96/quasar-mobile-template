<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

import {sendPasswordResetEmail} from 'firebase/auth';
import { useFirebaseAuth } from 'vuefire';
import { EmailValidate } from 'src/utilities/validate';
import { showInfoNotify, showWarningNotify } from 'src/utilities/notify';

defineOptions({
  name: 'ForgotPasswordPage'
});
const $router = useRouter();
const $fireAuth = useFirebaseAuth();
const showBack = ref(false);
const back = async () => {
  $router.back();
};
const form = reactive({
  email: '',
});
const reset = async ()=>{
  if(!$fireAuth) return;
  if(!form.email){
    showWarningNotify('Email is required !');
    return;
  }
  if(!EmailValidate(form.email)){
    form.email = '';
    showWarningNotify('Email invalid !')
    return;
  }
  await sendPasswordResetEmail($fireAuth, form.email);
  showInfoNotify('Send email success !')
  showBack.value = true;
}
</script>

<template>
  <div class="h-screen flex flex-col justify-start ">
    <div class="login h-2/5 w-screen">
      <div class="flex justify-center py-3">
        <q-toolbar>
          <q-btn
            flat
            round
            color="white"
            icon="arrow_back"
            @click="back"
          />
        </q-toolbar>
      </div>
      <div class="h-5/6 flex flex-col justify-evenly px-5">
        <span class="text-2xl text-bold text-white">
          Welcome Back!
        </span>
        <p class="text-white">
          Please enter your email !
        </p>
        <span class="text-white text-2xl text-bold text-uppercase pb-5">
            Forgot Password
        </span>
      </div>
    </div>


    <form class="form pt-4">
      <div class="flex flex-col px-6 justify-start pt-4">
        <label class="text-sm text-bold pt-1">
          Email address
        </label>
        <q-input
          v-model="form.email"
          outlined
          borderless
          hide-hint
          type="email"
          hint="Enter you email"
        >
          <template v-slot:prepend>
            <q-icon size="xs" name="email" />
          </template>
          <template v-slot:append>
            <q-icon size="xs" name="error" :color="form.email?'':'negative'" />
          </template>
        </q-input>
      </div>
      <div class="w-screen flex px-6 flex-row justify-center pt-1">
        <q-btn
          rounded
          color="primary"
          text-color="white"
          size="md"
          padding="13px 0"
          class="w-full"
          @click="reset"
        >
          Send email reset
        </q-btn>
      </div>
      <div
        v-show="showBack"
        class="w-screen flex px-6 flex-row justify-center pt-5">
        <q-btn
          rounded
          outline
          size="md"
          padding="13px 0"
          class="w-full"
          @click="back"
        >
          Back to login
        </q-btn>
      </div>
    </form>
  </div>
</template>
<style scoped lang="scss">
.login {
  background-image: url("src/assets/model.png");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
