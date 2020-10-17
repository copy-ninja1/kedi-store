<template>
  <div class="row q-col-gutter-sm q-pa-sm">
    <div
      class="col-xs-12 col-sm-6 col-md-4 col-xl-2 col-md-55"
      v-for="(product, indx) in products"
      :key="indx"
    >
      <product-card :product="product"></product-card>
    </div>
  </div>
</template>
<script>
import PRODUCTS from "../utils/products";
import meta from "../utils/meta.js";
export default {
  components: {
    productCard: () => import("components/Product-Card")
  },
    meta,
  data() {
    return {
      products: PRODUCTS,

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
            innerHTML: this.getSeoSchema()
          }
        }
      }
    };
  },
  methods: {
    getSeoSchema() {
      var schema = `{
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Sandy's Kedi Store",
      "url": "http://sandykedistore.com",
      "logo": "https://sandykedistore.com/statics/app-logo-128x128.png",
      "email": "sandraifeoma408@gmail.com",
        "telephone": "( 33 1) 42 68 53 00",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nigeria, Ebonyi State, Abakaliki",
        "postalCode": "F-75002",
        "streetAddress": "No 49 powa shop alog udensi road, Abakaliki, Ebonyi state, Nigeria"
      },
      "contactPoint" : [
        { "@type" : "ContactPoint",
          "telephone" : "+2347063719292",
          "contactType" : "customer service",
          "availableLanguage" : ["English"],
          "areaServed" : ["NG"]
        } 
      ] 
    }`;
      PRODUCTS.forEach((product, i) => {
        schema += `,{
          "@context": "https://schema.org/",
          "@type": "Product",
          "name": "${product.title}",
            "image": "${product.imageSrc}",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "${product.reviewCount}"
          }
        }`;
      });
      // this.metaTags.script.ldJson.innerHTML = schema;
      return schema;
    },
    randomImageLoadingColor() {
      this.currentColor = `bg-${
        this.colors[Math.floor(Math.random() * this.colors.length)]
      }`;
    }
  }
};
</script>

