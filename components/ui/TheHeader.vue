<template>
  <header class="w-full fixed bg-black shadow-sm h-[90px] py-4 z-10">
    <nav class="flex justify-between items-center px-5 lg:px-20 py-5">
      <div class="text-3xl font-bold text-green">
        <nuxt-link to="/">BookILand</nuxt-link>
      </div>
      <nuxt-link to="/login" class="custom-btn--small sm:custom-btn--md"
        >Sign In
      </nuxt-link>
    </nav>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped></style>
