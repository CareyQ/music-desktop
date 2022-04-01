<script setup lang="ts">
import { IMenus } from './useMenu'
</script>

<template>
  <ul class="menu">
    <li v-for="item in IMenus" :key="item.alias">
      <router-link active-class :to="item.alias" class="menu-item">
        <i :class="'ri-' + item.icon"></i>
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
  padding: 10px 0
  font-size: 16px
  gap: 10px

.menu-item
  position: relative
  z-index: 9
  display: flex
  align-items: center
  cursor: pointer
  padding: 8px 12px 4px
  border-radius: 10px
  line-height: 1
  gap: 6px

.router-link-exact-active.menu-item
  background-color: #f03b4f
  color: #fff
</style>
