<template>
  <q-card class="my-card" flat bordered>
    <img :src="product.imageSrc" />

    <q-card-section>
      <div class="text-h6">{{ product.title }}</div>
    </q-card-section>
    <q-card-section style="height:200px;width:100%" class="q-pt-none">
      <ul>
        <li v-for="(benefit, n) in product.benefits" :key="n">
          {{ benefit }}
        </li>
      </ul>
    </q-card-section>
  </q-card>
</template>
<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  }
};
</script>
