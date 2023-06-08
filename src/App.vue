<script setup>
  import { RouterView } from 'vue-router';
</script>

<template>
  <v-container class="mt-8">
    <p class="text-center mb-4 text-uppercase text-cyanG font-weight-bold splitter">
      Spli <br/>tter
    </p>
    <RouterView/>
  </v-container>
</template>

<style lang="scss" scoped>

::v-deep{
  .splitter{
      font-size: 1.2rem;
  }
}
</style>
