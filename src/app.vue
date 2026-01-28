<script setup>
import { ref } from 'vue';

let ModalActive = ref(false);


</script>
 
<template>
  <div class="container">
    <button class="button is-primary" @click="ModalActive=true">Open Modal</button>
    <div :class="ModalActive ? 'modal is-active' : 'modal'">
      <div class="modal-background" @click="ModalActive=false"></div>
      <div class="modal-content">
        <p class="image is-4by3">
          <img src="https://bulma.io/assets/images/placeholders/1280x960.png" alt="">
        </p>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="ModalActive=false"></button>
    </div>
  </div>
</template>

<style></style>