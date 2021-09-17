<script>
import Button from 'ant-design-vue/lib/button'
export default {
  name: 'renderComponent',
  props: {
    msg: String
  },
  components: {
    Button
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
      '我是组件按钮'
    )
  }
}
</script>
