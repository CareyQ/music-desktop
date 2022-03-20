import { sampleSize } from 'lodash'

declare global {
  interface Array<T> {
    /**
     * 获得 n 个随机元素
     * @param size
     */
    sampleSize<T>(this: T[], size: number): T[]
  }
}

Array.prototype.sampleSize = function <T>(this: T[], size: number): T[] {
  return sampleSize<T>(this, size) as T[]
}
