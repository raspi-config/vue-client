<template>
  <div>
    <app-success></app-success>
    <app-warning></app-warning>
    <app-danger></app-danger>
  </div>
</template>

<script>
  import success from './success.vue'
  import warning from './warning.vue'
  import danger from './danger.vue'

  export default {
    name: 'Alerts',
    components: {
      'app-success': success,
      'app-warning': warning,
      'app-danger': danger
    }
  }
</script>
