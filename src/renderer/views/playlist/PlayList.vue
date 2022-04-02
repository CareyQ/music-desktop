<script setup lang="ts">
import { getListDetail } from '@renderer/api/netease'
import type { PlayListModel } from '@renderer/models/netease/playlist'
import type { Song } from '@renderer/models/netease/song'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { formatTime } from '@renderer/utils/util'
import { usePlayerStore } from '@renderer/store/player'

const route = useRoute()
const detail = ref<PlayListModel>()
const { pushPlayList, play } = usePlayerStore()

onMounted(async () => {
  const id: number = Number(route.query.id)
  detail.value = await getListDetail(id)
  console.log(detail)
})

const playAll = () => {
  if (detail.value) {
    pushPlayList(true, detail.value.songsDetail)
    play(detail.value.songsDetail[0].id)
  }
}
</script>

<template>
  <div class="playlist">
    <div class="playlist-detail">
      <div class="detail-bg" :style="'background-image: url(' + detail?.picUrl + ')'"></div>
      <img :src="detail?.picUrl" :alt="detail?.name" class="cover" />
      <div class="detail">
        <h2>{{ detail?.name }}</h2>
        <p class="meta">
          <span>{{ detail?.authorName }}</span>
          <span class="tags">
            <template v-for="(item, index) in detail?.tags" :key="index">
              <span>#{{ item }}</span>
            </template>
          </span>
        </p>
        <p class="desc">{{ detail?.desc }}</p>
      </div>
    </div>

    <div class="playlist-body">
      <div class="playlist-control">
        <div class="play-all" @click="playAll()">
          <i class="ri-play-circle"></i>
          <span>播放全部</span>
        </div>
        <span class="count">{{ detail?.songCount }} 首</span>
        <div class="collect primary-btn">收 藏</div>
        <div class="more icon-btn"><i class="ri-more"></i></div>
      </div>

      <div class="playlist-content container">
        <template v-for="item in detail?.songsDetail" :key="item.id">
          <div class="play-list-item">
            <div class="item-left">
              <h3 class="title text-hidden">
                {{ item.name }}
                <span v-if="item.tns"> ({{ item.tns[0] }})</span>
              </h3>
              <span class="author text-hidden">
                <template v-for="(e, i) in item.ar" :key="i">
                  {{ e.name }}
                  {{ i === item.ar.length - 1 ? '' : ' / ' }}
                </template>
              </span>
            </div>
            <span class="art text-hidden">{{ item.al.name }}</span>
            <span class="time">{{ formatTime(item.dt / 1000) }}</span>
            <i class="ri-more-line"></i>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.playlist
  padding: 0 0 10px 20px
  height: calc(100% - 16px)

.cover
  width: 120px
  border-radius: 12px

.playlist-detail
  position: relative
  z-index: 1
  display: flex
  gap: 20px
  width: calc(100% - 20px)

.detail
  padding-top: 8px

  h2
    font-size: 20px

  p
    font-size: 14px

.detail-bg
  position: absolute
  width: 100%
  height: 160px
  left: 0
  top: -10%
  z-index: -1
  filter: blur(14px)
  opacity: 0.5
  background-position: center

  &:after
    content: ''
    position: absolute
    width: 100%
    height: 100%
    background-color: rgba(255, 255, 255, 0.24)

.meta
  margin: 6px 0

.tags
  margin-left: 30px

  span
    margin-right: 10px

.desc
  display: -webkit-box
  -webkit-line-clamp: 3
  -webkit-box-orient: vertical
  overflow: hidden
  text-overflow: ellipsis

.playlist-body
  position: relative
  z-index: 9
  height: 100%

.playlist-control
  display: flex
  align-items: center
  padding: 16px 0 10px
  border-bottom: 1px solid rgba(255, 255, 255, 0.13)

.play-all
  cursor: pointer
  display: flex
  align-items: center

  i
    margin-right: 8px
    font-size: 26px
    color: #f03b4f

  span
    margin-top: 3px

.count
  margin: 4px 30px 0 6px
  opacity: 0.6
  font-size: 14px

.more
  margin-left: 20px

.playlist-content
  height: calc(100% - 200px)
  padding: 10px 0

.play-list-item
  display: flex
  justify-content: space-between
  padding: 16px 10px 12px
  margin-right: 20px
  gap: 10px
  align-items: center
  transition: background-color 0.25s
  border-radius: 10px

  &:hover
    background-color: #f1f1f3

.title
  width: 340px
  font-size: 16px
  font-weight: 400

  span
    font-size: 14px
    opacity: 0.6

.author
  font-size: 12px

.art
  width: 200px

.art, .time
  margin-top: 3px

.ri-more-line
  cursor: pointer
  height: 24px
  width: 24px
  border-radius: 50%
  text-align: center
  line-height: 24px
  transition: background-color 0.25s

  &:hover
    background-color: rgba(255, 255, 255, 0.6)
</style>