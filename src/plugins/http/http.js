import axios from 'axios'

export const http = axios.create({
  baseURL: 'http://192.168.15.10:3000/api/v1/'
})
