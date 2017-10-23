<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top color">
      <a class="navbar-brand" href="#">RaspConfig v1.0.0</a>
      <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
              aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
      </div>

      <ul class="navbar-nav flex-row ml-md-auto d-none d-md-flex">
        <li class="nav-item">
          <a href="https://github.com/dougalszuqueto/raspconfig" target="_blank" class="nav-link p-2 text-white">
            <i class="fa fa-github"></i>
          </a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-item nav-link dropdown-toggle mr-md-2 text-white" href="#" id="bd-versions"
             data-toggle="dropdown"
             aria-haspopup="true" aria-expanded="false">
            Douglas Zuqueto
          </a>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="bd-versions">
            <a class="dropdown-item" v-on:click="shutdown">
              <i class="fa fa-power-off"></i>
              Shutdown
            </a>
            <a class="dropdown-item" v-on:click="reboot">
              <i class="fa fa-undo"></i>
              Reboot
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" v-on:click="refresh">
              <i class="fa fa-refresh"></i>
              Refresh
            </a>
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
  import { http } from '@/http'
  import swal from 'sweetalert'

  export default {
    name: 'Header',
    methods: {
      shutdown: () => {
        swal({
          title: 'Shutdown the raspberry?',
          icon: 'warning',
          buttons: true,
          dangerMode: true
        })
          .then((willDelete) => {
            if (!willDelete) {
              return swal.close()
            }
            return http.get('/rasp/shutdown')
          })
          .then((response) => response.data)
          .then((data) => {
            return swal(data.message, {
              icon: 'success'
            })
          })
          .catch(err => {
            console.log(err)
            swal.close()
            swal.stopLoading()
          })
      },
      reboot: () => {
        swal({
          title: 'Reboot the raspberry?',
          icon: 'warning',
          buttons: true,
          dangerMode: true
        })
          .then((willDelete) => {
            if (!willDelete) {
              return swal.close()
            }
            return http.get('/rasp/reboot')
          })
          .then((response) => response.data)
          .then((data) => {
            return swal(data.message, {
              icon: 'success'
            })
          })
          .catch(err => {
            console.log(err)
            swal.close()
            swal.stopLoading()
          })
      },
      refresh: () => {
        location.reload()
      }
    }
  }
</script>
