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
  width: 26px
  height: 26px
  text-align: center
  line-height: 26px
  transition: all 0.25s
  border-radius: 6px

  &:hover
    background-color: #f2f2f4
</style>