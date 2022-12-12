<template>
    <div class="min-h-screen flex flex-none  w-auto">
        <div class="w-9/12  bg-slate-600 bottom-0">
            <div class="absolute bottom-5 pl-20 ">
                <!-- edit img -->
                <img class="w-72 h-40 " src="./assets/logoipsum-288 1.svg" alt="">
            </div>
        </div>
        <div class="w-3/5 bg-white">
            <div class="flex justify-center items-center pt-48">
                <form action="">
                    <div class="space-y-8">
                        <div class="flex items-center text-xl font-sans">
                            <!-- input username -->
                            <input type="text" v-model="Username" placeholder="Username" class="appearance-none  bg-slate-300 h-14 w-96 outline-none pl-5 ">
                        </div>
                        <div class="flex items-center text-xl font-sans">
                            <!-- input email -->
                            <input type="email" v-model="Email" placeholder="Email" class="appearance-none  bg-slate-300 h-14 w-96 outline-none pl-5 ">
                        </div>
                        <div class="flex items-center">
                            <!-- input password -->
                            <input type="password" v-model="Password" placeholder="********" class="appearance-none  bg-slate-300 h-14 w-96 pl-5">
                        </div>
                        <div class="flex items-center justify-center pt-14">
                            <!-- tombol -->
                            <router-link to="/dashboard" custom v-slot="{ navigate }">
                                <button v-on:click="Daftar" type="submit" @click="navigate" role="link" class="bg-slate-300 h-14 w-96 text-xl font-bold">DAFTAR</button>
                             </router-link>
                        </div>   
                    </div>
                </form>
            </div> 
        </div>
    </div>
</template>

    <script>
    export default {
        data()
        {
            return{
                Username: '',
                Email: '',
                Password: ''
            }
        },
        methods:{
            Daftar()
            {
                console.warn(this.Username,this.Email,this.Password)
            }
        }
    };
</script>