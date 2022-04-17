<template>
  <div class="player" :style="style">
    <p class="title">Now Playing</p>
    <div class="song-img" :style="'background-image: url(' + picUrl + ')'"></div>
    <p class="song-title">The Adventure</p>
    <p class="song-author">Angels & Airwaves</p>

    <div class="slider flex items-center">
      <span>2:40</span>
      <Slider v-model="val" :tooltips="false" />
      <span>3:40</span>
    </div>

    <div class="control flex justify-between items-center">
      <IconBtn class="i-shuffle" box />
      <IconBtn class="i-prev" box />
      <IconBtn class="i-play" />
      <IconBtn class="i-next" box />
      <IconBtn class="i-list" box />
    </div>
  </div>
</template>

<script setup>
import * as Vibrant from 'node-vibrant'
import { ref, watch } from 'vue'
import Slider from '@vueform/slider'
import IconBtn from '@components/common/IconBtn.vue'

const picUrl = ref('')
const style = ref({})
const val = ref(20)

watch(picUrl, (newVal, oldVal) => {
  Vibrant.from(newVal).getPalette().then((e) => {
    console.log(e.Vibrant.rgb);
    const r = e.Vibrant.rgb[0] - 18
    const g = e.Vibrant.rgb[1] - 35
    style.value.backgroundColor = Vibrant.Util.rgbToHex(r, g, g)
    style.value.color = e.Vibrant.bodyTextColor
  })

})

picUrl.value = 'http://mms1.baidu.com/it/u=4205987868,927757868&fm=253&app=138&f=JPEG&fmt=auto&q=75?w=500&h=332'

</script>

<style lang="stylus" scoped>
.player
  width: 100%
  margin-top: 20px
  padding: 0 30px
  border-radius: 15px

.title
  margin: 24px 0

.song-img
  margin-bottom: 24px
  width: 100%
  height: 112px
  border-radius: 12px
  background-size: cover

.song-title
  font-size: 14px

.song-author
  font-size: 12px
  opacity: 0.7

.slider
  margin: 20px 0
  gap: 14px
  font-size: 12px

.slider-horizontal
  height: 2px
  width: 100%

.control
  margin-bottom: 24px
  font-size: 14px

.i-play
  width: 40px
  height: 40px
  line-height: 40px
  text-align: center
  display: block
  background-color: rgba(255, 255, 255, 0.12)
  border-radius: 8px
  transition: all 0.25s

  &:hover
    background-color: rgba(255, 255, 255, 0.168)
</style>

<style lang="stylus">
.slider-connect, .slider-base, .slider-connects
  height: 100%
  width: 100%

.slider-base
  background-color: rgba(255, 255, 255, 0.2)
  border-radius: 999px

.slider-connects
  overflow: hidden
  border-radius: 999px

.slider-connect
  transform-origin: 0 0
  background-color: #fff

.slider-handle
  position: absolute
  height: var(--slider-handle-width, 10px)
  width: 2px
  right: calc(var(--slider-handle-width, 4px) / 2 * -1)
  top: calc(var(--slider-handle-height, 16px) / 2 * -1 - var(--slider-height, 6px) / 2 * -1 + -1px)
  background-color: #fff
</style>