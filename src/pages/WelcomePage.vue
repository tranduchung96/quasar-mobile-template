<script setup lang="ts">

</script>

<template>
  <div class="welcome h-screen flex flex-col justify-center ">
    <div class="w-full flex flex-row justify-center">
      <span class="font-extrabold	text-7xl text-white ">
        Geeta.
      </span>
    </div>
    <div class=" w-screen flex flex-row justify-center pt-4">
      <q-btn
        rounded
        no-caps
        outline
        text-color="white"
        size="lg"
        padding="5px 0"
        class="w-1/2"
        to="/splash"
      >
        Shop Now
      </q-btn>
    </div>

  </div>
</template>
<style scoped lang="scss">
.welcome{
  background-image: url("src/assets/welcome.png");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
