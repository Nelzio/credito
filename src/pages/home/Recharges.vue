<template>
  <q-page padding>
    <!-- content -->
    <div class="q-gutter-y-md">
      <q-card class="my-card" v-for="i in 3" :key="i">
        <q-item clickable v-ripple :to="'recharges/'+i+'/prices'">
          <q-item-section>
            Diario
          </q-item-section>
        </q-item>
      </q-card>

    </div>
    
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>
