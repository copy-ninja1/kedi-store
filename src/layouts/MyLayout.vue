<template>
  <q-layout view="hHh LpR lfr">
    <q-header
      class="bg-white text-green-9"
      style="box-shadow: 0 1px 1px rgba(0, 0, 0, 0.01), 0 10px 30px rgba(0,0,0,0.08);"
    >
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
          <span class="text-body2"
            >Sandy's Kedi Store. All rights reserved.</span
          >
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
  methods: {}
};
</script>
<style lang="scss" scoped>
.box-top-border {
  border-top: 1px solid $dark-border;
}
</style>
