<template>
  <div class="">
    <counter-display></counter-display>
    <button type="button" name="button" @click="increment">+</button>
    <button type="button" name="button" @click="decrement">-</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import CounterDisplay from '~/components/CounterDisplay'
export default {
  data () {
    return {
    }
  },
  methods: {
    ...mapActions([
      'increment',
      'decrement'
    ])
  },
  components: {
    CounterDisplay
  }
}
</script>

<style>
</style>
