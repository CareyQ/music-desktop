<script setup lang="ts">
import SvgIcon from '@renderer/components/common/SvgIcon.vue'
</script>

<template>
  <div class="input-wrap top-bg">
    <i class="ri-search"></i>
    <input type="text" placeholder="搜索" />
  </div>
</template>

<style lang="stylus" scoped>
.input-wrap
  display: flex
  align-items: center
  margin-left: 6px
  padding: 0 16px
  height: 30px
  width: 240px
  border-radius: 22px
  -webkit-app-region: no-drag

input
  margin-left: 10px
  font-size: 14px
  color: #fff
</style>