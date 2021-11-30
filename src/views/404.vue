<script setup lang="ts">
import { ref } from "@vue/reactivity";

const msg = ref("页面不见了！");
</script>

<template>
  <div class="error-page">
    <div class="error-content">
      <div class="code"><code>404</code></div>
      <div class="msg">
        <span>{{ msg }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.error-page {
  .error-content {
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    .code {
      font-size: 8rem;
      color: var(--c-red);
    }
  }
}
</style>
