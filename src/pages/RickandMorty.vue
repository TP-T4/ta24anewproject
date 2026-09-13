<script setup>
import { ref } from 'vue';
import axios from 'axios';
import CharacterCard from '../components/CharacterCard.vue'

let characters = ref([])
let pagination = ref({
    count: 0,
    pages: 0,
    next: null,
    prev: null
})

await getCharacters("https://rickandmortyapi.com/api/character")

async function getCharacters(url) {
    let res = await axios.get(url)
    characters.value = res.data.results
    pagination.value = res.data.info
}

async function next() {
    if (pagination.value.next) {
        getCharacters(pagination.value.next)
    }
}

async function prev() {
    if (pagination.value.prev) {
        getCharacters(pagination.value.prev)
    }
}

</script>

<template>
    <div class="container">
        <button class="button is-primary is-centered" @click="prev" :disabled="!pagination.prev">Previous</button>
        <button class="button is-primary is-centered" @click="next" :disabled="!pagination.next">Next</button>
        <div class="columns is-multiline">
            <div class="column is-3" v-for="character in characters">
                <CharacterCard :character="character" />
            </div>
        </div>
    </div>
</template>