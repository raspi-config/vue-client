import state from './state'

export default {
  isSuccessAlert: () => {
    return state.alert.success.status
  },
  successMessage: () => {
    return state.alert.success.message
  },
  isWarningAlert: () => {
    return state.alert.warning.status
  },
  warningMessage: () => {
    return state.alert.warning.message
  },
  isDangerAlert: () => {
    return state.alert.danger.status
  },
  dangerMessage: () => {
    return state.alert.danger.message
  }
}
