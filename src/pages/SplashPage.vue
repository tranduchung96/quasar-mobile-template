<script setup lang="ts">

</script>

<template>
  <div class="welcome h-screen flex flex-col justify-start pt-28 ">
    <div class="flex justify-center">
      <span class="text-black text-3xl text-bold">
        Geeta.
      </span>
    </div>

    <div class="flex flex-col justify-center align-middle pt-28">
      <p class="text-black text-center text-3xl px-4 pt-3">
        Create your fashion in your own way
      </p>
        <p class="px-3 text-black text-sm text-center pt-5">
          Each men and women has their own style, Geeta help you to create your unique style.
        </p>

      <div class="flex flex-row justify-center pt-10">
        <q-btn
          rounded
          outline
          color="black"
          text-color="black"
          padding="10px 50px"
          size="md"
          class="w-1/2"
          to="/login"
        >
          Login
        </q-btn>
      </div>
      <div class="flex flex-row justify-center py-3">
        <span class="text-xl">
         - or -
        </span>
      </div>
      <div class="flex flex-row justify-center">
        <q-btn
          rounded
          color="primary"
          text-color="white"
          padding="10px 50px"
          size="md"
          class="w-1/2"
          to="/register"
        >
          Register
        </q-btn>
      </div>

    </div>

    <div>

    </div>
  </div>
</template>
<style scoped lang="scss">
.welcome{
  background-image: url("src/assets/splash.png");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
