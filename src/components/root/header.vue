<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top color">
      <router-link to="/" class="navbar-brand">RaspiConfig</router-link>
      <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#toogleNavbar"
              aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="toogleNavbar">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0 d-sm-none" id="side-menu">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">
              <i class="fa fa-dashboard fa-fw"></i>
              Dashboard
            </router-link>
          </li>
          <li>

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
          <a href="https://github.com/raspi-config/raspi-config" target="_blank" class="nav-link p-2 text-white">
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
            <app-shutdown class="dropdown-item"></app-shutdown>
            <app-reboot class="dropdown-item"></app-reboot>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" @click="refresh">
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
  import Reboot from '../general/reboot'
  import Shutdown from '../general/shutdown'

  export default {
    name: 'Header',
    components: {
      'app-reboot': Reboot,
      'app-shutdown': Shutdown
    },
    methods: {
      refresh: () => {
        location.reload()
      }
    }
  }
</script>
