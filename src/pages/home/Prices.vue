<template>
  <q-page>
    <!-- content -->
    <div>
      <q-list separator>
        <q-item clickable v-ripple class="bg-blue-2" v-for="i in 6" :key="i" :to="'/recharges/'+i+'/payment'">
          <q-item-section avatar>
            <q-icon name="history" />
            
          </q-item-section>
          <q-item-section>Diario</q-item-section>
          <q-item-section side class="text-black text-body1">20.000 Mt</q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>
