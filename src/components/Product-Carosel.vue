<template>
  <div>
    <div class="row relative" v-if="$q.screen.lt.md">
      <!--  -->
      <!-- <router-link
          :to="category.title == 'music' ||category.title == 'Music' ?'/genrebrowse':'post/'+category.title"
      >-->
      <div class="slider">
        <div
          class="item"
          :style="
            `${
              $q.screen.width < 400
                ? 'width: calc(100vw/2.4)'
                : $q.screen.width < 735
                ? 'width: calc(100vw/3.5)'
                : $q.screen.width < 1000
                ? 'width: calc(100vw/4.5)'
                : 'width: calc(100vw/5.5)'
            }`
          "
          v-for="(product, indx) in products"
          :key="indx"
        >
          <q-card flat class="cursor-pointer full-width full-height q-pa-xs">
            <div class="q-ml-auto q-mr-auto" style="width: 100px;">
              <q-avatar size="100px">
                <img
                  class="text-body2 trending-products"
                  :src="product.imageSrc"
                />
              </q-avatar>
            </div>
            <q-card-section class="text-center">
              <p class="text-subtitle2">{{ product.title }}</p>
            </q-card-section>
          </q-card>
          <!-- </router-link> -->
        </div>
      </div>
    </div>
    <div class="full-width" v-if="$q.screen.gt.sm">
      <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        control-color="primary"
        padding
        :arrows="products.length > 1"
        v-if="products"
        height="265px"
        prev-icon="mdi-chevron-left"
        next-icon="mdi-chevron-right"
        class="rounded-borders"
      >
        <q-carousel-slide
          v-for="(product, indx) in products"
          :key="indx"
          :name="indx + 1"
          class="column no-wrap"
        >
          <div
            class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
          >
            <q-card
              v-for="(item, index) in product"
              :key="index"
              flat
              bordered
              class="cursor-pointer col full-height q-pa-xs q-ma-xs"
            >
              <div class="q-ml-auto q-mr-auto" style="width: 100px;">
                <q-avatar size="100px">
                  <img
                    class="trending-product"
                    :class="{
                      'bg-grey-7': $q.dark.isActive,
                      'bg-white': !$q.dark.isActive
                    }"
                    :src="item.imageSrc"
                  />
                </q-avatar>
              </div>
              <q-card-section class="text-center">
                <p>{{ item.title }}</p>
              </q-card-section>
            </q-card>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
</template>
<script>
import PRODUCTS from "../assets/products";
export default {
  data() {
    return {
      slide: 1,
      products: []
    };
  },
  methods: {
    reStructureArrayForCarousel(items) {
      var newArray = [[]];
      var init = 0;
      for (var i = 0; i < items.length; i++) {
        if (newArray[init]) {
          if (newArray[init].length < 3 /*slideNumber*/) {
            newArray[init].push(items[i]);
          } else {
            i--;
            init++;
          }
        } else {
          newArray.push([]);
          i--;
        }
      }
      return newArray;
    }
  },
  mounted() {
    if (this.$q.screen.lt.md) {
      this.products = PRODUCTS;
    } else {
      this.products = this.reStructureArrayForCarousel(PRODUCTS);
    }
  }
};
</script>
<style scoped lang="scss">
// horizontal slider
$size: 200px;
$gutter: 20px;

.slider {
  width: 100%;
  margin: auto;
  display: flex; // Force items to fit horizontally, don't wrap
  overflow-x: auto; // Let user slide if items can't fit
  overflow-y: hidden; // Avoid scrollbar on IE
  -webkit-overflow-scrolling: touch;
  padding: $gutter/2;
  height: fit-content;

  &:before,
  &:after {
    content: "";
    flex: 1 0 auto; // Trick to fake center alignment when the screen is large enough
    display: inline-block; // Force IE to set flex on IE 10
  }

  &:after {
    width: 10px; // Fix flexbox bug, .slider's right padding not taken into account
  }
}
.slider::-webkit-scrollbar {
  width: 0px; /* Remove scrollbar space */
  background: transparent;
  display: none;
}

.item {
  display: inline-block; // Force IE to set flex on IE 10
  margin: 5px;
  counter-increment: count;
  flex: 0 0 auto; // Items can't shrink or grow automatically
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #bdbcbc80;
  border-radius: 10px;

  div:not(.q-avatar){
    width: 100%;
    border-radius: inherit;
  }
  a {
    width: 100%;
  }
}
</style>
