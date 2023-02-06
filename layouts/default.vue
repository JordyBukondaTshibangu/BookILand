<template>
  <ui-the-header></ui-the-header>
  <main class="bg-black min-h-[100vh]">
    <div class="py-10 px-5 sm:py-20 sm:px-5 pt-32 sm:pt-40">
      <slot></slot>
    </div>
  </main>
  <ui-the-footer></ui-the-footer>
</template>

<script setup></script>

<style scoped></style>
