<template>
  <aside class="sidebar flex flex-col items-center">
    <UserInfo />
    <Player />
  </aside>
</template>

<script setup>
import Search from './Search.vue'
import UserInfo from './UserInfo.vue'
import Player from './Player.vue'
</script>

<style lang="stylus" scoped>
.sidebar
  padding: 0 34px 10px
  border-left: var(--border)
  text-align: center
</style>