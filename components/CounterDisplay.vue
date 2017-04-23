<template lang="html">
  <div class="">
    <h1>{{ counter }}</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters([
      'counter'
    ])
  }
}
</script>

<style lang="css">
</style>
