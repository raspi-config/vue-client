import { http } from '@/plugins/http/http'

const loader = document.getElementById('loader')

export const methods = {
  getData: function () {
    loader.classList.remove('loader-hidden')
    http.get('/pages/modules')
      .then((response) => response.data)
      .then((data) => {
        this.modules = data
        loader.classList.add('loader-hidden')
      })
      .catch((err) => {
        console.log(err)
        loader.classList.add('loader-hidden')
      })
  },
  remove: function (id) {
    console.log(id)
  },
  reload: function () {
    this.modules = {}
    this.getData()
  }
}
