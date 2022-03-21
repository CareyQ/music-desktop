/**
 * 封装为通用歌曲实体
 */
export const numberFormat = (val: number) => {
  let res
  const factor = 10000,
    sizes = ['', '万', '亿']
  let i
  if (val < factor) {
    return val
  }
  i = Math.floor(Math.log(val) / Math.log(factor))
  return (val / Math.pow(factor, i)).toFixed(2) + sizes[i]
}

/**
 * 从 array 中随机取出 conut 个元素
 */
export const randomArray = (array: object[], count: number) => {
  const shuffled = array.slice(0)
  let len = array.length
  const min = len - count
  let temp, index
  while (len-- > min) {
    index = Math.floor((len + 1) * Math.random())
    temp = shuffled[index]
    shuffled[index] = shuffled[len]
    shuffled[len] = temp
  }
  return shuffled.slice(min)
}

/**
 * 时间戳转分秒
 */
export const formatTime = (during: number) => {
  const s = Math.floor(during) % 60
  during = Math.floor(during / 60)
  const i = during % 60

  const ii = i < 10 ? `0${i}` : i
  const ss = s < 10 ? `0${s}` : s

  return ii + ':' + ss
}
