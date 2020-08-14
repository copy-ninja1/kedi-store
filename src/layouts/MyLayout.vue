<template>
  <q-layout view="hHh LpR lfr">
    <q-header :elevated="elevated" class="header" :class="elevated?'':'border-dark-bottom-1'">
      <q-toolbar class="container">
        <q-toolbar-title>
          <span class="text-weight-bold">Sandy's</span> Kedi Store
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-footer bordered class="bg-grey-1">
      
      <div class="row justify-center ">
        <p class="text-center pt-2 text-weight-light text-h6 text-grey-8">
          &copy;2020
          <span class="text-body2">Sandy's Kedi Store. All rights reserved.</span>
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