<template>
  <div class="overlay absolute top-32 left-0 right-0 bottom-0">
    <div class="relative w-1/3 mx-auto h-[700px] bg-black z-2">
      <h1>Hello Header</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        inventore earum hic consequatur, error laboriosam facere deserunt
        voluptatibus adipisci autem quisquam fugiat saepe odit, debitis harum
        necessitatibus ut illo! Pariatur voluptatibus aut atque sed aperiam
        temporibus nam repudiandae odio est?
      </p>
      <button @click="handleCloseModal">Close</button>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";

const handleCloseModal = () => {};
</script>

<style scoped>
.overlay {
  background-color: rgba(41, 39, 39, 0.15);
}
</style>
