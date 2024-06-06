import { onMounted } from 'vue';
<template>

    <div class="text-center">
        <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl">
            Bienvenido a nuestro sitio web
        </h1>
        <p class="mx-auto max-w-[600px] text-gray-500 md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p> Counter : {{ counter }} </p>

        <button class="bg-blue-500 text-white rounded-md p-2 mt-2" @click="increment">Increment</button>
    </div>

</template>
<script src="./HomePage.ts" />
