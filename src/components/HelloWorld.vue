<script setup lang="ts">
import { ref } from "vue";

withDefaults(
  defineProps<{
    msg?: string;
  }>(),
  {
    msg: "Hello World!",
  },
);

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>
  <input type="button" :value="`count is: ${count}`" @click="count++" />
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>
