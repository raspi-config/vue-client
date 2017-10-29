<template>
  <div class="card">
    <div class="card-header card-color color text-white">
      <i class="fa fa-cube fa-fw"></i>
      SYSTEM

      <a href="#" v-on:click="reload()" class="float-right text-white">
        <i class="fa fa-refresh"></i>
      </a>
    </div>
    <div class="card-body">
      <div class="panel panel-default">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home"
               aria-selected="true">
              System
            </a>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <div class="row">
              <div class="col-lg-4">
                <table class="table">
                  <tbody>
                  <tr>
                    <th scope="row">Hostname</th>
                    <td>{{info.hostname}}</td>
                  </tr>
                  <tr>
                    <th scope="row">Version</th>
                    <td>{{info.version}}</td>
                  </tr>
                  <tr>
                    <th scope="row">Kernel</th>
                    <td>{{info.kernel}}</td>
                  </tr>
                  <tr>
                    <th scope="row">Uptime</th>
                    <td>{{info.uptime}}</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { http } from '../../../http'

  const loader = document.getElementById('loader')

  export default {
    name: 'System',
    data () {
      return {
        info: {}
      }
    },
    mounted: function () {
      this.getData()
    },
    methods: {
      getData: function () {
        const vm = this
        loader.classList.remove('loader-hidden')
        http.get('/pages/dashboard')
          .then((response) => response.data)
          .then((response) => {
            vm.info = response
            loader.classList.add('loader-hidden')
          })
          .catch((err) => {
            console.log(err)
            loader.classList.add('loader-hidden')
          })
      },
      reload: function () {
        this.getData()
      }
    }
  }
</script>

<style>
  .card-color {
    border: 1px solid #d8224c;
  }
</style>
