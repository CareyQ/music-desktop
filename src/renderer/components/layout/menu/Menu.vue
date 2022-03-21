<script setup lang="ts">
import { IMenus } from './useMenu'
</script>

<template>
  <ul class="menu">
    <li v-for="item in IMenus" :key="item.alias">
      <router-link active-class :to="item.alias" class="menu-item top-bg">
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
  height: 50px
  font-size: 14px
  gap: 14px

.menu-item
  cursor: pointer
  padding: 4px 12px
  border-radius: 10px

  i
    font-size: 16px
    margin-right: 6px
    vertical-align: sub

.router-link-exact-active.menu-item
  background-color: #f03b4f
</style>
