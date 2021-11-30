<script setup lang="ts">
import Layout from "../layouts/Layout.vue";
import HelloWorld from "../components/HelloWorld.vue";
</script>

<template>
  <div class="home-page">
    <Layout>
      <HelloWorld />
      <template #header><img alt="Vue logo" src="../assets/logo.png" /></template>
      <template #footer>footer</template>
    </Layout>
  </div>
</template>

<style lang="scss">
.home-page {
  margin-top: 10vh;
}
</style>
