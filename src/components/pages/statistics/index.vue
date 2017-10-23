<template>
  <div class="card">
    <div class="card-header card-color color text-white">
      <i class="fa fa-dashboard fa-fw"></i>
      STATISTICS

      <a href="#" v-on:click="reload()" class="float-right text-white">
        <i class="fa fa-refresh"></i>
      </a>
    </div>
    <div class="card-body">

      <div class="row">
        <div class="col-sm-2">
          <div class="card">
            <div class="card-header text-white bg-secondary">
              Temperatura
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-sm-4">
                  <i class="fa fa-thermometer-empty fa-3x"></i>
                </div>
                <div class="col-sm-8">
                  <h4 class="card-text">{{temperature}}º</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-2">
          <div class="card">
            <div class="card-header text-white bg-secondary">
              Memória
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-sm-4">
                  <i class="fa fa-microchip fa-3x"></i>
                </div>
                <div class="col-sm-8">
                  <h4 class="card-text">{{memory}}mb</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-2">
          <div class="card">
            <div class="card-header text-white bg-secondary">
              CPU
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-sm-4">
                  <i class="fa fa-server fa-3x"></i>
                </div>
                <div class="col-sm-8">
                  <h4 class="card-text">{{cpu}}%</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-2">
          <div class="card">
            <div class="card-header text-white bg-secondary">

            </div>
            <div class="card-body">

            </div>
          </div>
        </div>
        <div class="col-sm-2">
          <div class="card">
            <div class="card-header text-white bg-secondary">

            </div>
            <div class="card-body">

            </div>
          </div>
        </div>
        <div class="col-sm-2">
          <div class="card">
            <div class="card-header text-white bg-secondary">

            </div>
            <div class="card-body">

            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import { http } from '../../../http'

  export default {
    name: 'Dashboard',
    data () {
      return {
        temperature: 0,
        memory: 0,
        cpu: 0
      }
    },
    mounted: function () {
      this.getData()
    },
    methods: {
      getData: function () {
        const self = this
        const element = document.getElementById('loader')
        element.classList.remove('loader-hidden')
        setTimeout(() => {
          http.get('/pages/dashboard')
            .then((response) => response.data)
            .then((data) => {
              self.temperature = data.temperature
              self.memory = data.memory.usage
              self.cpu = data.cpu.usage
              element.classList.add('loader-hidden')
            })
        }, 1500)
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
