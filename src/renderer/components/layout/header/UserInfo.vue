<script setup lang="ts">
const avatar = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
</script>

<template>
  <div class="user-info">
    <img :src="avatar" class="avatar" />
    <div class="info">
      <p class="nikename">CareyQ</p>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.user-info
  display: flex
  align-items: center
  width: 260px

.avatar
  border-radius: 50%
  width: 28px
  height: 28px
  margin-right: 8px
  -webkit-app-region: no-drag

.nikename
  font-size: 18px
  font-weight: bold
  -webkit-app-region: no-drag
</style>