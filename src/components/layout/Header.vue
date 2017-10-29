<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top color">
      <a class="navbar-brand" href="#">RaspConfig v1.0.0</a>
      <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
              aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0" id="side-menu">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">
              <i class="fa fa-dashboard fa-fw"></i>
              Dashboard
            </router-link>
          </li>
          <li>

          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/statistics">
              <i class="fa fa-bar-chart fa-fw"></i>
              Statistics
            </router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/wireless">
              <i class="fa fa-wifi fa-fw"></i>
              WiFi
            </router-link>
          </li>
          <li class="nav-item active">
            <a href="" class="nav-link">
              <i class="fa fa-dot-circle-o fa-fw"></i>
              Hotspot
            </a>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/modules">
              <i class="fa fa-th fa-fw"></i>
              Modules
            </router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/system">
              <i class="fa fa-cube fa-fw"></i>
              System
            </router-link>
          </li>
        </ul>
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

  const execute = (message, uri) => {
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
        return http.get(uri)
          .then((response) => response.data)
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

  export default {
    name: 'Header',
    methods: {
      shutdown: () => {
        execute('Deseja desligar a Raspberry?', 'rasp/shutdown')
      },
      reboot: () => {
        execute('Deseja reiniciar a Raspberry?', 'rasp/reboot')
      },
      refresh: () => {
        location.reload()
      }
    }
  }
</script>
