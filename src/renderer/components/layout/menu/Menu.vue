<script setup lang="ts">
import { IMenus } from './useMenu'
import SvgIcon from '@renderer/components/common/SvgIcon.vue'
</script>

<template>
  <ul class="menu">
    <li v-for="item in IMenus" :key="item.alias">
      <router-link active-class :to="item.alias" class="menu-item top-bg">
        <SvgIcon :name="item.alias" />
        <span>{{ item.name }}</span>
      </router-link>
    </li>
  </ul>
</template>

<style lang="stylus" scoped>
.menu
  display: flex
  justify-content: center
  align-items: center
  height: 50px
  font-size: 14px
  gap: 14px

.menu-item
  display: flex
  align-items: center
  cursor: pointer
  padding: 4px 12px
  border-radius: 10px
  gap: 6px

.router-link-exact-active.menu-item
  background-color: #3fb17f
</style>
