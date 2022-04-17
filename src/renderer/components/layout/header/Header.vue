<template>
  <header class="header flex justify-between drag">
    <div class="header-left flex items-center">
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
    </div>

    <div class="control flex items-center justify-end">
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
  height: 48px
  width: 100%
  -webkit-app-region: drag

.header-left
  padding-left: 10px
  width: calc(100% - 320px)

.logo
  gap: 10px

  img
    width: 22px
    height: 22px

.menu
  margin-left: 30px
  color: #7c8db5
  gap: 20px
  font-weight: 500

.menu-item.router-link-exact-active
  color: var(--color-text)

.control
  padding-right: 14px
  width: 320px
  border-left: var(--border)
  gap: 18px
</style>
