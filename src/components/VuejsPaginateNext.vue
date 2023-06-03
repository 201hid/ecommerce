<template>
    <ul :class="containerClass">
      <li :class="pageClass" v-for="pageNumber in pageCount" :key="pageNumber">
        <a
          :class="{ [activeClass]: pageNumber === currentPage }"
          href="#"
          @click.prevent="handlePageClick(pageNumber)"
        >{{ pageNumber }}</a>
      </li>
    </ul>
  </template>
  
  <script>
  export default {
    name: 'VuejsPaginateNext',
  
    props: {
      pageCount: {
        type: Number,
        required: true,
      },
      currentPage: {
        type: Number,
        required: true,
      },
      containerClass: {
        type: String,
        default: 'pagination',
      },
      pageClass: {
        type: String,
        default: 'page-item',
      },
      activeClass: {
        type: String,
        default: 'currentPage',
      },
    },
  
    methods: {
      handlePageClick(pageNumber) {
        this.$emit('pagination-change-page', pageNumber);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add component-specific styles here */
  </style>
  