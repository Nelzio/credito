<template>
  <div class="WAL position-relative bg-grey-4" :style="style">
    <q-layout view="lHh Lpr lFf" class="WAL__layout shadow-3" container>
      <q-header elevated>
        <q-toolbar class="bg-grey-3 text-black">
          <q-btn
            round
            flat
            icon="more_vert"
            class="WAL__drawer-open q-mr-sm"
            @click="leftDrawerOpen = true"
          />

          <span class="text-h6 text-teal">
            Credito
          </span>

          <q-space/>

            <q-avatar>
              <img src="https://pngimage.net/wp-content/uploads/2018/05/cr%C3%A9dito-png-5.png">
            </q-avatar>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        bordered
        :breakpoint="690"
      >
        <q-toolbar class="bg-grey-3">
          <q-avatar class="cursor-pointer">
            <img src="https://pngimage.net/wp-content/uploads/2018/05/cr%C3%A9dito-png-5.png" />
          </q-avatar>

          <span class="text-h6 text-teal q-pl-sm">
            Credito
          </span>

          <q-space />

          <q-btn
            round
            flat
            icon="close"
            class="WAL__drawer-close"
            @click="leftDrawerOpen = false"
          />
        </q-toolbar>

        <q-scroll-area style="height: calc(100% - 100px)">
          <q-list>
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container class="bg-grey-2">
        <router-view />
      </q-page-container>

      <q-footer>
        <!-- <q-toolbar class="bg-grey-3 text-black" style="padding: 0;"> -->
          <q-tabs class="text-teal bg-grey-3 shadow-1" align="justify">
            <q-route-tab to="/" icon="home" />
            <q-route-tab to="/recharges" icon="payment" />
            <q-route-tab to="/" icon="history" />
            <q-route-tab to="/" icon="settings" />
          </q-tabs>
          
        <!-- </q-toolbar> -->
      </q-footer>
    </q-layout>
  </div>
</template>

<script>
export default {
  name: 'WhatsappLayout',
  data () {
    return {
      leftDrawerOpen: false,
      search: '',
      message: '',
      currentConversationIndex: 0,
    }
  },
  computed: {
    currentConversation () {
      return this.conversations[this.currentConversationIndex]
    },
    style () {
      return {
        height: this.$q.screen.height + 'px'
      }
    }
  }
}
</script>

<style lang="sass">
.WAL
  width: 100%
  height: 100%
  padding-top: 20px
  padding-bottom: 20px
  &:before
    content: ''
    height: 127px
    position: fixed
    top: 0
    width: 100%
    background-color: #009688
  &__layout
    margin: 0 auto
    z-index: 4000
    height: 100%
    width: 90%
    max-width: 950px
    border-radius: 5px
  &__field.q-field--outlined .q-field__control:before
    border: none
  .q-drawer--standard
    .WAL__drawer-close
      display: none
@media (max-width: 850px)
  .WAL
    padding: 0
    &__layout
      width: 100%
      border-radius: 0
@media (min-width: 691px)
  .WAL
    &__drawer-open
      display: none
.conversation__summary
  margin-top: 4px
.conversation__more
  margin-top: 0!important
  font-size: 1.4rem
</style>