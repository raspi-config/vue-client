export const methods = {
  getData: function () {
    this.http.get('/pages/modules')
      .then((response) => response.data)
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
