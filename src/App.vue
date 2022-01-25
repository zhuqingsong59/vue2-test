<template>
  <div id="app">
    <render-component>
    </render-component>
  </div>
</template>

<script>
import renderComponent from './components/renderComponent.vue'

export default {
  name: 'App',
  components: {
    renderComponent
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
