<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

defineOptions({
  name: 'RegisterPage'
});
const $router = useRouter();

const back = async () => {
  $router.back();
};
const form = reactive({
  email: '',
  password: '',
  rememberMe: false
});
</script>

<template>
  <div class="h-screen flex flex-col justify-start ">
    <div class="login h-1/3 w-screen">
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


    <div class="form pt-4">
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
          hint="Enter your password"
        >
          <template v-slot:prepend>
            <q-icon size="xs" name="lock" />
          </template>
        </q-input>
      </div>
      <div class="flex flex-row px-6 justify-between pt-1">
        <div class="flex flex-col justify-center">
          <q-checkbox
            v-model="form.rememberMe"
            label="Remember me"
            class="text-xs"
          />
        </div>
        <div class="flex flex-col justify-center">
          <a>
            Forgot Password?
          </a>
        </div>
      </div>
      <div class="w-screen flex px-6 flex-row justify-center pt-1">
        <q-btn
          rounded
          color="primary"
          text-color="white"
          size="md"
          padding="13px 0"
          class="w-full"
        >
          Login
        </q-btn>
      </div>
    </div>
    <div class="pt-2">
      <div class="flex flex-row justify-center">
        <span>
          Not registered yet?
        </span>
        <a>Create an Account</a>
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
