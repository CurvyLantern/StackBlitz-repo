<script setup>
import { ref } from 'vue';

const customAttr = ref('data-drag')

function onDragStart(e){
  e.dataTransfer.dropEffect = 'copy'
  e.dataTransfer.effectAllowed = 'copy'
  const identity = e.target.dataset
  const el = e.target
  el.removeAttribute(customAttr.value)
  customAttr.value = 'data-drag-' + `${Math.random()}`.slice(2,-1)
  el.setAttribute(customAttr.value, '')
  e.dataTransfer.setData('itemID', customAttr.value)
}

function onDrop(e) {
  const item = e.dataTransfer.getData('itemID')
  console.log(item)
  const el = document.querySelector(`[${item}]`)
  console.log(el)
  const target = e.target
  target.append(el)
}
</script>

<template>
<div>
  <div class="drag_container"
  @dragenter.prevent
    @dragover.prevent
    @drop="onDrop"
  >
    <div class="drag_item"
    @dragstart="onDragStart"
    draggable="true"
    ></div>
  </div>
  <div class="drop_zone"
    @dragenter.prevent
    @dragover.prevent
    @drop="onDrop"
  ></div>
</div>
</template>

<style scoped>
  .drag_container {
    width: 15rem;
    aspect-ratio: 16/9;
    background-color: #333;
  }

  .drop_zone {
    width: 20rem;
    aspect-ratio: 16/9;
    border: 3px dashed green;
    border-radius: 1rem;

  }

  .drag_item {
    width: 100%;
    height: 2rem;
    background-color: red;
  }

</style>
