<script setup lang="ts">
import Header from '@renderer/components/layout/header/Header.vue'
import Player from '@renderer/components/layout/player/Player.vue'
</script>

<template>
  <Header />

  <div class="body">
    <Player />
    <main class="main">main</main>
    <div class="info">info</div>
  </div>
</template>

<style lang="stylus" scoped>
.header, .body
  position: relative
  z-index: 1

.header
  margin-bottom: 6px

.body
  display: flex
  justify-content: space-around

.header, .body > *
  background-color: rgba(255, 255, 255, 0.056)
  overflow: hidden

.body > *
  border-radius: 20px

.player
  width: calc(22% - 10px)

.main
  width: 60%

.info
  width: calc(18% - 10px)
</style>
