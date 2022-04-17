<template>
  <div :class="['search-box', { active: inputFocus }]">
    <i class="i-search"></i>
    <input type="text" :placeholder="inputFocus ? '' : '搜索'" @focus="inputFocus = true" @blur="inputFocus = false" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const inputFocus = ref(false)
</script>

<style lang="stylus" scoped>
.search-box
  position: relative
  height: 38px
  padding: 10px 10px 10px 35px
  text-align: left
  background-color: var(--color-gray)
  border-radius: 6px

  i
    position: absolute
    top: 12px
    left: 12px

  input
    font-size: 16px

.search-box.active
  input, i
    color: var(--color-primary)

  &::-webkit-input-placeholder
    color: var(--color-primary)
</style>