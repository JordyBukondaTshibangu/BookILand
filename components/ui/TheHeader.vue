<template>
  <header
    ref="navigationBar"
    class="w-full fixed h-[90px] py-4 z-10"
    :class="toggleClass"
  >
    <nav class="flex justify-between items-center px-5 lg:px-20 py-5">
      <div class="text-3xl font-bold text-green">
        <nuxt-link to="/">BookILand</nuxt-link>
      </div>
      <ul
        class="sm:w-1/2 hidden sm:flex justify-evenly items-center list-none text-white"
      >
        <li class="text-sm font-bold leading-7">
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li class="text-sm font-bold leading-7">
          <nuxt-link to="/about-us">About</nuxt-link>
        </li>
        <li class="text-sm font-bold leading-7">
          <nuxt-link to="/contact-us">Contact us</nuxt-link>
        </li>
        <li class="text-sm font-bold leading-7">
          <nuxt-link to="/">Settings</nuxt-link>
        </li>
      </ul>
      <nuxt-link to="/login" class="custom-btn--small sm:custom-btn--md"
        >Sign In
      </nuxt-link>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted } from "vue";

let navigationBar = ref(null);
let toggleClass = ref("bg-transparent");

onMounted(() => {
  console.log(navigationBar);
  window.onscroll = function () {
    if (navigationBar.scrollTop >= 600) {
      console.log("first");
      toggleClass.value = "bg-transparent";
    } else {
      toggleClass.value = "bg-black shadow-sm";
    }
  };
});
</script>

<style scoped></style>
