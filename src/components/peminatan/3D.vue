<template>
  <!-- 3D -->
    <div class="pl-16 pr-2">
<h1 class="text-black font-bold not-italic text-5xl">
  3D
</h1>
<div class="py-10">
  <p class="not-italic font-semibold text-xl">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae ipsum at ipsum tristique lacinia in et ipsum. Praesent commodo pulvinar tristique. Nulla efficitur consectetur aliquam. Donec ornare est eu tempus blandit. Sed in orci est. Sed ac ornare purus, sit amet tincidunt sapien. Curabitur pretium tortor neque, rutrum vulputate lacus bibendum a.
  </p>
</div>
</div>
   
   <!-- start gallery -->
   <div class=" pt-16 grid grid-cols-3 mx-auto max-w-5xl p-10 pb-20">
      <router-link to="/detail-karya" v-for="i in 9" :key="i">
      <gallery_row :gallery="{
        image: '',
      }">
      </gallery_row>
    </router-link> 
    </div>
          <!-- end gallery -->
    
</template>

<script>
 import gallery_row from '../gallery_db.vue';
export default {
  components: {gallery_row}
}
</script>
