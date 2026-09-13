<script setup>
import { computed, ref } from 'vue';
import axios from 'axios';
import CharacterCard from '../components/CharacterCard.vue'

let characters = ref([])
let pagination = ref({
    count: 0,
    pages: 0,
    next: null,
    prev: null
})

let url = "https://rickandmortyapi.com/api/character"
let current = ref(1)

await getCharacters(current.value)

async function getCharacters(page) {
    let res = await axios.get(url, {
        params: {
            page: page
        }
    })
    current.value = page
    characters.value = res.data.results
    pagination.value = res.data.info
}

async function next() {
    if (pagination.value.next) {
        getCharacters(current.value + 1)
    }
}

async function prev() {
    if (pagination.value.prev) {
        getCharacters(current.value - 1)
    }
}

let pages = computed(() => {
    let pages = []

    for (let i = 1; i <= 3; i++) {
        pages[i] = i
    }

    if (current.value > 6) {
        pages.push('...')
    }
    for (let i = current.value -2; i <= current.value + 2 && i <= pagination.value.pages; i++) {
        pages[i] = i
    }

    if (current.value < pagination.value.pages - 2) {
        pages.push('...')
    }
    for (let i = pagination.value.pages - 3; i <= pagination.value.pages; i++) {
        pages[i] = i
    }

    return pages.filter(p => p)
})

</script>

<template>
    <div class="container">
        <nav class="pagination is-centered" role="navigation">
            <button 
                class="button 
                is-primary is-centered" 
                @click="prev" 
                :disabled="!pagination.prev"
                >
                Previous
            </button>
            
            <ul class="pagination-list">
                <li v-for="page in pages" :key="page">
                    <span 
                        v-if="page === '...'" 
                        class="pagination-ellipsis"
                        >
                        &hellip;
                    </span>
                    <button 
                        v-else-if="page === current" 
                        class="pagination-link is-current" 
                        aria-label="Goto page {{ page }}" 
                        aria-current="page"
                        >
                        {{ page }}
                    </button>
                    <button 
                        v-else 
                        class="pagination-link" 
                        @click="getCharacters(page)" 
                        aria-label="Goto page {{ page }}"
                        >
                        {{ page }}
                    </button>
                </li>
            </ul>

            <button 
                class="button is-primary is-centered" 
                @click="next" 
                :disabled="!pagination.next"
                >
                Next
            </button>
        </nav>
        <div class="columns is-multiline">
            <div class="column is-3" v-for="character in characters">
                <CharacterCard :character="character" />
            </div>
        </div>
    </div>
</template>