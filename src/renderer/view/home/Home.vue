<template>
  <div class="home">
    <div class="module">
      <div class="module-title">
        <h2>云音乐</h2>
        <span>See all</span>
      </div>

      <div class="module-body">
        <div class="community-count">
          <div class="community-count-inner">
            <p class="user">累计用户：<span>2020</span></p>
            <p class="online">在线用户：<span>200</span></p>
            <p class="list">共享歌单：<span>16</span></p>
          </div>
          <p>社区统计</p>
        </div>

        <template v-for="item in Cloud" :key="item.icon">
          <ListItem :item="item" bgColor />
        </template>
      </div>
    </div>

    <div class="module">
      <div class="module-title">
        <h2>热门歌手</h2>
        <span>See all</span>
      </div>

      <div class="module-body">
        <template v-for="item in Singer" :key="item.icon">
          <ListItem :item="item" singer />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Cloud, Singer } from './cloud'
import ListItem from '@components/common/ListItem.vue'
</script>

<style lang="stylus" scoped>
.community-count
  width: calc(50% - 10px)
  padding: 14px
  border-radius: 10px
  border: var(--border)

  > p
    font-weight: bold
    margin-top: 8px
    font-size: 14px

.community-count-inner
  display: flex
  flex-direction: column
  justify-content: center
  width: 100%
  height: 112.5px
  padding: 12px 20px
  font-size: 14px
  color: #fff
  border-radius: 16px
  background: linear-gradient(to right, #565656, #2f2a30)

  p
    position: relative
    margin-left: 16px
    line-height: 2
    display: flex
    justify-content: space-between

.user, .list, .online
  &:before
    content: ''
    position: absolute
    top: 12px
    left: -12px
    width: 4px
    height: 4px
    border-radius: 50%

.online:before
  background-color: #31c27c

.list:before
  background-color: #ed3c52

.user:before
  background-color: #fa7c05
</style>
