<script lang="tsx">
import {defineComponent} from '@nuxtjs/composition-api'
import Header from '~/components/Header.vue'

export default defineComponent({
  setup() {
    // npm run dev でTS2304: Cannot find name 'Nuxt'. が発生
    // 実行結果は問題ないが要調査
    return () => (
      <div>
        <Header/>
        <Nuxt/>
      </div>
    )
  },
})
</script>
