<template>
  <section class="flex flex-col gap-10">
    <div class="mt-5">
      <nuxt-link to="/" class="flex items-center">
        <span class="flex items-center justify-center">
          <i class="material-icons mr-1 text-[17px]">arrow_back</i>
        </span>
        <span class="text-sm font-bold leading-7 text-black">Back to home</span>
      </nuxt-link>
    </div>
    <h1 class="heading-h1 text-black">Want to get in touch with BookILand ?</h1>
    <p class="custom-paragraph text-black">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio veniam
      expedita vero nobis perferendis. Accusamus amet fugit rerum alias libero
      optio nemo nulla quas! Quia sed laudaiam ex possimus! Quaerat,
      necessitatibus odio? Quisquam quo quia numquam nulla libero laboriosam,
      doloremque repudiandae voluptatum eum nulla sunt voluptate quos? Placeat
    </p>
    <div class="flex gap-4">
      <button
        class="w-[120px] py-4 custom-btn--small flex justify-center items-center"
      >
        <span>Email us</span>
        <i class="material-icons ml-3 text-[17px]">send</i>
      </button>
      <button
        class="w-[150px] py-4 custom-btn--small flex justify-center items-center"
      >
        <span>Give us a call</span>
        <i class="material-icons ml-3 text-[17px]">call</i>
      </button>
    </div>
  </section>
</template>

<script setup>
definePageMeta({
  layout: "help-center",
});
</script>

<style scoped></style>
