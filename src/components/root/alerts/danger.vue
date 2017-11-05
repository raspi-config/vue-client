<template>
  <div class="alert alert-danger alert-dismissible fade show" role="alert" v-if="isDangerAlert">
    <strong>Atenção!</strong> {{dangerMessage}}
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters(['isDangerAlert', 'dangerMessage'])
    }
  }
</script>
