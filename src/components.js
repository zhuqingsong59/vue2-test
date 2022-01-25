import Vue from 'vue'
const globalComponents = require.context('./components', false, /([A-Z]|\w+)\.(vue)$/)
globalComponents.keys().forEach((item) => {
  const componentItem = globalComponents(item).default
  Vue.component(componentItem.name, componentItem)
})
