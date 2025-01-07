<script setup>
    import {reactive, onMounted} from "vue";

    const user = reactive({
        firstName: "",
        age: null
    });

    const users = reactive([]);

    onMounted(()=>{
        users.push(
            {
                firstName: "Alexandre",
                age: 40
            },
            {
                firstName: "João",
                age: 78
            },
            {
                firstName: "Maria",
                age: 15
            }
        );
    });

    function insert(){
        console.log(user.firstName, user.age);

        if(user.firstName && user.age){
            users.push(
                {
                    firstName: user.firstName,
                    age: user.age
                }
            );
        }else{
            alert("Insira um nome e uma idade.");
        }

    }

    function remove(formUser){
        if(formUser.firstName){
            const index = users.findIndex(user => {return user.firstName === formUser.firstName});
            users.splice(index, 1);
            console.log(index);
        }
    }
</script>

<template>
    <div class="text-black">
        <div>
            <form action="" @submit.prevent="insert" class="mb-16">
                <input type="text" placeholder="First Name" v-model="user.firstName" class="w-1/3 rounded-lg p-2 mr-2">
                <input type="number" placeholder="Age" v-model="user.age" class="w-1/3 rounded-lg p-2 mr-2">
                <button type="submit" class="float-right w-fit border-2 rounded-lg p-2 hover:bg-gray-500 transition text-white">Add</button>
            </form>
        </div>
    </div>
    <div class="text-white mb-10">
        <template v-if="users.length > 0">
            <div v-for="user in users" class="flex justify-between mb-5">
                <div>
                    {{ user.firstName }} - {{ user.age }}
                </div>
                <div>
                    <button class="rounded-lg bg-white text-black hover:bg-gray-500 p-2 transition" v-on:click="remove(user)">Remove</button>
                </div>
            </div>
        </template>
        <template v-else>No user found</template>
    </div>
</template>

<style scoped>
</style>