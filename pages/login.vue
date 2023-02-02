<template>
  <section class="text-white mt-20">
    <form class="sm:w-1/2 mx-auto flex flex-col gap-5">
      <h1 class="heading-h1 text-white">Sign In</h1>
      <div class="input-group">
        <label for="email" class="custom-label">Email</label>
        <input type="email" class="custom-input" />
      </div>
      <div class="input-group">
        <label for="email" class="custom-label">Password</label>
        <input type="password" class="custom-input" />
      </div>
      <button class="custom-btn--md mt-8">Sign In</button>
      <p class="custom-paragraph mt-2">
        New to BookILand ?
        <nuxt-link to="/register" class="underline text-xs"
          >Register now</nuxt-link
        >
      </p>
    </form>
  </section>
</template>

<script setup></script>

<style scoped></style>
