import { request } from '@renderer/utils/request'
import { weapi, eapi } from '@renderer/utils/crypto'
import type { TrackId } from '@renderer/models/netease/playlist'
const url = require('url')

/**
 * 热门歌单
 */
export const getHotSongList = async () => {
  const data = {
    limit: 8,
    offset: 0,
    total: true,
    n: 1000,
    csrf_token: ''
  }
  const { result } = await request({
    url: 'https://music.163.com/weapi/personalized/playlist',
    method: 'post',
    headers,
    data: builderData(data, 'weapi')
  })
  return result
}

/**
 * 推荐艺人
 */
export const getSingers = async () => {
  const data = {
    limit: 8,
    offset: 0,
    total: true
  }
  const { artists: result } = await request({
    url: 'https://music.163.com/weapi/artist/top',
    method: 'POST',
    headers,
    data: builderData(data, 'weapi')
  })
  return result
}

/**
 * 歌单详情
 * @param {*} id 歌单 ID
 */
export const getListDetail = async (id: number) => {
  const playlistParams = {
    id: id,
    n: 100000,
    s: 8
  }

  const { playlist } = await request({
    url: 'https://music.163.com/api/v6/playlist/detail',
    method: 'POST',
    headers,
    data: builderData(playlistParams, 'api')
  })

  const songIds = playlist.trackIds.map((e: TrackId) => e.id)
  const params = '[' + songIds.map((id: number) => '{"id":' + id + '}').join(',') + ']'
  const songDetailParams = {
    c: params
  }
  const songsDetail = await request({
    url: 'https://music.163.com/weapi/v3/song/detail',
    method: 'POST',
    headers,
    data: builderData(songDetailParams, 'weapi')
  })

  const result = {
    name: playlist.name,
    picUrl: playlist.coverImgUrl,
    createTime: playlist.createTime,
    updateTime: playlist.updateTime,
    desc: playlist.description,
    tags: playlist.tags,
    songCount: playlist.trackCount,
    authorId: playlist.creator.userId,
    authorName: playlist.creator.nickname,
    songsDetail: songsDetail.songs,
    privileges: songsDetail.privileges
  }
  console.log(result)

  return result
}

/**
 * 获取音乐
 * @param {*} id 歌曲 ID
 */
export const getSong = async (id: number) => {
  const data = {
    ids: '[' + id + ']',
    br: 999000
  }
  const { data: result } = await request({
    url: 'https://interface3.music.163.com/eapi/song/enhance/player/url',
    method: 'POST',
    headers,
    data: builderData(data, 'eapi')
  })
  return result[0]
}

/**
 * 构建参数
 */
const builderData = (data: any, type: string) => {
  let params = {}
  if (type === 'weapi') {
    params = new url.URLSearchParams(weapi(data))
  } else if (type === 'eapi') {
    params = new url.URLSearchParams(eapi('/api/song/enhance/player/url', data))
  } else {
    params = new url.URLSearchParams(data)
  }
  return params.toString()
}

/**
 * 构建 headers
 */
const headers = {
  Accept: '*/*',
  'Accept-Language': 'zh-CN,zh;q=0.8,gl;q=0.6,zh-TW;q=0.4',
  Connection: 'keep-alive',
  'Content-Type': 'application/x-www-form-urlencoded',
  Referer: 'http://music.163.com',
  Host: 'music.163.com'
}
