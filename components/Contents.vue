<script lang="tsx">
import {defineComponent} from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const text = 'test'
    return () => (
      <div>
        <div>{{text}}</div>
      </div>
    )
  },
})
</script>
