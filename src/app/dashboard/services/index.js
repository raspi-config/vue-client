import { http } from '@/plugins/http/http'

export const getDashboard = () => {
  return http.get('/pages/dashboard')
    .then((response) => response.data)
}
