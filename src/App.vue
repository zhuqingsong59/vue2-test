<template>
  <div id="app">
    <render-component>
      <template v-slot:sss>
        <div >
          测试插槽
        </div>
      </template>
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
