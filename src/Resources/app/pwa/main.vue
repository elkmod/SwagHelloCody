<template>
    <div v-if="phrase" class="hello-cody">
        <h3>{{ phrase }}</h3>
    </div>
</template>
<script>
  import axios from 'axios'

  /**
   * should be replaced within the building/dumping process (pwa side) or just inject apiClient
   * or even register apiClient as a plugin to be available under this.$apiClient in nuxt globally
   */
  const SHOPWARE_API_URL =
    'https://shopware-2.vuestorefront.io/sales-channel-api/v1'
  const PLUGIN_ENDPOINT_URL = '/random-phrase'
  const SW_ACCESS_KEY = 'SWSCMUDKAKHSRXPJEHNOSNHYAG'

  export default {
    data() {
      return {
        phraseResponse: null
      }
    },
    async mounted() {
    try {
      this.phraseResponse = await axios.get(
        `${SHOPWARE_API_URL}${PLUGIN_ENDPOINT_URL}`,
        {
          headers: {
            'sw-access-key': SW_ACCESS_KEY
          }
        }
      )
    } catch (e) {
      console.warn('SwHelloCody.vue: ', e)
    }
  },
  computed: {
    phrase() {
      return (
        this.phraseResponse &&
        this.phraseResponse.data &&
        this.phraseResponse.data.phrase
      )
    }
  }
  }
</script>
<style lang="scss" scoped>
    .hello-cody {
        margin: 20px auto 20px auto;

        h3 {
            font-weight: 100;
        }
    }
</style>
