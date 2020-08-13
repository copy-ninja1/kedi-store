<template>
  <q-layout view="hHh LpR lfr">
    <q-header :elevated="elevated" class="header" :class="elevated?'':'border-dark-bottom-1'">
      <q-toolbar class="container">
        <q-toolbar-title>
          <span class="text-weight-bold">Sandy's</span> Kedi Store
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-footer bordered class="bg-color border-dark-top-1">
      <div class="container">
        <div class="row bg-color py-4 text-blue-2 text-center justify-center" >
          <div class="col-xs-6 col-sm-4" :class="$q.screen.lt.sm?'pb-4':''">
            <q-btn color="blue-1" flat no-caps rounded icon="mdi-facebook" label="Face Book" />

            <!-- <q-btn icon="mdi-facebook" flat round size="md" />
            <span class="text-h6 text-blue-1 text-weight-bold ma-0 px-1">face book</span>-->
          </div>
          <div class="col-xs-6 col-sm-4" :class="$q.screen.lt.sm?'pb-4':''">
            <q-btn color="blue-1" flat no-caps rounded icon="mdi-instagram" label="Instagram" />
          </div>
          <div class="col-xs-6 col-sm-4" :class="$q.screen.lt.sm?'py-4':''">
            <q-btn color="blue-1" no-caps flat rounded icon="mdi-twitter" label="Twitter" />
          </div>
        </div>
      </div>
      <div class="row header justify-center border-dark-top-1">
        <p class="text-center pt-2 text-weight-light text-h6 text-blue-1">
          &copy;2020
          <span class="text-body2">Iyk's Accounting. All rights reserved.</span>
        </p>
      </div>
    </q-footer>
    <q-page-container v-scroll="scrolled">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MyLayout",

  data() {
    return {
      leftDrawerOpen: false,
      elevated: false
    };
  },
  methods: {
    scrolled(position) {
      if (position > 50) {
        this.elevated = true;
      } else {
        this.elevated = false;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.box-top-border {
  border-top: 1px solid $dark-border;
}
</style>