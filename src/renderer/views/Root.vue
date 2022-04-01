<script setup lang="ts">
import Header from '@renderer/components/layout/header/Header.vue'
import Sidebar from '@renderer/components/layout/sidebar/Sidebar.vue'
import Menu from '@renderer/components/layout/menu/Menu.vue'
</script>

<template>
  <Header />

  <div class="body">
    <Sidebar />
    <main class="main">
      <Menu />

      <RouterView />
    </main>
  </div>
</template>

<style lang="stylus" scoped>
.header, .body
  position: relative
  z-index: 1

.body
  display: flex
  justify-content: space-between
  height: calc(100% - 30px)

.sidebar
  width: 28%

.main
  width: 72%
</style>
