export interface reqOptions {
  method: string
  headers?: headers
  data?: string
}

export interface headers {
  Accept: string
  Connection: string
  Referer?: string
  Host?: string
}
