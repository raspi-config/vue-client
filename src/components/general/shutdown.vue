<template>
  <div>
    <a @click="shutdown">
      <i class="fa fa-power-off"></i>
      Shutdown
    </a>
  </div>
</template>

<script>
  import { execute } from './../../services'

  export default {
    name: 'Reboot',
    methods: {
      shutdown: () => {
        execute('Deseja desligar a Raspberry?', 'rasp/shutdown')
      }
    }
  }
</script>
