<template>
  <Header />
  <main class="main flex">
    <RouterView class="container" />
    <div class="sidebar">sidebar</div>
  </main>
</template>

<script setup>
import Header from '@components/layout/header/Header.vue'
</script>

<style lang="stylus" scoped>
.main
  height: calc(100% - 32px)
  width: 100%

.container
  width: 70%
</style>