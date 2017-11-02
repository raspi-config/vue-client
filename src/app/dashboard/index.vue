<template>
  <div class="card">
    <div class="card-header card-color color text-white">
      <i class="fa fa-dashboard fa-fw"></i>
      DASHBOARD

      <a id="reload" @click="reload()" class="float-right text-white">
        <i class="fa fa-refresh"></i>
      </a>
    </div>
    <div class="card-body">

      <div class="row">
        <div class="col-12 col-sm-6 col-lg-4 col-xl-2">
          <div class="card">
            <div class="card-header text-white bg-secondary text-center">Temperatura</div>
            <div class="card-body">
              <div class="row">
                <div class="col-4 text-center">
                  <i class="fa fa-thermometer-empty fa-3x"></i>
                </div>
                <div class="col-8 card-top">
                  <h4 class="card-text">{{temperature}}º</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-lg-4 col-xl-2">
          <div class="card">
            <div class="card-header text-white bg-secondary text-center">Memória</div>
            <div class="card-body">
              <div class="row">
                <div class="col-4 text-center">
                  <i class="fa fa-microchip fa-3x"></i>
                </div>
                <div class="col-8 card-top">
                  <h4 class="card-text">{{memory.usage}}mb</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-lg-4 col-xl-2">
          <div class="card">
            <div class="card-header text-white bg-secondary text-center">CPU</div>
            <div class="card-body">
              <div class="row">
                <div class="col-4 text-center">
                  <i class="fa fa-server fa-3x"></i>
                </div>
                <div class="col-8 card-top">
                  <h4 class="card-text">{{cpu.usage}}%</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-lg-4 col-xl-2">
          <div class="card">
            <div class="card-header text-white bg-secondary text-center">Processos</div>
            <div class="card-body">
              <div class="row">
                <div class="col-4 text-center">
                  <i class="fa fa-tasks fa-3x"></i>
                </div>
                <div class="col-8 card-top">
                  <h4 class="card-text">{{process}}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-lg-4 col-xl-2">
          <div class="card">
            <div class="card-header text-white bg-secondary text-center">Kernel</div>
            <div class="card-body">
              <div class="row">
                <div class="col-4">
                  <i class="fa fa-tasks fa-3x"></i>
                </div>
                <div class="col-8 card-top">
                  <h4 class="card-text">{{kernel}}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { http } from '@/plugins/http/http'

  const loader = document.getElementById('loader')

  export default {
    name: 'Dashboard',
    data () {
      return {
        temperature: 0,
        memory: {},
        cpu: {},
        kernel: null,
        process: null
      }
    },
    mounted: function () {
      this.getData()
    },
    methods: {
      getData: function () {
        const self = this
        loader.classList.remove('loader-hidden')
        http.get('/pages/dashboard')
          .then((response) => response.data)
          .then((response) => {
            console.log(response)
            self.temperature = response.temperature
            self.memory = response.memory
            self.cpu = response.cpu
            self.kernel = response.kernel
            self.process = response.process
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
  .card-top {
    margin-top: 8px;
  }

  .card-color {
    border: 1px solid #d8224c;
  }
</style>
