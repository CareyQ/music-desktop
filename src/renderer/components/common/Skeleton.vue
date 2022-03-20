<script setup lang="ts">
withDefaults(
  defineProps<{
    bg?: string
    width?: string
    height?: string
  }>(),
  {
    bg: '#e6e6e6',
    width: '100px',
    height: '100px'
  }
)
</script>

<template>
  <div class="skeleton" :style="{ width, height }">
    <div class="block" :style="{ backgroundColor: bg }"></div>
  </div>
</template>

<style lang="stylus" scoped>
.skeleton
  position: relative
  overflow: hidden

.block
  width: 100%
  height: 100%
  border-radius: 2px

.skeleton
  &::after
    content: ''
    position: absolute
    animation: shan 1.5s ease 0s infinite
    top: 0
    width: 50%
    height: 100%
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0.3) 50%,
      rgba(255, 255, 255, 0) 100%
    )

@keyframes shan
  0%
    left: -100%

  100%
    left: 120%
</style>
