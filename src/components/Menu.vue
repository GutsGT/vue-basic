<script setup>
</script>

<template>
    <div class="text-md md:text-2xl w-full">
        <nav class="flex text-center mt-10">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/login">Login</RouterLink>
            <RouterLink to="/users">Users</RouterLink>
        </nav>
    </div>
</template>

<style scoped>
    nav>a {
        border-left: 2px solid gray;
        padding: 10px;
        min-width: 80px;
    }

    nav>a:last-child{
        border-right: 2px solid gray;
    }

    nav a.router-link-exact-active {
        color: var(--color-primary);
    }
</style>