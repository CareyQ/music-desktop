<script setup lang="ts">
import UserInfo from './UserInfo.vue'
import Player from './Player.vue'
</script>

<template>
  <aside class="sidebar">
    <UserInfo />
    <Player />
  </aside>
</template>

<style lang="stylus" scoped>
.sidebar
  display: flex
  flex-direction: column
  padding: 10px 20px 20px
  border-right: 2px solid #ececec
</style>