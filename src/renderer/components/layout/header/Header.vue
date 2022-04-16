<template>
  <header class="header flex items-center drag">
    <div class="logo flex items-center">
      <img :src="Logo" alt="Music" />
      <h1 class="title">Music</h1>
    </div>

    <nav class="menu flex items-center">
      <template v-for="item in IMenus" :key="item.alias">
        <router-link active-class :to="item.alias" class="menu-item no-drag">
          <span>{{ item.name }}</span>
        </router-link>
      </template>
    </nav>

    <div class="control flex items-center">
      <IconBtn class="i-bell" />
      <IconBtn class="i-set" />
      <i></i>
      <IconBtn class="i-minus" />
      <IconBtn class="i-close" />
    </div>
  </header>
</template>

<script setup>
import { IMenus } from './useMenu'
import Logo from '@assets/logo.svg'
import IconBtn from '@components/common/IconBtn.vue'
</script>

<style lang="stylus" scoped>
.header
  position: relative
  height: 32px
  padding: 0 10px
  -webkit-app-region: drag
  background-color: #f7f7f7

.logo
  gap: 10px

  img
    width: 22px
    height: 22px

.menu
  margin-left: 30px
  color: #7c8db5
  gap: 20px

.menu-item.router-link-exact-active
  color: var(--color-text)

.control
  position: absolute
  right: 14px
  top: 8px
  gap: 18px
</style>
