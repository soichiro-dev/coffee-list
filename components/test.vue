<script lang="tsx">
import { defineComponent, PropType } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    pageTitle: {
      type: String as PropType<string>,
      required: true,
    },
  },

  setup(props: { readonly pageTitle: string }) {
    return () => (
      <div>
        <div class="title">{props.pageTitle}</div>
      </div>
    )
  },
})
</script>

<style scoped>
.title {
  height: 80px;
  width: 80px;
}
</style>
