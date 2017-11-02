import { http } from '@/plugins/http/http'
import axios from 'axios'

const loader = document.getElementById('loader')

export const methods = {
  getListWifi: function () {
    return http.get('wifi/scan')
  },
  getInfo: function () {
    return http.get('wifi/info')
  },
  getData: function () {
    loader.classList.remove('loader-hidden')
    axios.all([this.getListWifi(), this.getInfo()])
      .then(axios.spread((list, info) => {
        return {
          'list': list.data,
          'info': info.data
        }
      }))
      .then((response) => {
        loader.classList.add('loader-hidden')

        if (response.list.error) {
          throw new Error(response.list.error_message)
        }
        this.wireless = response.list.data
        this.info = response.info
      })
      .catch((err) => {
        loader.classList.add('loader-hidden')
        this.error.status = true
        this.error.message = err.message
      })
  },
  save: function () {
    loader.classList.remove('loader-hidden')
    const payload = {
      ssid: this.wifi.ssid,
      password: this.wifi.password
    }
    http.post('/wifi/save', payload)
      .then((response) => response.data)
      .then((data) => {
        loader.classList.add('loader-hidden')
        if (data.error) {
          throw new Error(data.error_message)
        }
      })
      .catch((err) => {
        loader.classList.add('loader-hidden')
        this.error.status = true
        this.error.message = err.message
      })
  },
  apply: function () {
    loader.classList.remove('loader-hidden')
    http.get('/wifi/apply')
      .then((response) => response.data)
      .then((data) => {
        loader.classList.add('loader-hidden')
        if (data.error) {
          throw new Error(data.error_message)
        }
      })
      .catch((err) => {
        loader.classList.add('loader-hidden')
        this.error.status = true
        this.error.message = err.message
      })
  },
  remove: function (id) {
    console.log(id)
  },
  reload: function () {
    this.wireless = {}
    this.info = {}
    this.error.status = false
    this.error.message = null
    this.getData()
  }
}
