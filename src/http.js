import axios from 'axios'

export const http = axios.create({
  baseURL: 'http://192.168.15.4:3000/api/'
})
