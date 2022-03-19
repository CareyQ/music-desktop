<script setup lang="ts">
import UserInfo from './UserInfo.vue'
import Search from './Search.vue'
import SvgIcon from '@renderer/components/common/SvgIcon.vue'
</script>

<template>
  <div class="header">
    <UserInfo />
    <div class="header-other">
      <div class="header-left">
        <SvgIcon name="back" />
        <SvgIcon name="refresh" />
        <Search />
      </div>
      <div class="header-right">
        <SvgIcon name="settings" />
        <SvgIcon name="line" noPointer />
        <SvgIcon name="minimize" size="14" />
        <SvgIcon name="close" size="12" />
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

.header-left, .header-right
  gap: 16px
</style>