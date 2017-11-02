import axios from 'axios'

export const methods = {
  getListWifi: function (http) {
    return http.get('wifi/scan')
  },
  getInfo: function (http) {
    return http.get('wifi/info')
  },
  getData: function () {
    axios.all([this.getListWifi(this.http), this.getInfo(this.http)])
      .then(axios.spread((list, info) => {
        return {
          'list': list.data,
          'info': info.data
        }
      }))
      .then((response) => {
        if (response.list.error) {
          throw new Error(response.list.error_message)
        }
        this.wireless = response.list.data
        this.info = response.info
      })
      .catch((err) => {
        this.error.status = true
        this.error.message = err.message
      })
  },
  save: function () {
    const payload = {
      ssid: this.wifi.ssid,
      password: this.wifi.password
    }
    this.http.post('/wifi/save', payload)
      .then((response) => response.data)
      .then((data) => {
        if (data.error) {
          throw new Error(data.error_message)
        }
      })
      .catch((err) => {
        this.error.status = true
        this.error.message = err.message
      })
  },
  apply: function () {
    this.http.get('/wifi/apply')
      .then((response) => response.data)
      .then((data) => {
        if (data.error) {
          throw new Error(data.error_message)
        }
      })
      .catch((err) => {
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
