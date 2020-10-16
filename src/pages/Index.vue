<template>
  <q-page class="q-py-md">
    <section class="text-primary" style="height:500px">
      <div class="row justify-center items-center" style="height:100%">
        <div class="col-xs-12 col-sm-6 col-md-4 q-px-sm">
          <h4
            class="text-center"
            :class="$q.screen.lt.md ? 'text-h4 q-my-sm' : 'text-h3 q-my-md'"
          >
            Kedi Health Care
          </h4>
          <p
            class="q-ma-none text-center text-weight-light"
            :class="$q.screen.lt.md ? 'text-body1' : 'text-h6'"
          >
            Kedi Health care products are curative herbal products with no side
            effects. We have products that takes care of your internal organs,
            gives you a healthy life improves your immunity and slows down aging
            process.
          </p>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4 flex flex-center">
          <!-- <img alt="Quasar logo" src="~assets/quasar-logo-full.svg" /> -->
          <div>
            <div class="kedi-logo shadow-4" style="border-radius:10px">
              <div class="kedi-white">
                <div class="kedi-yellow"></div>
              </div>
            </div>
            <div>
              <h4 class="q-ma-xs">Kedi</h4>
              <p class="q-ma-xs">The partner you trust</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Intro -->
    <section class="bg-white flex flex-center container pt-10">
      <div class="row justify-center" style="max-width: 460px;">
        <div class="col-xs-12 flex flex-center">
          <div class="wrapper" itemscope itemtype="https://schema.org/Person">
            <!-- <div class="avatar">
            <q-avatar :size="$q.screen.lt.sm?'160px':$q.screen.lt.md?'180px':'200px'">
              <q-img alt="Ani Nweze "  src="~assets/img.jpg" />
            </q-avatar>
            </div>-->
            <q-img
              style="width:200px;height:200px"
              alt="Sandra Ifeoma Uchewa"
              src="statics/sandra-ifeoma-uchewa.jpg"
            >
              <template v-slot:loading>
                <div
                  style="width:200px;height:200px"
                  class="absolute-full bg-blue flex flex-center text-white"
                  :class="currentColor"
                >
                  <q-spinner-gears color="white" />
                </div>
              </template>
              <template v-slot:error>
                <div
                  style="width:200px;height:200px"
                  class="absolute-full bg-blue flex flex-center text-white"
                  :class="currentColor"
                ></div>
              </template>
            </q-img>
            <span itemprop="name" class="element-invisible">Sandra Ifeoma Uchewa</span>
            <span itemprop="jobTitle" class="element-invisible">Kedi Advocate</span>
            <!-- <div></div> -->
            <svg class="half-circle" viewBox="0 0 106 57">
              <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4" />
            </svg>
            <svg width="0" height="0" class="visually-hidden">
              <defs>
                <linearGradient id="orange-to-pink" x1="1" x2="0" y1="1" y2="1">
                  <stop offset="20%" stop-color="yellow" />
                  <stop offset="80%" stop-color="green" />
                </linearGradient>
                <filter id="duotone_orange_pink">
                  <feColorMatrix
                    type="matrix"
                    result="grayscale"
                    values="1 0 1 0 0
                  1 0 0 0 0
                  1 0 0 0 0
                  0 0 0 1 0"
                  />
                  <feComponentTransfer
                    color-interpolation-filters="sRGB"
                    result="duotone"
                  >
                    <feFuncR
                      type="table"
                      tableValues="0.7411764706 0.9882352941"
                    />
                    <feFuncG
                      type="table"
                      tableValues="0.0431372549 0.7333333333"
                    />
                    <feFuncB
                      type="table"
                      tableValues="0.568627451 0.05098039216"
                    />
                    <feFuncA type="table" tableValues="0 1" />
                  </feComponentTransfer>
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div class="col-xs-12 flex flex-center q-px-sm">
          <h5
            class="q-py-sm text-primary text-center text-weight-light"
            :class="$q.screen.lt.md ? 'text-h4' : 'text-h3 '"
            style="margin-top:20px;margin-bottom:10px;"
          >
            Hi
          </h5>
          <p
            class="q-ma-none text-center text-weight-light"
            :class="$q.screen.lt.md ? 'text-body1' : 'text-h6'"
          >
            Hy, am Sandra Uchewa based in Ebonyi state, Nigeria. I partner with
            kedi to bring to you a deal of health care service.
          </p>
        </div>
      </div>
    </section>

    <!-- what I can do -->
    <section class="bg-white container q-mt-md">
      <header class="q-py-md">
        <h2
          class="text-center text-primary q-my-sm"
          :class="$q.screen.lt.md ? 'text-h4 ' : 'text-h3 '"
        >
          What I can do.
        </h2>
      </header>
      <div class="flex flex-center">
        <div class="row justify-center q-mb-xl">
          <div class="col-xs-12 col-md-6 flex flex-center">
            <img
              alt="Quasar logo"
              style="width:100%;height:320px"
              src="~assets/body test.svg"
            />
          </div>
          <div
            class="col-xs-12 col-md-6 flex flex-center q-px-sm"
            :class="{ 'order-first': $q.screen.lt.md }"
          >
            <div class=" text-center">
              <h5
                class="q-py-sm text-primary "
                style="margin-top:20px;margin-bottom:3px;"
              >
                Body Test
              </h5>
              <p
                class="q-ma-none text-center text-weight-light"
                :class="$q.screen.lt.md ? 'text-body1' : 'text-h6'"
              >
                I offer full body organ test to ascertain the root cause of your
                illness before treatment at a very cheap and affordable rate
              </p>
            </div>
          </div>
        </div>
        <div class="row justify-center q-py-md  q-mb-xl">
          <div class="col-xs-12 col-md-6 flex flex-center q-px-sm">
            <div class=" text-center">
              <h5
                class="q-py-sm text-primary"
                style="margin-top:20px;margin-bottom:3px;"
              >
                Make Money From Kedi
              </h5>
              <p
                class="q-ma-none text-weight-light"
                :class="$q.screen.lt.md ? 'text-body1' : 'text-h6'"
              >
                Apart from prescribing kedi products for you, I can also coach
                you on how to patner and make money from kedi
              </p>
            </div>
          </div>
          <div class="col-xs-12 col-md-6 flex flex-center">
            <img alt="Quasar logo" src="~assets/make money with kedi.svg" />
          </div>
        </div>
        <div class="row justify-center q-py-md  q-mb-xl">
          <div class="col-xs-12 col-md-6 flex flex-center">
            <img
              alt="Teaching How to Conduct a Body Test"
              style="width:100%"
              src="~assets/teach kedi.svg"
            />
          </div>
          <div
            class="col-xs-12 col-md-6 flex flex-center q-px-sm"
            :class="{ 'order-first': $q.screen.lt.md }"
          >
            <div class=" text-center">
              <h5
                class="q-py-sm text-primary text-center"
                style="margin-top:20px;margin-bottom:3px;"
              >
                Teach How to Conduct a Body Test
              </h5>
              <p
                class="q-ma-none text-center text-weight-light"
                :class="$q.screen.lt.md ? 'text-body1' : 'text-h6'"
              >
                Using a quantum machine, I can tutor you on how to conduct a
                full body organ test
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="q-py-lg">
      <productsCarosel :PRODUCTS="products" />
    </section>

    <section class="dot-image">
      <contact-form></contact-form>
    </section>
    <q-no-ssr>
      <whatsappChat />
    </q-no-ssr>
  </q-page>
