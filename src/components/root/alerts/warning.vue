<template>
  <div class="alert alert-warning alert-dismissible fade show" role="alert" v-if="isWarningAlert">
    <strong>Atenção!</strong> {{warningMessage}}
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters(['isWarningAlert', 'warningMessage'])
    }
  }
</script>
