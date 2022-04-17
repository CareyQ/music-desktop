<template>
  <div class="user flex flex-col items-center">
    <img :src="Img" class="avatar" />
    <h2 class="username">{{ username }}</h2>
    <span class="desc">{{ desc }}</span>

    <div class="count flex justify-between items-center amount">
      <div class="count-desc flex items-center">
        <div class="count-box flex justify-center"><i class="i-headphones"></i></div>
        累计听歌
      </div>
      <span class="num">666</span>
    </div>
    <div class="count flex justify-between items-center clock">
      <div class="count-desc flex items-center">
        <div class="count-box flex justify-center"><i class="i-clock"></i></div>
        听歌时长
      </div>
      <span class="num">2432</span>
    </div>
    <div class="count flex justify-between items-center playlist">
      <div class="count-desc flex items-center">
        <div class="count-box flex justify-center">
          <i class="i-music"></i>
        </div>
        歌单数量
      </div>
      <span class="num">8</span>
    </div>
    <div class="count flex justify-between items-center like">
      <div class="count-desc flex items-center">
        <div class="count-box flex justify-center"><i class="i-heart"></i></div>
        收藏歌曲
      </div>
      <span class="num">20</span>
    </div>
  </div>
</template>

<script setup>
import Img from '@assets/image/avatar.png'
import { ref } from 'vue'

const username = ref('CareyQ')
const desc = ref('隐身守候')
</script>

<style lang="stylus" scoped>
.user
  width: 95%

.avatar
  width: 86px
  height: 86px
  border-radius: 50%

.username
  margin: 7px 0 0
  font-size: 18px

.desc
  margin-bottom: 10px
  font-size: 14px
  color: var(--color-text-sub)

.count
  width: 100%
  margin: 6px 0
  font-size: 14px

.count-box
  width: 26px
  height: 26px
  font-size: 13px
  line-height: 26px
  text-align: center
  border-radius: 50%

.count-desc
  gap: 10px
  color: var(--color-text-sub)

.num
  font-weight: 700

.amount .count-box
  color: var(--color-primary)
  background-color: rgba(42, 153, 153, 0.2)

.playlist
  .count-box
    color: #2e93d9
    background-color: rgba(65, 122, 251, 0.2)

  i
    margin-top: 1px
    margin-left: -2px

.like
  .count-box
    color: #d44862
    background-color: rgba(212, 72, 98, 0.2)

  i
    margin-top: 1px

.clock
  .count-box
    color: #ef3600
    background-color: rgba(242, 64, 0, 0.2)

  i
    margin-top: 1px
</style>