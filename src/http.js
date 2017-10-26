import axios from 'axios'

export const http = axios.create({
  baseURL: '192.168.15.10/api/v1/'
})
