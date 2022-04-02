import { defineStore, storeToRefs } from 'pinia'
import { onMounted, onUnmounted } from 'vue'
import type { Song } from '@renderer/models/netease/song'
import { getSong } from '@renderer/api/netease'

export const usePlayerStore = defineStore({
  id: 'player',
  state: () => ({
    audio: new Audio(),
    playList: [] as Song[],
    currentSong: {}, // 当前歌曲
    isPlaying: false, // 是否播放中
    isPause: false, // 是否暂停
    currentTime: 0, // 当前播放时间
    duration: 0 // 总播放时长
  }),
  actions: {
    pushPlayList(replace: boolean, list: Song[]) {
      if (replace) {
        this.playList = list
        return
      }
    },
    async play(id: number) {
      this.isPlaying = false
      const song = await getSong(id)
      this.audio.src = song.url
      this.audio
        .play()
        .then((res) => {
          this.isPlaying = true
        })
        .catch((res) => {
          console.log(res)
        })
    },
    //定时器
    interval() {
      if (this.isPlaying) {
        this.currentTime = parseInt(this.audio.currentTime.toString())
        this.duration = parseInt(this.audio.duration.toString())
      }
    }
  }
})

export const userPlayerInit = () => {
  let timer: NodeJS.Timer
  const { interval } = usePlayerStore()

  //启动定时器
  onMounted(() => {
    console.log('启动定时器')
    timer = setInterval(interval, 1000)
  })
  //清除定时器
  onUnmounted(() => {
    console.log('清除定时器')
    clearInterval(timer)
  })
}
