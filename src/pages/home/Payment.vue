<template>
  <q-page padding>
    <!-- content -->
    <q-card class="bg-grey-4 text-black q-gutter-y-lg">
      <q-card-section class="text-center">
        <q-icon name="img:statics/payment/payment.gif" size="100px" />
      </q-card-section>
      <q-card-section>
        <q-input
          rounded
          outlined
          dense
          class="WAL__field col-grow"
          bg-color="white"
          v-model="number"
          placeholder="Escreva o seu numero mpesa"
        />
      </q-card-section>
      <q-card-actions>
        <q-btn rounded label="Pagar" class="full-width" color="teal"  />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data () {
    return {
      number: null,
    }
  }
}
</script>
