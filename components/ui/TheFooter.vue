<template>
  <footer class="bg-black p-5 flex flex-col gap-10 text-white py-10">
    <section class="container mx-auto max-w-7xl">
          <div class="flex gap-5 items-center">
      <span class="text-[18px]">
        <i class="fa-brands fa-facebook-f"></i>
      </span>
      <span class="text-[18px]">
        <i class="fa-brands fa-instagram"></i>
      </span>
      <span class="text-[18px]">
        <i class="fa-brands fa-youtube"></i>
      </span>
    </div>
    <ul class="grid grid-cols-2 justify-between items-center gap-y-5 gap-x-3">
      <li class="text-sm leading-7">
        <nuxt-link to="/terms-of-use">Terms of Use</nuxt-link>
      </li>
      <li class="text-sm leading-7">
        <nuxt-link to="/contact-us">Contact Us</nuxt-link>
      </li>
      <li class="text-sm leading-7">
        <nuxt-link to="/blogs">Blogs</nuxt-link>
      </li>
      <li class="text-sm leading-7">
        <nuxt-link to="/policy">Privacy</nuxt-link>
      </li>
            <li class="text-sm leading-7">
        <nuxt-link to="/policy">Policy</nuxt-link>
      </li>
      <li class="text-sm leading-7">
        <nuxt-link to="/about-us">About Us</nuxt-link>
      </li>
    </ul>
    <p class="paragrap mt-10"> &#169 2023 - BookILand, Inc</p>
    </section>
  </footer>
</template>

<script setup></script>

<style scoped></style>