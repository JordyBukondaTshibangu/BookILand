<template>
  <section class="text-white pt-32 sm:pt-40">
    <form class="sm:w-2/5 mx-auto flex flex-col gap-5">
      <h1 class="heading-h1 text-white">Sign In</h1>
      <div class="input-group">
        <label for="email" class="custom-label">Email</label>
        <input type="email" class="custom-input" />
      </div>
      <div class="input-group">
        <label for="email" class="custom-label">Password</label>
        <input type="password" class="custom-input" />
      </div>
      <button class="custom-btn--lg mt-8" @click="handleLogin">Sign In</button>
      <p class="custom-paragraph mt-2">
        New to BookILand ?
        <nuxt-link to="/register" class="underline text-xs"
          >Register now</nuxt-link
        >
      </p>
    </form>
  </section>
</template>

<script setup>
const router = useRouter();
const handleLogin = () => {
  router.push("/books");
};
</script>

<style scoped></style>
