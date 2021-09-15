// eslint-disable-next-line import/named
import { VNode } from 'vue'
import { ComponentRenderProxy } from '@nuxtjs/composition-api'

declare global {
  namespace JSX {
    interface Element extends VNode {}

    interface ElementClass extends ComponentRenderProxy {}

    interface ElementAttributesProperty {
      $props: any // specify the property name to use
    }

    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}
