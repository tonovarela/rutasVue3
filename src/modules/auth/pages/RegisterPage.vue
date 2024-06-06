<template>
    <div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 class="text-2xl font-semibold mb-4">Login</h1>
        <form action="#" method="POST">
            <!-- Username Input -->
            <div class="mb-4">
                <label for="username" class="block text-gray-600">Name</label>
                <input type="text" id="username" name="username"
                    class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                    autocomplete="off">
            </div>
            <!-- Password Input -->
            <!-- Username Input -->
            <div class="mb-4">
                <label for="username" class="block text-gray-600">Login</label>
                <input type="text" id="username" name="username"
                    class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                    autocomplete="off">
            </div>
            <!-- Password Input -->
            <div class="mb-4">
                <label for="password" class="block text-gray-600">Password</label>
                <input type="password" id="password" name="password"
                    class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                    autocomplete="off">
            </div>
            <div class="mb-4">
                <label for="password" class="block text-gray-600">Confirm password</label>
                <input type="password" id="password" name="password"
                    class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                    autocomplete="off">
            </div>


            <!-- Login Button -->
            <button type="submit"
                class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Register</button>
        </form>
        <!-- Sign up  Link -->
        <div class="mt-6 text-blue-500 text-center">
            <RouterLink :to="{ name: 'login' }">Yo have allready account,Login here</RouterLink>

        </div>
    </div>
</template>
<script setup lang="ts">
import type { RouterLink } from 'vue-router';


</script>