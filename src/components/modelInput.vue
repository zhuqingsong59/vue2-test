<template lang="html">
  <button type="button" name="button" @click="set">emit一个input事件</button>
</template>

<script>
export default {
  name: 'model-input',
  props: ['value'],
  data () {
    return {
      number: 0
    }
  },
  created () {
    console.log(this.value)
  },
  methods: {
    set () {
      this.number = this.number + 1
      this.$emit('input', String(this.number))
    }
  }
}
</script>

<style lang="less">
</style>
