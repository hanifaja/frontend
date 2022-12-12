<template>
    <div class="pl-32 pr-32 pt-12">
        <!-- button -->
        <div class="flex flex-row gap-10 pt-16 justify-end">
        <div class="relative bg-slate-400 rounded-lg overflow-hidden text-black font-medium justify-between px-5 py-2.5 group">
         <router-link to="/detail-karya" custom v-slot="{ navigate }"> 
            <button class="relative" @click="navigate" role="link">Upload Karya</button>
            </router-link>
        </div>
        </div>
        <!-- dashboard 1 -->
        <div>
         <div v-for="i in 2" :key="i">
         <Dashboard :dashboard="{
            image: '',
            title: 'Sunflower',
            name: 'Jhon Dhoe',
         }">
      </Dashboard>
         </div>
        </div>
         <!-- end dahboard 1 -->

      </div>
</template>

<script>
   import Dashboard from './dashboard_db.vue'
   export default {
      components: {Dashboard},
      data: function() {
    return {
      edit: "../assets/logoipsum-288 1.svg"
    }
  }
   }
</script>
