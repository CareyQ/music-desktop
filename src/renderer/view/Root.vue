<template>
  <Header />
  <main class="main flex">
    <RouterView class="container" />
    <Sidebar class="sidebar" />
  </main>
</template>

<script setup>
import Header from '@components/layout/header/Header.vue'
import Sidebar from '@components/layout/sidebar/Sidebar.vue'
</script>

<style lang="stylus" scoped>
.main
  height: calc(100% - 32px)
  width: 100%

.container
  padding: 0 34px
  width: calc(100% - 320px)

.sidebar
  width: 320px
</style>