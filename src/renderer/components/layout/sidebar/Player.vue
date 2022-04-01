<script setup lang="ts">
const img = 'https://p1.music.126.net/Rvvp7kN1izwbmIFaiFe83A==/109951167207501334.jpg'
</script>

<template>
  <div class="player">
    <div class="music-info">
      <div class="bg" :style="'background-image: url(' + img + ')'"></div>
      <div class="music-info-inner">
        <img :src="img" alt="" />
        <div class="music-info-text">
          <h2 class="music-title">隐身守候</h2>
          <p class="music-author">朱茵</p>
          <i class="ri-heart"></i>
        </div>
      </div>
    </div>

    <div class="control">
      <div class="control-other">
        <i class="ri-shuffle"></i>
        <i class="ri-download"></i>
        <i class="ri-volume-up"></i>
        <i class="ri-play-list"></i>
        <i class="ri-more"></i>
      </div>

      <div class="progress-bar">
        <div class="bar">
          <div class="doing"></div>
        </div>
        <div class="time">
          <span>00:00</span>
          <span>03:24</span>
        </div>
      </div>

      <div class="control-main">
        <i class="bt-prev"></i>
        <i class="bt-play"></i>
        <i class="bt-next"></i>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.player
  i
    cursor: pointer

.music-info
  position: relative
  color: #fff
  border-radius: 12px 12px 6px 6px
  overflow: hidden

.music-info-inner
  position: relative
  z-index: 9

  img
    display: block
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1)

.bg
  position: absolute
  z-index: 0
  width: 100%
  height: 100%
  background-size: cover
  background-position: center
  filter: blur(30px)

.music-info-text
  position: relative
  padding: 12px 12px 20px
  background-color: rgba(0, 0, 0, 0.4)

.music-title
  font-size: 22px
  margin-bottom: 6px

.music-author
  font-size: 14px
  opacity: 0.8

.ri-heart
  position: absolute
  right: 20px
  top: 12px
  font-size: 32px

.control-other
  display: flex
  justify-content: space-between
  padding: 0 6px
  margin-top: 24px
  font-size: 18px

.control-main
  display: flex
  align-items: center
  justify-content: center
  gap: 20px

  .bt-play
    font-size: 52px

  .bt-prev, .bt-next
    font-size: 26px

.progress-bar
  margin: 30px 0 6px
  padding: 0 6px

.bar
  position: relative
  width: 100%
  height: 2px
  background-color: rgba(25, 25, 25, 0.2)

.doing
  position: absolute
  top: 0
  left: 0
  width: 30%
  height: 2px
  background-color: #000

  &:after
    content: ''
    position: absolute
    right: 0
    top: -5px
    width: 2px
    height: 12px
    background-color: inherit

.time
  display: flex
  justify-content: space-between
  margin-top: 8px
  font-size: 12px
</style>