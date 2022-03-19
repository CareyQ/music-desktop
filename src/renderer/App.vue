<script setup lang="ts">
import { Bg } from '@renderer/assets/image'
</script>

<template>
  <RouterView />
  <div class="bg">
    <img :src="Bg" />
  </div>
</template>

<style lang="stylus">
#app
  width: 100%
  height: 100%
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  background-color: rgba(0, 0, 0, 0.9)
  color: #fff

.bg
  pointer-events: none
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%

  img
    position: fixed
    top: 0
    filter: blur(40px)
    opacity: 0.5
    width: 100%
    height: 100%
</style>
