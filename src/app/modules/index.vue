<template>
  <div class="card">
    <div class="card-header card-color color text-white">
      <i class="fa fa-th fa-fw"></i>
      MODULES

      <a id="reload" @click="reload()" class="float-right text-white">
        <i class="fa fa-refresh"></i>
      </a>
    </div>
    <div class="card-body">
      <table class="table table-bordered table-responsive">
        <thead>
        <tr>
          <th width="5%" scope="col">#</th>
          <th scope="col">Module</th>
          <th width="5%" class="text-center" scope="col">Status</th>
          <th width="5%" class="text-center" scope="col">On boot?</th>
          <th width="5%" class="text-center" scope="col">#</th>
          <th width="5%" class="text-center" scope="col">#</th>
          <th width="5%" class="text-center" scope="col">#</th>
        </tr>
        </thead>
        <tbody v-for="module in modules">
        <tr>
          <th scope="row">{{module.id}}</th>
          <td>{{module.name}}</td>
          <td class="text-center">
            <i class="fa fa-check" v-bind:class="{'text-success': module.status}"></i>
          </td>
          <td class="text-center">
            <i class="fa fa-check" v-bind:class="{'text-success': module.boot}"></i>
          </td>
          <td class="text-center">
            <a onclick="">
              <i class="fa fa-save fa-fw text-success"></i>
            </a>
          </td>
          <td class="text-center">
            <a @click="remove(module.id)">
              <i class="fa fa-remove fa-fw text-danger"></i>
            </a>
          </td>
          <td class="text-center">
            <a onclick="">
              <i class="fa fa-cog fa-fw text-primary"></i>
            </a>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import { methods } from './component/methods'
  import { data } from './component/data'

  export default {
    name: 'Modules',
    data,
    methods,
    mounted: function () {
      this.getData()
    }
  }
</script>

<style>
</style>
