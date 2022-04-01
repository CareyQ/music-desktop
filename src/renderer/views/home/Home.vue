<script setup lang="ts">
import { getHotSongList, getSingers } from '@renderer/api/netease'
import { onMounted, ref } from 'vue'
import { numberFormat } from '@renderer/utils/util'
import { Singer } from '@renderer/models/netease/singer'
import Skeleton from '@renderer/components/common/Skeleton.vue'
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
  <div class="home container">
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
            <div class="item-cover">
              <img :src="item.picUrl" :alt="item.name" />
              <div class="count">
                <i class="ri-headset"></i>
                <span>{{ numberFormat(item.playCount) }}</span>
              </div>
              <i class="ri-play-circle play-btn"></i>
            </div>
            <p class="item-title">{{ item.name }}</p>
          </div>
        </template>
      </div>
    </div>

    <div class="home-module">
      <h2 class="module-title">推荐艺人</h2>
      <div class="module-list">
        <template v-for="item in singers" :key="item.id">
          <div class="module-list-item singer-item">
            <img :src="item.img1v1Url + '?param=150y150'" :alt="item.name" class="radius_100" />
            <p class="item-title">{{ item.name }}</p>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.home
  height: calc(100% - 54px)
  padding: 0 20px 10px

.module-list
  display: flex
  justify-content: space-between
  flex-wrap: wrap

  > *
    margin-bottom: 24px
    width: 22%

.item-cover
  position: relative
  margin-bottom: 6px
  overflow: hidden
  border-radius: 18px
  color: #fff
  cursor: pointer

  img
    display: block
    height: 100%

  &:after
    content: ''
    position: absolute
    bottom: 0
    left: 0
    width: 100%
    height: 50%
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.6))

  .play-btn
    position: absolute
    z-index: 1
    right: 6px
    bottom: 6px
    cursor: pointer

.count
  position: absolute
  left: 10px
  bottom: 10px
  z-index: 1
  font-size: 12px
  line-height: 1

  i
    vertical-align: bottom

  span
    margin-left: 2px

.item-title
  font-size: 14px
  display: -webkit-box
  -webkit-line-clamp: 2
  -webkit-box-orient: vertical
  overflow: hidden
  text-overflow: ellipsis

.singer-item
  img
    cursor: pointer

  .item-title
    margin-top: 10px
    text-align: center
    cursor: pointer
</style>
