import { http } from '@/http'

const loader = document.getElementById('loader')

export const methods = {
  getData: function () {
    loader.classList.remove('loader-hidden')
    http.get('pages/wireless')
      .then((response) => response.data)
      .then((data) => {
        loader.classList.add('loader-hidden')
        if (data.error) {
          throw new Error(data.error_message)
        }
        this.wireless = data.data
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
    this.error.status = false
    this.error.message = null
    this.getData()
  }
}
