<template>
    <div class=" p-7 justify-center flex">
            <router-link to="/detail-karya">
                <div class="w-72 h-72 bg-slate-700 rounded-lg overflow-hidden">
                    <img class="object-cover" :src="gallery.image" alt="">
                </div>
            </router-link>
    </div>
</template>

<script>
    export default {
        props: {
            gallery: Object
        },
        
    }
</script>