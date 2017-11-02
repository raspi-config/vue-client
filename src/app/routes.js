import { routes as Dashboard } from './dashboard/'
import { routes as Modules } from './modules/'
import { routes as System } from './system/'
import { routes as Wireless } from './wireless/'

export default [
  ...Dashboard,
  ...Modules,
  ...System,
  ...Wireless
]
