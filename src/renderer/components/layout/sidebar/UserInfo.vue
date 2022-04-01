<script setup lang="ts">
const avatar = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
</script>

<template>
  <div class="user-info card">
    <img :src="avatar" class="avatar" />
    <div class="info">
      <p class="nikename">CareyQ</p>
      <p class="desc">隐身守候</p>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.user-info
  display: flex
  align-items: center
  margin-bottom: 20px

.avatar
  border-radius: 50%
  width: 34px
  height: 34px
  margin-right: 16px

.nikename
  margin-bottom: 4px
  font-size: 18px
  font-weight: bold

.desc
  font-size: 14px
</style>