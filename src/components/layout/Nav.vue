<template>

  <nav class="col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar">
    <ul class="nav in" id="side-menu">
      <li>
        <router-link to="/">
          <i class="fa fa-dashboard fa-fw"></i>
          Dashboard
        </router-link>
      </li>
      <li>
        <router-link to="/statistics">
          <i class="fa fa-bar-chart fa-fw"></i>
          Statistics
        </router-link>
      </li>
      <li>
        <router-link to="/wireless">
          <i class="fa fa-wifi fa-fw"></i>
          WiFi
        </router-link>
      </li>
      <li>
        <a href="">
          <i class="fa fa-dot-circle-o fa-fw"></i>
          Hotspot
        </a>
      </li>
      <li>
        <a href="">
          <i class="fa fa-user fa-fw"></i>
          Users
        </a>
      </li>
      <li>
        <router-link to="/modules">
          <i class="fa fa-th fa-fw"></i>
          Modules
        </router-link>
      </li>
      <li>
        <router-link to="/system">
          <i class="fa fa-cube fa-fw"></i>
          System
        </router-link>
      </li>
    </ul>

  </nav>
</template>

<script>
  export default {
    name: 'Nav'
  }
</script>

<style scoped>
  .sidebar {
    position: fixed;
    top: 40px;
    bottom: 0;
    left: 0;
    z-index: 1000;
    padding: 20px 0;
    overflow-x: hidden;
    overflow-y: auto;
    border-right: 1px solid #eee;
  }

  .nav > li > a {
    position: relative;
    display: block;
    padding: 10px 15px;
  }

  a {
    color: #337ab7;
    text-decoration: none;
  }

  nav > ul > li {
    width: 100%;
    border-bottom: 1px solid #e7e7e7;
  }
</style>
