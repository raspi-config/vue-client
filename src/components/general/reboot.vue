<template>
  <div>
    <a @click="reboot">
      <i class="fa fa-undo"></i>
      Reboot
    </a>
  </div>
</template>

<script>
  import { execute } from './../../services'

  export default {
    name: 'Reboot',
    methods: {
      reboot: () => {
        execute('Deseja reiniciar a Raspberry?', 'rasp/reboot')
      }
    }
  }
</script>
