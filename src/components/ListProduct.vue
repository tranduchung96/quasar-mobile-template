<script setup lang="ts">
import { Product } from 'components/models';
import ProductComponent from 'components/Product.vue';

defineOptions({
  name: 'ListProduct'
});

const products: Product[] = [
  {
    'id': 1,
    'name': 'Almond Toe Court Shoes, Patent Black',
    'category': 'Womens Footwear',
    'price': 99.00,
    'stock': 5,
    'image': 'https://m.media-amazon.com/images/I/81pg+bR4v1L._AC_SX466_.jpg'
  },
  {
    'id': 2,
    'name': 'Suede Shoes, Blue',
    'category': 'Womens Footwear',
    'price': 42.00,
    'stock': 4,
    'image': 'https://m.media-amazon.com/images/I/81pg+bR4v1L._AC_SX466_.jpg'
  },
  {
    'id': 3,
    'name': 'Leather Driver Saddle Loafers, Tan',
    'category': 'Mens Footwear',
    'price': 34.00,
    'stock': 12,
    'image': 'https://m.media-amazon.com/images/I/81pg+bR4v1L._AC_SX466_.jpg'
  },
  {
    'id': 4,
    'name': 'Flip Flops, Red',
    'category': 'Mens Footwear',
    'price': 19.00,
    'stock': 6,
    'image': 'https://m.media-amazon.com/images/I/81pg+bR4v1L._AC_SX466_.jpg'
  },
  {
    'id': 5,
    'name': 'Flip Flops, Blue',
    'category': 'Mens Footwear',
    'price': 19.00,
    'stock': 0,
    'image': 'https://m.media-amazon.com/images/I/81pg+bR4v1L._AC_SX466_.jpg'
  },
  {
    'id': 6,
    'name': 'Gold Button Cardigan, Black',
    'category': 'Womens Casualwear',
    'price': 167.00,
    'stock': 6,
    'image': 'https://m.media-amazon.com/images/I/81pg+bR4v1L._AC_SX466_.jpg'
  },
  {
    'id': 7,
    'name': 'Cotton Shorts, Medium Red',
    'category': 'Womens Casualwear',
    'price': 30.00,
    'stock': 5,
    'image': 'https://m.media-amazon.com/images/I/81pg+bR4v1L._AC_SX466_.jpg'
  },
  {
    'id': 8,
    'name': 'Fine Stripe Short Sleeve Shirt, Grey',
    'category': 'Mens Casualwear',
    'price': 49.99,
    'stock': 9,
    'image': 'https://m.media-amazon.com/images/I/81pg+bR4v1L._AC_SX466_.jpg'
  },
  {
    'id': 9,
    'name': 'Fine Stripe Short Sleeve Shirt, Green',
    'category': 'Mens Casualwear',
    'price': 49.99,
    'offer': 39.99,
    'stock': 9,
    'image': 'https://m.media-amazon.com/images/I/81pg+bR4v1L._AC_SX466_.jpg'
  },
  {
    'id': 10,
    'name': 'Sharkskin Waistcoat, Charcoal',
    'category': 'Mens Formalwear',
    'price': 75.00,
    'stock': 2,
    'image': 'https://m.media-amazon.com/images/I/81pg+bR4v1L._AC_SX466_.jpg'
  },
  {
    'id': 11,
    'name': 'Lightweight Patch Pocket Blazer, Deer',
    'category': 'Mens Formalwear',
    'price': 175.50,
    'stock': 1,
    'image': 'https://m.media-amazon.com/images/I/81pg+bR4v1L._AC_SX466_.jpg'
  },
  {
    'id': 12,
    'name': 'Bird Print Dress, Black',
    'category': 'Womens Formalwear',
    'price': 270.00,
    'stock': 10,
    'image': 'https://m.media-amazon.com/images/I/81pg+bR4v1L._AC_SX466_.jpg'
  },
  {
    'id': 13,
    'name': 'Mid Twist Cut-Out Dress, Pink',
    'category': 'Womens Formalwear',
    'price': 540.00,
    'stock': 5,
    'image': 'https://m.media-amazon.com/images/I/81pg+bR4v1L._AC_SX466_.jpg'
  }
];

</script>

<template>
  <div class="flex flex-row flex-wrap justify-start align-middle">
    <template v-for="product in products" v-bind:key="product.id">
      <ProductComponent class="basis-1/2" :product="product" />
    </template>

  </div>

</template>

