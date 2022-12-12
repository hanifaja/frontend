<template>
    <div class="flex justify-center items-center">
    <div class="pl-16 pr-16">
        <div class="grid grid-cols-2">
            <div class="px-38">  
               <!-- section 1 -->
     <div class="flex items-center justify-center">
                 <!-- gambar -->
        <div class="w-72 h-72 bg-slate-600 rounded-lg overflow-hidden">
            <img src="detail_karya.image" alt="" class="rounded-lg object-cover">
         </div>
    </div>
                <!-- section 2 -->
                <div class="flex flex-col space-y-5">
             <!-- title -->
                <h1 class="font-bold text-3xl">{{ detail_karya.title }}</h1>
            <!-- peminatan -->
                <div class="bg-gray-300 text-center px-3 py-1 w-28 h-8 text-sm rounded-full text-black">{{ detail_karya.peminatan }}</div>
                <!-- keterangan -->
            <p class="text-lg font-semibold">{{ detail_karya.keterangan }}</p>
            
             <div class="flex flex-row space-x-2 py-6">
                    <div class="flex w-12 h-12 rounded-full bg-slate-300"></div>
                        <div class="flex font-semibold">
                            <div class="flex flex-col text-xs">
                                <!-- nama -->
                                <span>{{ detail_karya.nama }}</span>
                                <!-- sosmed -->
                                <span class="pt-2">{{ detail_karya.sosmed }}</span>
                            </div>
                         </div>
                  </div>
             </div> 
        </div>
    </div>
</div>
</div>
</template>

<script>
    export default{
        props: {
            detail_karya: Object
        }
    }
</script>