<template>
  <docs-content :config="configComputed" />
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import DocsContent from '../../components/DocsContent.vue'
import selectConfig from '../../page-configs/ui-elements/select/page-config'

@Options({
  name: 'DocsSelect',
  components: {
    DocsContent,
  },
})
export default class Select extends Vue {
  get configComputed () {
    return selectConfig
  }
}
</script>
