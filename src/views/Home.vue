<script setup lang="ts">
import Layout from "../layouts/Layout.vue";
import HelloWorld from "../components/HelloWorld.vue";
</script>
<template>
  <div class="page-wrapper">
    <Layout>
      <HelloWorld />
      <template #header>header</template>
      <template #footer>footer</template>
    </Layout>
  </div>
</template>
