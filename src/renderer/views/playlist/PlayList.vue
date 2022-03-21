<script setup lang="ts">
import { getListDetail } from '@renderer/api/netease'
import type { PlayListModel } from '@renderer/models/netease/playlist'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { formatTime } from '@renderer/utils/util'

const route = useRoute()
const detail = ref<PlayListModel>()

onMounted(async () => {
  const id: number = Number(route.query.id)
  detail.value = await getListDetail(id)
  console.log(detail)
})
</script>

<template>
  <div class="playlist">
    <div class="top-bg-noHover playlist-inner">
      <div class="playlist-detail">
        <div class="detail-bg" :style="'background-image: url(' + detail?.picUrl + ')'"></div>
        <div class="detail-inner">
          <img :src="detail?.picUrl" :alt="detail?.name" />
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
      </div>

      <div class="playlist-body">
        <div class="playlist-control">
          <div class="control-left">
            <div class="play-all">
              <div class="icon">
                <div class="icon-bg"></div>
                <i class="ri-play-circle"></i>
              </div>
              <span>播放全部</span>
            </div>
            <span class="count">{{ detail?.songCount }} 首</span>
            <div class="collect primary-btn">收 藏</div>
          </div>
        </div>

        <div class="playlist-content scrollbar">
          <template v-for="item in detail?.songsDetail" :key="item.id">
            <div class="play-list-item">
              <div class="song-main">
                <h3>{{ item.name }}</h3>
                <span>
                  <template v-for="(e, i) in item.ar" :key="i">
                    {{ e.name }}
                    {{ i === item.ar.length - 1 ? '' : ' / ' }}
                  </template>
                </span>
                <span class="art">{{ item.al.name }}</span>
                <span class="time">{{ formatTime(item.dt / 1000) }}</span>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.playlist
  padding: 0 8px 8px

.playlist-inner
  border-radius: 20px
  overflow: hidden

.playlist-detail
  position: relative
  padding: 8px 16px 8px 8px
  overflow: hidden

  &:after
    content: ''
    position: absolute
    z-index: -1
    left: 0
    top: 0
    width: 100%
    height: 100%
    background-color: rgba(0, 0, 0, 0.5)

.detail-inner
  position: relative
  z-index: 1
  display: flex
  gap: 16px

  img
    width: 120px
    border-radius: 12px

  h2
    font-size: 20px

  p
    font-size: 14px

.detail-bg
  position: absolute
  width: 100%
  height: 100%
  left: 0
  top: 0
  z-index: -1
  filter: blur(15px)

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

.playlist-control
  display: flex
  align-items: center
  padding: 10px 0
  font-size: 14px
  border-bottom: 1px solid rgba(255, 255, 255, 0.13)

.control-left
  display: flex
  align-items: center

.play-all
  display: flex
  align-items: center
  gap: 10px
  cursor: pointer

  i
    font-size: 24px
    color: #f03b4f

  .icon
    position: relative
    height: 24px

  .icon-bg
    position: absolute
    background-color: #fff
    width: 40%
    height: 50%
    left: 30%
    top: 30%
    z-index: -1

.count
  margin: 0 30px 0 6px
  opacity: 0.6
  font-size: 13px

.playlist-body
  padding: 0 10px

.playlist-content
  padding: 10px 0
</style>