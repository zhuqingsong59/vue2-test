<script>
export default {
  name: 'renderComponent',
  props: {
    msg: String
  },
  render (h) {
    return h(
      'Button',
      {
        class: 'test',
        on: {
          click: () => {
            alert('哈哈')
          }
        }
      },
      '我是render函数组件'
    )
  }
}
</script>
