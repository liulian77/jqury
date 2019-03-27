import axios from 'axios'
import { Indicator } from 'mint-ui'
const ajax = axios.create({})

ajax.interceptors.request.use((config) => {
  Indicator.open('Loading...')
  return config
})

ajax.interceptors.response.use((resp) => {
  Indicator.close()
  return resp
})

// 首页的数据
export const bxbanner = () => {
  return ajax.get('/api/tab/1?start=0')
}
export const bxchange = () => {
  return ajax.get('/api/tab/3?start=0')
}
