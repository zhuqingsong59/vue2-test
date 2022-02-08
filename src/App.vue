<template>
  <div id="app">
    <listeners aa="aa" bb="bb" :ceshi="ceshi"  @divClick="btnClick" @test="tt">
    </listeners>
    <render-component>
    </render-component>
    <model-input v-model="ceshi"></model-input>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      ceshi: 'ceshi'
    }
  },
  watch: {
    ceshi (newVal) {
      console.log(newVal)
    }
  },
  methods: {
    btnClick () {
      alert('点击')
    },
    tt () {
      console.log('tt')
    }
  }
}
</script>

<style>
html, body, #app {
  height: 100%;
  width: 100%;
}
#app {
  padding-top: 50px;
  text-align: center;
}
</style>
