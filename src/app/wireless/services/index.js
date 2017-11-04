import { http } from '@/plugins/http/http'

export const getList = () => {
  return http.get('wifi/scan')
    .then((response) => response.data)
}

export const getInfo = () => {
  return http.get('wifi/info')
    .then((response) => response.data)
}

export const save = (payload) => {
  return http.post('wifi/save', payload)
    .then((response) => response.data)
}
export const apply = () => {
  return http.get('wifi/apply')
    .then((response) => response.data)
}
