<template>
         <div>
            <div v-for="i in 1" :key="i"></div>
            <Detail_karya :detail_karya="{
                image: '',
                title: 'Manut',
                peminatan: 'programming',
                keterangan: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae ipsum at ipsum tristique lacinia in et ipsum. Praesent commodo pulvinar tristique. Nulla efficitur consectetur aliquam. Donec ornare est eu tempus blandit. Sed in orci est. Sed ac ornare purus, sit amet tincidunt sapien. Curabitur pretium tortor neque, rutrum vulputate lacus bibendum a.',
                nama: 'sopo',
                sosmed: '@jono'
            }">
            </Detail_karya>
        </div>
</template>

<script>
    import Detail_karya from './detail_karya_db.vue';
    export default{
        components: {Detail_karya}
    }
</script>