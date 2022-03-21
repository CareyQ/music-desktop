<script setup lang="ts">
import UserInfo from './UserInfo.vue'
import Search from './Search.vue'
</script>

<template>
  <div class="header">
    <UserInfo />
    <div class="header-other">
      <div class="header-left">
        <i class="ri-left"></i>
        <i class="ri-refresh"></i>
        <Search />
      </div>
      <div class="header-right">
        <i class="ri-settings"></i>
        <span class="line"></span>
        <i class="ri-down"></i>
        <i class="ri-close"></i>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.header, .header-left, .header-right, .header-other
  display: flex
  align-items: center

.header
  padding: 10px 16px
  -webkit-app-region: drag

.user-info
  width: 260px

.header-other
  flex: 1
  justify-content: space-between

.header-left
  gap: 10px

.header-right
  gap: 12px

.header-right, .header-left
  > i
    cursor: pointer
    -webkit-app-region: no-drag

.line
  margin: 0 10px
  height: 14px
  width: 1px
  background-color: #fff
</style>