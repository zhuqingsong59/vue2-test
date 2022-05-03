<template>
  <div class="" @click="clickTest">
    listeners属性
  </div>
</template>

<script>
export default {
  name: 'listeners',
  //  是否内联属性
  // inheritAttrs: false,
  props: {
    ceshi: {
      type: String
    }
  },
  data () {
    return {}
  },
  created () {
    console.log(this.$attrs)
    console.log(this.$listeners)
  },
  methods: {
    clickTest () {
      this.$emit('divClick')
    }
  }
}
</script>

<style lang="less">
</style>
