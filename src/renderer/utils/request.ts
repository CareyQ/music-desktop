import fetch from 'node-fetch'
import axios, { type AxiosRequestConfig } from 'axios'

axios.defaults.adapter = require('axios/lib/adapters/http')

export const request = async (options: AxiosRequestConfig) => {
  const { data } = await axios.request(options)
  return data
}
