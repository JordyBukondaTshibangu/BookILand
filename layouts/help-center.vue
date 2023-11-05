<template>
  <header class="bg-black shadow-sm py-4">
    <nav class="max-w-7xl flex justify-between items-center px-2 py-5">
      <div class="text-3xl font-bold text-green">
        <nuxt-link to="/" class="text-7xl font-bold p-5">B</nuxt-link>
      </div>
      <div class="flex gap-2 -mt-2">
        <nuxt-link to="/register">
          <v-btn
            class="!w-[160px] !h-[48px] !flex !items-center !justify-center !bg-[#12b488] px-3 py-4 !text-white"
          >
            Join BookILand
          </v-btn>
        </nuxt-link>
        <nuxt-link to="/login">
          <v-btn
            class="!w-[160px] !h-[48px] !flex !items-center !justify-center !bg-[#12b488] px-3 py-4 !text-white"
          >
            Sign In
          </v-btn>
        </nuxt-link>
      </div>
    </nav>
  </header>
  <main class="bg-white min-h-[90vh]">
    <div class="sm:max-w-7xl mx-auto py-2 px-5 sm:px-5 pb-20 sm:py-6">
      <slot></slot>
    </div>
  </main>
  <ui-the-footer></ui-the-footer>
</template>

<script setup></script>

<style scoped></style>
