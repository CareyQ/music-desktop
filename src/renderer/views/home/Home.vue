<script setup lang="ts">
import { getHotSongList, getSingers } from '@renderer/api/netease'
import { onMounted, ref } from 'vue'
import { numberFormat } from '@renderer/utils/util'
import { Singer } from '@renderer/models/netease/singer'
import Skeleton from '@renderer/components/common/Skeleton.vue'
import SvgIcon from '@renderer/components/common/SvgIcon.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const songList = ref()
const singers = ref<Singer[]>([])

onMounted(async () => {
  songList.value = await getHotSongList()
  singers.value = await getSingers()
})

const toPlayList = (id: number) => {
  router.push({ name: 'playlist', query: { id: id } })
}
</script>

<template>
  <div class="home scrollbar">
    <div class="home-module" v-if="!songList">
      <Skeleton height="24px" width="23%" class="module-title" />
      <div class="module-list">
        <template v-for="index in 8" :key="index">
          <div class="module-list-item">
            <Skeleton width="100%" height="154px" />
            <Skeleton width="100%" height="16px" style="margin: 6px 0 4px" />
            <Skeleton width="50%" height="16px" />
          </div>
        </template>
      </div>
    </div>

    <div class="home-module" v-else>
      <h2 class="module-title">推荐歌单</h2>
      <div class="module-list">
        <template v-for="item in songList" :key="item.id">
          <div class="module-list-item" @click="toPlayList(item.id)">
            <div class="item-inner">
              <div class="item-cover">
                <img :src="item.picUrl" :alt="item.name" />
                <div class="count">
                  <SvgIcon name="headPhone" size="14" />
                  <span>{{ numberFormat(item.playCount) }}</span>
                </div>
                <SvgIcon name="play-circle-fill" class="play-btn" size="26" />
              </div>
              <p class="item-title">{{ item.name }}</p>
            </div>
          </div>
        </template>
      </div>
    </div>

    <div class="home-module">
      <h2 class="module-title">推荐艺人</h2>
      <div class="module-list">
        <template v-for="item in singers.sampleSize(8)" :key="item.id">
          <div class="module-list-item singer-item">
            <div class="item-inner">
              <img :src="item.img1v1Url + '?param=150y150'" :alt="item.name" class="radius_100" />
              <p class="item-title">{{ item.name }}</p>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.home
  padding: 0 16px 16px
  height: calc(100% - 56px)
  overflow-y: auto

.module-list
  display: flex
  justify-content: space-between
  flex-wrap: wrap
  margin: 0 -8px

  > *
    margin-bottom: 12px
    width: 25%
    padding: 0 8px

.item-inner
  position: relative
  padding: 6px 6px 10px
  transition: background-color 0.25s
  border-radius: 14px
  cursor: pointer
  height: 100%

  &:hover
    background-color: rgba(255, 255, 255, 0.11)

.item-cover
  position: relative
  margin-bottom: 6px
  overflow: hidden
  border-radius: 14px

  img
    display: block
    height: 100%

  &:after
    content: ''
    position: absolute
    bottom: 0
    left: 0
    width: 100%
    height: 30%
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.6))

  .play-btn
    position: absolute
    z-index: 1
    right: 6px
    bottom: 6px

.count
  position: absolute
  left: 10px
  bottom: 10px
  z-index: 1
  display: flex
  align-items: center
  font-size: 12px

  span
    margin-left: 4px

.item-title
  font-size: 14px
  display: -webkit-box
  -webkit-line-clamp: 2
  -webkit-box-orient: vertical
  overflow: hidden
  text-overflow: ellipsis

.singer-item
  .play-btn
    position: absolute
    left: 50%
    top: 50%
    transform: translate(-50%, -100%)
    opacity: 0.9
    transition: opacity 0.25s

    &:hover
      opacity: 1

  .item-title
    margin-top: 10px
    text-align: center
</style>
