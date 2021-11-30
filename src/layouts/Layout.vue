<script setup lang="ts"></script>

<template>
  <div class="main-layout">
    <slot name="header" class="header" />
    <slot class="main" />
    <slot name="footer" class="footer" />
  </div>
</template>

<style lang="scss">
.main-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