</template>

<script>
import products from "../assets/products";
import meta from "../utils/meta.js";
// if (process.env.CLIENT) {
//   import whatsappChat from "components/Whatsapp-chat";
// }
export default {
  name: "PageIndex",

  components: {
    contactForm: () => import("components/Contact-form"),
    productsCarosel: () => import("components/Product-Carosel"),
    // whatsappChat
    whatsappChat: () => import("components/Whatsapp-chat")
  },
  meta,
  data() {
    return {
      products: products,
      colors: [
        "red",
        "blue",
        "green",
        "indigo",
        "purple",
        "teal",
        "orange",
        "brown",
        "deep-orange",
        "blue-grey",
        "cyan"
      ],
      currentColor: "",
      metaTags: {
        title: "sandy's kedi store",
        url: "https://sandykedistore.com",
        image: "https://sandykedistore.com/statics/app-logo-128x128.png",
        description: `Kedi Health care products are curative herbal
         products with no side effects. We have products that takes
          care of your internal organs, gives you a healthy
           life improves your immunity and anti aging.`,
        script: {
          ldJson: {
            type: "application/ld+json",
            innerHTML: `{
          "@context": "https://schema.org/",
          "@type": "Recipe",
          name: "Banana Bread Recipe",
          description:
            "The best banana bread recipe you'll ever find! Learn how to use up all those extra bananas."
        },{
          "@context": "https://schema.org/",
          "@type": "Recipe",
          name: "Banana Bread Recipe",
          description:
            "The best banana bread recipe you'll ever find! Learn how to use up all those extra bananas."
        }`
          }
        }
      },
      seoSchema: ""
    };
  },
  methods: {
    randomImageLoadingColor() {
      this.currentColor = `bg-${
        this.colors[Math.floor(Math.random() * this.colors.length)]
      }`;
    },
    getSeoSchema() {
      var schema = "";
      products.forEach(product => {
        schema += `{
          "@context": "https://schema.org/",
          "@type": "Product",
          "name": "${product.title}",
            "image": "${product.imageSrc}",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "${this.getRandomInt(450,1000)}"
          },
        },`;
      });
      this.metaTags.script.ldJson.innerHTML = schema;
      console.log("seoSchema : ", this.seoSchema);
    },
    getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  },
  async mounted() {
    await this.randomImageLoadingColor();
    await this.getSeoSchema();
  }
};
</script>
<style lang="scss" scoped>
.avatar {
  position: relative;
}

