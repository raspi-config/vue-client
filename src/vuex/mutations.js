export default {
  showAlert (state, obj) {
    state.alert[obj.type].status = true
    state.alert[obj.type].message = obj.message
  },
  hideAlert (state, obj) {
    state.alert[obj.type].status = false
  }
}
