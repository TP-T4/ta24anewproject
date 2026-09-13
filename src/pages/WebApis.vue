<script setup>
import { ref } from 'vue'
let pos
if ("geolocation" in navigator){
  navigator.geolocation.getCurrentPosition((position) => {
    pos = position
  })
}

</script>

<template>
  <div>
    <h1>{{pos}}</h1>
  </div>
</template>
