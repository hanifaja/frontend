<template>
    <div class="gallery">
      <Navbar />
    <div class=" pt-4pb-10">
      <Gallery />
    </div>
      <Footer />
  </div>
  </template>
  
  <script>
       import Navbar from "../components/navbar.vue";
       import Gallery from "../components/gallery.vue";
       import Footer from "../components/footer.vue";
        export default {
          name: 'gallery',
          components: {Navbar,Gallery,Footer},
        };
  </script>