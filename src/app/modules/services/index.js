import { http } from '@/plugins/http/http'

export const getModules = () => {
  return http.get('/pages/modules')
    .then((response) => response.data)
}
