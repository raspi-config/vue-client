import { http } from '../../../http'

export const methods = {
  getData: function () {
    const element = document.getElementById('loader')
    element.classList.remove('loader-hidden')
    http.get('/pages/modules')
      .then((response) => response.data)
      .then((data) => {
        this.modules = data
        element.classList.add('loader-hidden')
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
