import { getModules } from '../services/index'

export const methods = {
  getData: function () {
    getModules()
      .then((data) => {
        this.modules = data
      })
      .catch((err) => {
        console.log(err)
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