.avatar img {
  border-radius: 9999px;
  height: 100%;
  position: relative;
  width: 100%;
  z-index: 2;
}

@keyframes pulse {
  to {
    opacity: 0;
    transform: scale(1);
  }
}

.avatar::before,
.avatar::after {
  animation: pulse 2s linear infinite;
  border: $primary solid 8px;
  border-radius: 9999px;
  box-sizing: border-box;
  content: " ";
  height: 140%;
  left: -20%;
  opacity: 0.6;
  position: absolute;
  top: -20%;
  transform: scale(0.714);
  width: 140%;
  z-index: 1;
}

.avatar::after {
  animation-delay: 1s;
}

//
.wrapper {
  position: relative;
  width: 300px;
  height: 300px;
}

.wrapper div:first-child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -55%);
  border-radius: 100%;
  background-color: #fff;
}

.wrapper .half-circle {
  position: absolute;
  left: 0;
  bottom: 4%;
  width: 100%;
  fill: none;
  stroke: url(#orange-to-pink);
  stroke-width: 8;
  stroke-linecap: round;
  pointer-events: none;
}
.kedi {
  &-logo {
    background: #323261;
    height: 200px;
    width: 200px;
  }
  &-white {
    height: inherit;
    width: 100px;
    float: right;
    border-radius: 150px 0 0 150px;
    background-color: white;
  }
  &-yellow {
    position: relative;
    height: 204px;
    width: 100px;
    top: -2px;
    left: 10px;
    float: right;
    // border-radius: 110px 10px 10px 110px;
    border-radius: 92% 8% 10% 88% / 50% 10% 10% 50%;
    background-color: yellow;
  }
}
.dot-image {
  background: url(../assets/dark-dot.svg) repeat 6px;
}
.element-invisible {
  position: absolute !important;
  height: 1px; width: 1px; 
  overflow: hidden;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
}
</style>
