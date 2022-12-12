<template>
    <div class="pt-20">
     <div class="overflow-hidden w-full h-20 rounded bg-slate-400">
      <ul class="pt-3">
         <li>
            <div class="flex items-stretch px-16 gap-x-6 text-center">
               <!-- galerry -->
               <div class="bg-white w-14 h-14 rounded-lg overflow-hidden">
                  <img :src="dashboard.image" alt="" class="object-cover">
               </div>
               <!-- judul -->
               <div class="text-black font-semibold text-xl px-32 pt-4">{{ dashboard.title }}</div>
               <!-- nama -->
               <div class="text-black font-semibold text-xl pt-4">{{ dashboard.name }}</div>
                <!-- simbol -->
               <div class="justify-end">
            <div class="flex flex-row pl-56 gap-x-6 pt-4 text-xl">
                    <!-- edit -->
                    <img src="./assets/Vector edit.svg" alt="" class="w-6 h-6">
                   <!-- read -->
                   <img src="./assets/Vector read.svg" alt="" class="w-6 h-6">
                  <!-- delete -->
                    <img src="./assets/Vector delete.svg" alt="" class="w-6 h-6">
            </div>
            </div>
            </div>
         </li>
         </ul>
         </div>
         <!-- end dahboard 1 -->

      </div>
</template>

    <script>
    export default {
        props: {
            dashboard: Object
        }
    }
</script>