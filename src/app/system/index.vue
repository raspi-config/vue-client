<template>
  <div class="card">
    <div class="card-header card-color color text-white">
      <i class="fa fa-cube fa-fw"></i>
      SYSTEM

      <a href="#" @click="reload()" class="float-right text-white">
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
            <div class="row">
              <div class="col-12 form-group">
                <app-shutdown class="btn btn-primary"></app-shutdown>
                <app-reboot class="btn btn-success"></app-reboot>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { getDashboard } from './services'
  import { reboot, shutdown } from '@/components/general'

  export default {
    name: 'System',
    components: {
      'app-reboot': reboot,
      'app-shutdown': shutdown
    },
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
        getDashboard()
          .then((response) => {
            vm.info = response
          })
          .catch((err) => {
            console.log(err)
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
