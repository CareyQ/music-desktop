<template>
  <header class="header">
    <div class="control">
      <i class="ri-close"></i>
      <i class="ri-down"></i>
    </div>
    <!-- <div class="title">Pure Music</div> -->
  </header>
</template>

<style lang="stylus" scoped>
.header
  display: flex
  justify-content: center
  align-items: center
  padding: 0 12px
  -webkit-app-region: drag
  height: 30px

  i
    cursor: pointer
    -webkit-app-region: no-drag

.control
  position: absolute
  left: 12px
  top: 0
  height: 100%
  display: flex
  align-items: center
  gap: 6px

.title
  text-align: center
</style>