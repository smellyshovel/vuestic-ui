<template>
  <docs-content :config="configComputed" />
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import DocsContent from '../../components/DocsContent.vue'
import dataTableConfig from '../../page-configs/ui-elements/data-table/page-config'

@Options({
  name: 'DocsDataTable',
  components: {
    DocsContent,
  },
})
export default class DataTable extends Vue {
  get configComputed () {
    return dataTableConfig
  }
}
</script>
