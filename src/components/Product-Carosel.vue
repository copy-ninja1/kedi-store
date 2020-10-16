<template>
  <div>
    <div class="row relative" v-if="$q.screen.lt.md">
      <!--  -->
      <!-- <router-link
          :to="category.title == 'music' ||category.title == 'Music' ?'/genrebrowse':'post/'+category.title"
      >-->
      <div class="slider">
        <div
          itemtype="http://schema.org/Product"
          class="item"
          :style="
            `${
              $q.screen.width < 400
                ? 'width: calc(100vw/1.3)'
                : $q.screen.width < 735
                ? 'width: calc(100vw/2.4)'
                : $q.screen.width < 1000
                ? 'width: calc(100vw/3.4)'
                : 'width: calc(100vw/4.5)'
            }`
          "
          v-for="(product, indx) in products"
          :key="indx"
        >
          <q-card class="my-card" flat>
            <img :src="product.imageSrc" itemprop="image" />

            <q-card-section>
              <div class="text-h6" itemprop="name">{{ product.title }}</div>
            </q-card-section>

            <q-card-section style="height:200px;width:100%" class="q-pt-none">
              <ul>
                <li v-for="(benefit, n) in product.benefits" :key="n">
                  {{ benefit }}
                </li>
              </ul>
            </q-card-section>
            <div
              itemprop="aggregateRating"
              itemscope
              hidden
              itemtype="https://schema.org/AggregateRating"
            >
              <span itemprop="ratingValue">87</span>
              out of <span itemprop="bestRating">100</span> based on
              <span itemprop="ratingCount">24</span> user ratings
            </div>
          </q-card>
          <!-- </router-link> -->
        </div>
      </div>
    </div>
    <div class="full-width q-pa-md" v-if="$q.screen.gt.sm">
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
        height="500px"
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
          <div class="row fit justify-start  q-col-gutter-sm no-wrap">
            <div v-for="(item, index) in product" :key="index">
              <q-card class="my-card" style="height:auto;max-width:272.5px">
                <img style="height:200px;width:100%" :src="item.imageSrc" />
                <q-card-section
                  style="height:320px;width:100%"
                  class="q-pt-none q-px-sm"
                >
                  <div class="text-h6">{{ item.title }}</div>

                  <ul>
                    <li v-for="(benefit, n) in item.benefits" :key="n">
                      {{ benefit }}
                    </li>
                  </ul>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
</template>
<script>
// import PRODUCTS from "../assets/products";
export default {
  props: {
    PRODUCTS: {
      type: Array
    }
  },
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
          if (newArray[init].length < 5 /*slideNumber*/) {
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
      this.products = this.PRODUCTS;
    } else {
      this.products = this.reStructureArrayForCarousel( this.PRODUCTS);
    }
  },
  watch: {
    "$q.screen.lt.md"(val) {
      if (this.$q.screen.lt.md) {
        this.products =  this.PRODUCTS;
      } else {
        this.products = this.reStructureArrayForCarousel( this.PRODUCTS);
      }
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

  div:not(.q-avatar) {
    width: 100%;
    border-radius: inherit;
  }
  a {
    width: 100%;
  }
}
</style>
