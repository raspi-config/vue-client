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

      <div class="row">
        <div class="col col-5">
          <form action="">
            <div class="form-group">
              <label class="col-form-label" for="ssid">SSID</label>
              <div class="input-group">
                <div class="input-group-addon">
                  <i class="fa fa-wifi"></i>
                </div>
                <select id="ssid" class="form-control" v-model="wifi.ssid">
                  <option selected disabled>Escolha uma rede wifi</option>
                  <option v-for="w in wireless">{{w.ssid}}</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label class="col-form-label" for="password">Senha</label>
              <div class="input-group">
                <div class="input-group-addon">
                  <i class="fa fa-key"></i>
                </div>
                <input type="password" class="form-control" id="password" placeholder="Digite a senha da rede"
                       v-model="wifi.password">
              </div>
            </div>

            <button type="button" class="btn btn-primary" v-on:click="apply()">Aplicar</button>
            <button type="button" class="btn btn-success" v-on:click="save()">Salvar</button>
          </form>
        </div>
        <div class="col col-7">
          <div class="card">
            <div class="card-header text-danger">
              Informações
            </div>

            <div class="card-body">
              <table class="table">
                <tbody>
                <tr>
                  <td>Rede</td>
                  <td>{{info.ssid}}</td>
                </tr>
                <tr>
                  <td>IP</td>
                  <td>{{info.ip}}</td>
                </tr>
                <tr>
                  <td>Qualidade do sinal</td>
                  <td>{{info.link_quality}}</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
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
