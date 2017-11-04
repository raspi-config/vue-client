import axios from 'axios'
import { getInfo, getList, save as wifiSave, apply as wifiApply } from '../services/index'

export const methods = {
  getData: function () {
    axios.all([getList(), getInfo()])
      .then(axios.spread((list, info) => {
        return {list, info}
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
    wifiSave(payload)
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
    wifiApply()
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
  reload: function () {
    this.wireless = {}
    this.info = {}
    this.error.status = false
    this.error.message = null
    this.getData()
  }
}
