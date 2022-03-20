<script setup lang="ts">
import { getListDetail } from '@renderer/api/netease'
import type { PlayListModel } from '@renderer/models/netease/playlist'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import SvgIcon from '@renderer/components/common/SvgIcon.vue'

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

      <div class="playlist-control">
        <div class="btns">
          <SvgIcon name="play-line" />
        </div>
      </div>
      6 6
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
</style>