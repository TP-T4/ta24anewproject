<script setup>
import * as L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { onMounted, ref, useTemplateRef, watch } from 'vue'

const {center, zoom, marker} = defineProps({
    center: {
        type: Array,
        required: true
    },
    zoom: {
        type: Number,
        required: true
    },
    marker: {
        type: Array,
        required: false
    }
})

let map = null
let gps = null
onMounted(() => {
    map = L.map('map').setView(center, zoom);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    gps = L.marker(marker).addTo(map)
})
watch(() => center, (newValue, oldValue) => {
    console.log('Center changed from', oldValue, 'to', newValue)
    map.flyTo(newValue)
})

watch(() => marker, (newValue) => {
    gps.setLatLng(newValue).update()
})
</script>

<template>
    <div id="map"></div>
</template>

<style>
#map
{
    height: 1050px;
}
</style>