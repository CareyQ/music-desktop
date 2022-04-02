import type { Song } from '@renderer/models/netease/song'

export interface PlayListDetail {
  id: number
  name: string
  createTime: number
  updateTime: number
  coverImgUrl: string
  description: string
  tags: string[]
  trackIds: TrackId[]
}

export interface Creator {
  avatarUrl: string
  nickname: string
  userId: number
}

export interface TrackId {
  id: 1805395376
}

export interface PlayListModel {
  name: string
  picUrl: string
  createTime: number
  updateTime: number
  desc: string
  tags: string[]
  songCount: number
  authorId: number
  authorName: string
  songsDetail: Song[]
  privileges: any[]
}
