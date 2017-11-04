import { http } from '@/plugins/http/http'
import swal from 'sweetalert'

export const get = (uri) => {
  return http.get(uri)
    .then((response) => response.data)
}

export const execute = (message, uri) => {
  swal({
    title: message,
    icon: 'warning',
    buttons: true,
    dangerMode: true
  })
    .then((willDelete) => {
      if (!willDelete) {
        return
      }
      return get(uri)
        .then((data) => {
          if (data.error) {
            return swal({
              icon: 'warning',
              title: data.error_message
            })
          }
          return swal({
            icon: 'success',
            title: 'Sucesso!'
          })
        })
        .catch((err) => {
          console.log(err)
        })
    })
}
