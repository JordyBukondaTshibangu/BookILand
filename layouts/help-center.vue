<template>
  <header class="bg-black shadow-sm py-4">
    <nav
      class="container mx-auto max-w-7xl flex justify-between items-center px-2 py-5"
    >
      <div class="text-3xl font-bold text-green">
        <nuxt-link to="/" class="text-7xl font-bold p-5">B</nuxt-link>
      </div>
      <div class="flex gap-2 -mt-2">
        <nuxt-link to="/register" class="custom-btn--small text-xs"
          >Join BookILand
        </nuxt-link>
        <nuxt-link to="/login" class="custom-btn--small text-xs"
          >Sign In
        </nuxt-link>
      </div>
    </nav>
  </header>
  <main class="bg-white min-h-[90vh]">
    <div class="container mx-auto sm:max-w-7xl py-2 px-5 sm:px-5 pb-20 sm:py-0">
      <slot></slot>
    </div>
  </main>
  <ui-the-footer></ui-the-footer>
</template>

<script setup></script>

<style scoped></style>
