<script setup>
import { ref } from 'vue';
import Modal from './components/Modal.vue';

let ModalActive = ref(false);


</script>
 
<template>
  <div class="container">
    <button class="button is-primary" @click="ModalActive=true">Open Modal</button>
    
    <Modal :active="ModalActive"></Modal>
  </div>
</template>

<style></style>