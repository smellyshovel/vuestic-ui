<template>
  <docs-content :config="configComputed" />
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import DocsContent from '../../components/DocsContent.vue'
import configurationGuideConfig from '../../page-configs/getting-started/configuration-guide/page-config'

@Options({
  name: 'DocsConfigurationGuide',
  components: {
    DocsContent,
  },
})
export default class ConfigurationGuide extends Vue {
  get configComputed () {
    return configurationGuideConfig
  }
}
</script>
