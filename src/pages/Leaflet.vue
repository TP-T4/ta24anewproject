<script setup>
import { ref } from 'vue'
import LeafletMap from '../components/LeafletMap.vue'

let center = ref([59.42695235928513, 24.74360317137484])
let zoom = ref(18)
let marker = ref([59.42695235928513, 24.74360317137484])

</script>

<template>
    <button class="is-primary button" @click="
        center = [31.945826, 35.201027]; 
        marker = [31.945826, 35.201027];">  
        Go to Israel
    </button>
    <LeafletMap :center="center" :zoom="zoom" :marker="marker"></LeafletMap>
</template>