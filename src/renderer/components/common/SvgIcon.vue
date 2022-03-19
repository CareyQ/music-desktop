<script setup lang="ts">
import { computed } from 'vue'
import { style } from '@renderer/models/style'

const props = defineProps<{
  name: string
  size?: string
  color?: string
  hasBg?: false
  noPointer?: boolean
}>()

const iconName = computed(() => `#icon-${props.name}`)

const svgClass = computed(() => {
  if (props.name) {
    return `svg-icon icon-${props.name}`
  }
  return 'svg-icon'
})

const iconStyle = () => {
  let el = {} as style
  if (props.color) {
    el.color = props.color + ''
  }

  let size = props.size ? props.size : 16
  el.width = size + 'px'
  el.height = size + 'px'
  el.cursor = !props.noPointer ? 'pointer' : ''
  return el
}
</script>

<template>
  <div class="top-bg" v-if="hasBg">
    <svg :class="svgClass" :style="iconStyle()" v-bind="$attrs">
      <use :xlink:href="iconName" />
    </svg>
  </div>
  <svg :class="svgClass" :style="iconStyle()" v-else v-bind="$attrs">
    <use :xlink:href="iconName" />
  </svg>
</template>

<style lang="stylus" scoped>
.svg-icon
  fill: currentColor
  -webkit-app-region: no-drag
</style>