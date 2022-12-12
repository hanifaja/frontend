<template>
    <div class="relative">
        <!-- start gallery -->
    <div class="px-16">
    <div class="grid grid-rows-3 grid-flow-col ">
        <div class="w-72 h-72 bg-slate-700 rounded-lg overflow-hidden">
          <img class="object-cover" :src="gallery.image" alt="">
        </div>
    </div>
    </div>
  </div>
        <!-- end gallery -->
</template>

<script>
    export default {
        props: {
            gallery: Object
        },
        
    }
</script>