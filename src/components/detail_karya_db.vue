<template>
    <div class=" flex justify-center">
        <div class=" flex flex-row pt-24 pl-28 pr-28 pb-20 m-10">
            <div class=" rounded-xl p-44 mr-10 bg-gray-300 overflow-hidden">
                <!-- component gambar masukkan sini dan jangan lupa class object cover-->
            </div>
            <div class=" flex flex-col">
                <p class=" text-4xl font-extrabold">
                    {{ detail_karya.title}}
                </p>
                <!-- Tag untuk nama jurusan -->
                <div class=" rounded-lg w-fit mt-3 bg-gray-300">
                    <div class=" ml-4 mr-4">
                        <p class=" text-center ">
                            {{detail_karya.peminatan}}
                        </p>
                    </div>
                </div>
                <!-- description -->
                <div class=" pt-3">
                    <p class=" font-normal">
                        {{ detail_karya.keterangan}}
                    </p>
                </div>
                <!-- profile -->
                <div class=" flex flex-row pt-5">
                    <div class=" bg-gray-300 rounded-full w-16 h-16 overflow-hidden">
                        <!-- Tambahkan image jangan lupa object cover untuk class img nya -->
                    </div>
                    <div class=" flex flex-col justify-center pl-3">
                        <p class=" font-semibold text-lg">
                            {{ detail_karya.nama}}
                        </p>
                        <p class=" font-light">
                            {{ detail_karya.sosmed}}
                        </p>
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