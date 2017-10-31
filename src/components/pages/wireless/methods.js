import { http } from '@/http'

const loader = document.getElementById('loader')

export const methods = {
  getData: function () {
    loader.classList.remove('loader-hidden')
    http.get('wifi/scan')
      .then((response) => response.data)
      .then((data) => {
        loader.classList.add('loader-hidden')
        if (data.error) {
          throw new Error(data.error_message)
        }
        this.wireless = data.data
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
    this.error.status = false
    this.error.message = null
    this.getData()
  }
}
