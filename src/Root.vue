<template>
  <div id="app">
    <app-loader></app-loader>
    <app-header></app-header>
    <div class="container-fluid">
      <div class="row">
        <app-nav></app-nav>
        <main role="main" class="col-sm-12 ml-sm-auto col-md-10 pt-3">
          <div class="row">
            <div class="col-12">
              <router-view></router-view>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/root/header'
  import Nav from '@/components/root/nav'
  import Loader from '@/components/general/loader'

  export default {
    name: 'app',
    components: {
      'app-loader': Loader,
      'app-header': Header,
      'app-nav': Nav
    }
  }
</script>

<style>
  .text-color {
    color: #D8224C
  }

  .color {
    background-color: #D8224C
  }

  /* Move down content because we have a fixed navbar that is 3.5rem tall */
  body {
    padding-top: 3.5rem
  }
</style>
