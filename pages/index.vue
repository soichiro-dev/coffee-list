<script lang="tsx">
import {defineComponent} from '@nuxtjs/composition-api'
import Contents from '~/components/Contents.vue'

export default defineComponent({
  setup() {
    return () => <Contents/>
  },
})
</script>
