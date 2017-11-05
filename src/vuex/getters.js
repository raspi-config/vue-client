import state from './state'

export const isSuccessAlert = () => state.alert.success.status
export const successMessage = () => state.alert.success.message

export const isWarningAlert = () => state.alert.warning.status
export const warningMessage = () => state.alert.warning.message

export const isDangerAlert = () => state.alert.danger.status
export const dangerMessage = () => state.alert.danger.message
