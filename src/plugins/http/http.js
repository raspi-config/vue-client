import axios from 'axios'

export const http = axios.create({
  baseURL: 'http://192.168.15.10:3000/api/v1/'
})

const loader = document.getElementById('loader')

http.interceptors.request.use((config) => {
  loader.classList.remove('loader-hidden')
  return config
}, (error) => {
  loader.classList.add('loader-hidden')
  return Promise.reject(error)
})

// Add a response interceptor
http.interceptors.response.use((response) => {
  loader.classList.add('loader-hidden')
  console.log(response)
  return response
}, (error) => {
  loader.classList.add('loader-hidden')
  return Promise.reject(error)
})
