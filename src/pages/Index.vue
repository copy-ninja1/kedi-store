<template>
  <q-page class="q-py-md">
    <section class="text-primary" style="height:500px">
      <div class="row justify-center items-center" style="height:100%">
        <div class="col-xs-12 col-sm-6 col-md-4 px-5">
          <h4 class="text-h4 q-my-none text-center">Kedi Health Care</h4>
          <p
            class="ma-0 text-center text-weight-light"
            :class="$q.screen.lt.md ? 'text-body1' : 'text-h6'"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, sed
            repellat? Quod quos suscipit itaque porro neque iusto officia
            repudiandae.
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
          <div class="wrapper">
            <!-- <div class="avatar">
            <q-avatar :size="$q.screen.lt.sm?'160px':$q.screen.lt.md?'180px':'200px'">
              <q-img alt="Ani Nweze "  src="~assets/img.jpg" />
            </q-avatar>
            </div>-->
            <q-img
              style="width:200px;height:200px"
              alt="Ani Nweze "
              src="https://focus.ua/storage/pub/images/2019/cfda-23.jpg"
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
        <div class="col-xs-12 flex flex-center px-5">
          <h5
            class="py-2 text-primary text-center text-weight-light"
            :class="$q.screen.lt.md ? 'text-h4' : 'text-h3 '"
            style="margin-top:20px;margin-bottom:10px;"
          >
            Hi
          </h5>
          <p
            class="ma-0 text-center text-weight-light"
            :class="$q.screen.lt.md ? 'text-body1' : 'text-h6'"
          >
            <!-- I'm an accountant based in Nigeria, Abuja.
            I have a great passion for Accounting and a good manger of money. -->
            Hy, am Sandra Uchewa based in Nigeria, Ebonyi state. I pattner with
            kedi to bring to you a deal of health care service.
          </p>
        </div>
      </div>
    </section>

    <!-- what I can do -->
    <section class="bg-white container mt-6">
      <header class="py-8">
        <h2 class="text-center text-primary my-2 text-h2">What I can do.</h2>
      </header>
      <div class="flex flex-center">
        <div class="row justify-center">
          <div class="col-xs-12 col-md-6 flex flex-center">
            <img alt="Quasar logo" src="~assets/quasar-logo-full.svg" />
          </div>
          <div class="col-xs-12 col-md-6 flex flex-center px-5">
            <h5
              class="py-2 text-primary"
              style="margin-top:20px;margin-bottom:10px;"
            >
              Design what you want.
            </h5>
            <p
              class="ma-0 text-center text-weight-light"
              :class="$q.screen.lt.md ? 'text-body1' : 'text-h6'"
            >
              I like to keep it simple. My goals are to focus on typography,
              content and conveying the message that you want to send.
            </p>
          </div>
        </div>
        <div class="row justify-center py-6">
          <div class="col-xs-12 col-md-6 flex flex-center px-5">
            <h5
              class="py-2 text-primary"
              style="margin-top:20px;margin-bottom:10px;"
            >
              Develop what you need.
            </h5>
            <p
              class="ma-0 text-center text-weight-light"
              :class="$q.screen.lt.md ? 'text-body1' : 'text-h6'"
            >
              I'm a developer, so I know how to create your website to run
              across devices using the latest technologies available.
            </p>
          </div>
          <div class="col-xs-12 col-md-6 flex flex-center">
            <img alt="Quasar logo" src="~assets/quasar-logo-full.svg" />
          </div>
        </div>
      </div>
    </section>
    <section class="q-py-lg">
      <productsCarosel />
    </section>

    <section
      class="dot-image"
    >
      <contact-form></contact-form>
    </section>
  </q-page>
</template>

<script>
import products from "../assets/products";
export default {
  name: "PageIndex",
  components: {
    contactForm: () => import("components/Contact-form"),
    productsCarosel: () => import("components/Product-Carosel")
  },
  data() {
    return {
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
      currentColor: ""
    };
  },
  methods: {
    randomImageLoadingColor() {
      this.currentColor = `bg-${
        this.colors[Math.floor(Math.random() * this.colors.length)]
      }`;
    }
  },
  async mounted() {
    await this.randomImageLoadingColor();
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
  // width: 75%;
  // height: 75%;
  border-radius: 100%;
  background-color: #fff;
  // background-image: url("https://focus.ua/storage/pub/images/2019/cfda-23.jpg");
  // background-size: cover;
  // background-position: center;
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
//
//

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
</style>
