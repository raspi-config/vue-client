<template>
  <div class="alert alert-success alert-dismissible fade show" role="alert" v-if="isSuccessAlert">
    <strong>Atenção!</strong> {{successMessage}}
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters(['isSuccessAlert', 'successMessage'])
    }
  }
</script>
