<template>
  <i :class="['no-drag', { box: box }]"></i>
</template>

<script setup>
defineProps({
  box: Boolean
})
</script>

<style lang="stylus" scoped>
i
  cursor: pointer

.box
  display: inline-block
  width: 28px
  height: 28px
  text-align: center
  line-height: 28px
  transition: all 0.25s
  border-radius: 6px

  &:hover
    background-color: rgba(255, 255, 255, 0.1)
</style>