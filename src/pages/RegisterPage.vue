<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useFirebaseAuth } from 'vuefire';
import { createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { showErrorNotify, showInfoNotify } from 'src/utilities/notify';
defineOptions({
  name: 'RegisterPage'
});
const $router = useRouter();
const $fireAuth = useFirebaseAuth();
const back = async () => {
  $router.back();
};
const form = reactive({
  username: '',
  email: '',
  password: '',
  rememberMe: false
});
const register = async ()=>{
  if(!$fireAuth){
    showErrorNotify('Register fail because can not auth !')
    return;
  }
  try {
    const userCredential = await createUserWithEmailAndPassword($fireAuth, form.email, form.password);
    console.log(userCredential);
    if(userCredential) {
      await updateProfile(userCredential.user, {displayName: form.username});
      showInfoNotify('Register success !')
      await $router.push({
        path: '/tabs'
      })
    }

  } catch (error){
    showErrorNotify('Register error !')
    console.log(error);
  }

}
</script>

<template>
  <div class="h-screen flex flex-col justify-start ">
    <div class="login h-1/3 w-screen">
      <div class="flex justify-center">
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
          Get’s started with Geeta.
        </span>
        <p class="text-white">
          Already have an account? <a href="javascript:void(0)">Log in </a>
        </p>
        <span class="text-white text-2xl text-bold text-uppercase pb-5">
            Register
        </span>
      </div>
    </div>


    <form class="form">
      <div class="flex flex-col px-6 justify-start">
        <label class="text-sm text-bold pt-1">
          User name
        </label>
        <q-input
          v-model="form.username"
          outlined
          borderless
          hide-hint
          type="email"
          bg-color="transparent"
          hint="Enter you name"
        >
          <template v-slot:prepend>
            <q-icon size="xs" name="person" />
          </template>
        </q-input>
      </div>
      <div class="flex flex-col px-6 justify-start">
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
            <q-icon size="xs" name="error" />
          </template>
        </q-input>
      </div>
      <div class="flex flex-col px-6 justify-start pt-1">
        <label class="text-sm text-bold py-2">
          Password
        </label>
        <q-input
          v-model="form.password"
          outlined
          borderless
          hide-hint
          type="password"
          autocomplete="on"
          hint="Enter your password"
        >
          <template v-slot:prepend>
            <q-icon size="xs" name="lock" />
          </template>
          <template v-slot:append>
            <q-icon size="xs" name="error" />
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
          @click="register"
        >
          Register
        </q-btn>
      </div>
    </form>
    <div class="pt-2">
      <div class="flex flex-row justify-center">
        <span>
          By  joining I agree to receive emails from Geeta.
        </span>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.login {
  background-image: url("src/assets/model.png");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
