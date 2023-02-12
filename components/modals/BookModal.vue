<template>
  <div class="overview-overlay" @click="$emit('close')">
    <div
      class="relative w-1/3 mx-auto h-[85vh] bg-black border-green border-2 text-white"
    >
      <button
        @click="$emit('close')"
        class="rounded-full w-[14px] h-[14px] bg-white"
      ></button>
      <h1>Hello Header</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        inventore earum hic consequatur, error laboriosam facere deserunt
        voluptatibus adipisci autem quisquam fugiat saepe odit, debitis harum
        necessitatibus ut illo! Pariatur voluptatibus aut atque sed aperiam
        temporibus nam repudiandae odio est?
      </p>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";

defineEmits("close");
</script>

<style scoped>
.overview-overlay {
  position: fixed;
  background-color: rgba(0, 0, 0 0.1);
  top: 50px;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
}
</style>
