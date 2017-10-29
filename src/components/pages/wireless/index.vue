<template>
  <div class="card">
    <div class="card-header card-color color text-white">
      <i class="fa fa-dashboard fa-wifi"></i>
      WIRELESS

      <a id="reload" v-on:click="reload()" class="float-right text-white">
        <i class="fa fa-refresh"></i>
      </a>
    </div>
    <div class="card-body">
      <div class="alert alert-danger alert-dismissible fade show" role="alert" v-if="error.status">
        <strong>Atenção!</strong> {{error.message}}
      </div>
      <table class="table table-bordered">
        <thead>
        <tr>
          <th width="5%" scope="col">#</th>
          <th scope="col">SSID</th>
        </tr>
        </thead>
        <tbody v-for="wifi in wireless">
        <tr>
          <td>#</td>
          <td>{{wifi.ssid}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import { methods } from './methods'
  import { data } from './data'

  export default {
    name: 'Wireless',
    data,
    methods,
    mounted: function () {
      this.getData()
    }
  }
</script>
