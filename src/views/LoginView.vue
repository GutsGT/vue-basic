<script setup>
    import {ref, reactive, onMounted} from "vue";

    const user = reactive({
        email: "",
        password: ""
    });

    function login(){
        console.log(user.email, user.password);
    }
</script>

<template>
    <div class="text-center">
        <h1 class="text-6xl font-bold text-white mb-16">Login</h1>

        <div class="text-black">
            <form class="flex flex-col items-center" action="" @submit.prevent="login">
                <div class="w-3/4 mb-5">
                    <input class="w-full rounded-lg p-2" type="email" placeholder="Email" v-model="user.email">
                    <div class="text-white text-left">
                        <template v-if="user.email.length <= 0">Empty Email</template>
                        <template v-else>Email: {{ user.email }}</template>
                    </div>
                </div>
                <input class="w-3/4 rounded-lg p-2 mb-5" type="password" placeholder="Password" v-model="user.password">
                <div class="w-3/4 text-right">
                    <button class="p-2 rounded-lg bg-white hover:bg-gray-500 transition" type="submit">Login</button>
                </div>
            </form>
        </div>
    </div>
</template>


<style scoped>
</style>