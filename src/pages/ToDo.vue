<script setup>
import { ref, computed } from 'vue'
import ItemList from './ItemList.vue'
 
let id = 1
 
const items = ref([
  { id: id++, text: 'Sai', isDone: true },
  { id: id++, text: 'Piim', isDone: false },
  { id: id++, text: 'Viin', isDone: true },
  { id: id++, text: 'Õlu', isDone: false }
])
 
const newItem = ref('')
 
const doneItems = computed(() =>
  items.value.filter(item => item.isDone)
)
 
const toDoItems = computed(() =>
  items.value.filter(item => !item.isDone)
)
 
function add() {
  const text = newItem.value.trim()
  if (!text) return
 
  items.value.push({
    id: id++,
    text,
    isDone: false
  })
 
  newItem.value = ''
}
</script>
 
<template>
  <div class="container">
    <div class="field has-addons mt-2">
      <div class="control is-expanded">
        <input
          class="input"
          type="text"
          v-model="newItem"
          @keypress.enter="add"
        />
      </div>
 
      <div class="control">
        <button class="button is-info" @click="add">
          Add Item
        </button>
      </div>
    </div>
    <div class="content">
        <ItemList :items="items" title="All Items"></ItemList>
        <ItemList :items="doneItems" title="Done Items"></ItemList>
        <ItemList :items="toDoItems" title="Todo Items"></ItemList>
    </div>
  </div>
</template>
 
<style>
</style>
 
 