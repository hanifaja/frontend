<template>
     <!-- start gallery -->
    <div class=" grid grid-cols-3 mx-auto max-w-5xl">
      <route-link to="/detail-karya" v-for="i in 9" :key="i">
      <gallery_row :gallery="{
        image: '',
      }">
      </gallery_row>
      </route-link> 
    </div>
          <!-- end gallery -->
  </template>
  
  <script>
  import gallery_row from './gallery_db.vue';
  export default {
    components: {gallery_row}
  }
  </script>
  