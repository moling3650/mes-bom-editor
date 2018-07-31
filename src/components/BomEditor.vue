<template>
  <div id="bom_editor">
  </div>
</template>

<script>
import apis from '@/apis'

export default {
  name: 'BomEditor',
  data () {
    return {
    }
  },
  mounted () {
    apis.fetchBom().then(res => {
      console.log(res)
    })
  }
}
</script>

<style scoped>
</style>
