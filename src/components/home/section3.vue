<template>
  <!-- start -->
  <div class=" pt-28">
    <div class=" flex justify-center ">
      <p class=" text-3xl font-bold">
        Our Featured Art
      </p>
    </div>
  </div>
<!-- start gallery -->
<div class=" pt-16 justify-center p-10 pb-20">
      <router-link to="/detail-karya" v-for="i in 9" :key="i">
      <gallery_row :gallery="{
        image: '',
      }">
      </gallery_row>
    </router-link> 
    </div>
          <!-- end gallery -->

  <!-- button -->
  <router-link to="/gallery">
  <div class=" flex justify-center pt-5">
    <label class=" rounded-full px-10 py-5 mt-10 mb-32 text-4xl border-2 border-black cursor-pointer hover:bg-gray-300">
      View More
    </label>
  </div>
</router-link>
</template>

  <script>
    import gallery_row from '../gallery_db.vue';
export default {
  components: {gallery_row}
}
  </script>