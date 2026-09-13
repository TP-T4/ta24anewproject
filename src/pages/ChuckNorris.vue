<script setup>
import { ref } from 'vue';

let joke = ref('')

import axios from 'axios'

const res = await axios.get("https://api.chucknorris.io/jokes/random")
        joke.value = res.data.value
        joke.value = data.value
    
</script>

<template>
    <div class="container content">
        <h1>{{ joke }}</h1>
    </div>
</template>