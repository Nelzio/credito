<template>
  <q-page padding>
    <!-- content -->
    <Conclusion />
    <ConclusionError />
  </q-page>
</template>

<script>
import Conclusion from 'components/recharge/Conclusion.vue'
import ConclusionError from 'components/recharge/ConclusionError.vue'
export default {
  // name: 'PageName',
  components: {
    Conclusion,
    ConclusionError
  }
}
</script>
