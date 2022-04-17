<template>
  <div class="item">
    <div class="item-img flex items-center justify-center" :style="style">
      <span v-if="bgColor">{{ item.img }}</span>
    </div>
    <p :class="['title', { center: singer }]">{{ item.name }}</p>
    <p class="author" v-if="item.author">{{ item.author }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  item: {},
  singer: Boolean,
  bgColor: Boolean
})

const style = ref({
  backgroundColor: props.item.bg,
  backgroundImage: 'url(' + props.item.img + ')',
  borderRadius: props.singer ? '50%' : '16px'
})
</script>

<style lang="stylus" scoped>
.item
  width: calc(25% - 15px)
  padding: 14px
  border: var(--border)
  border-radius: 10px

.item-img
  width: 100%
  height: 112.5px
  background-color: #f3f3f3
  font-size: 38px
  color: #fff
  font-weight: bolder
  background-size: cover

.title
  font-weight: bold
  margin-top: 8px
  font-size: 14px

.title.center
  text-align: center
</style>