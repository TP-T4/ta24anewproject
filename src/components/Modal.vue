<script setup>
defineProps(['active']);
</script>

<template>
    <div :class="ModalActive ? 'modal is-active' : 'modal'">
      <div class="modal-background" @click="ModalActive=false"></div>
      <div class="modal-content">
        <p class="image is-4by3">
          <img src="https://bulma.io/assets/images/placeholders/1280x960.png" alt="">
        </p>
      </div>
      <button class="modal-close is-large" aria-label="close" @close="ModalActive=false"></button>
    </div>
</template>