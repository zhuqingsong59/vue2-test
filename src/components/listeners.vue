<template>
  <div class="" @click="clickTest">
    我是一个子组件
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
      console.log(22)
      this.$emit('divClick')
    }
  }
}
</script>

<style lang="less">
</style>
