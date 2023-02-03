<template>
  <section class="min-h-[100vh] pt-[250px]">
    <ui-the-intro></ui-the-intro>
  </section>
  <section
    class="flex flex-col items-center gap-10 text-center py-32 min-h-[100vh]"
  >
    <span class="text-[12px] tracking-wider font-bold text-white"
      >Welcome to BookILand</span
    >
    <h1 class="heading-h1">Unlimited movies, TV shows, and more.</h1>
    <h2 class="text-[13px] leading-[25px] text-white mt-3">
      Ready to watch? Enter your email to create or restart your membership.
    </h2>
    <nuxt-link
      to="/register"
      class="text-center w-[180px] custom-btn--md flex items-center justify-center gap-2"
    >
      <span class="text-sm font-bold leading-7 text-black">Get Started</span>
      <i class="material-icons mr-3 text-[20px] text-black">navigate_next</i>
    </nuxt-link>
    <span
      class="mt-10 uppercase text-[10px] tracking-widest font-bold text-white"
      >you can now read anytime and anywhere.</span
    >
  </section>
  <section class="flex flex-col sm:flex-row gap-36 sm:flex-wrap mb-20">
    <div
      class="flex flex-col sm:flex-row gap-8 justify-between items-center px-10"
    >
      <img
        src="../assets/images/image-one.jpg"
        alt="book-in-nature"
        class="custom-img-container sm:w-1/2"
      />
      <div class="flex flex-col text-center sm:text-start gap-5 sm:w-1/2">
        <h2 class="heading-h1 sm:heading-h2">Lorem ipsum dolor sit amet.</h2>
        <p class="custom-paragraph">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
          est, harum id ad c um iste perferendis voluptas velit recusandae ea.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim,
          temporibus?
        </p>
      </div>
    </div>
    <div
      class="flex flex-col sm:flex-row gap-8 justify-between items-center px-10"
    >
      <img
        src="../assets/images/image-two.jpg"
        alt="libray-image"
        class="custom-img-container sm:w-1/2"
      />
      <div
        class="flex flex-col text-center sm:text-start gap-5 sm:w-1/2 sm:-order-1"
      >
        <h2 class="heading-h1 sm:heading-h2">Lorem ipsum dolor sit amet.</h2>
        <p class="custom-paragraph">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
          est, harum id ad c um iste perferendis voluptas velit recusandae ea.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim,
          temporibus?
        </p>
      </div>
    </div>
    <div
      class="flex flex-col sm:flex-row gap-8 justify-between items-center px-10"
    >
      <img
        src="../assets/images/image-three.jpg"
        alt="book-lists"
        class="custom-img-container sm:h-[400px] lg:h-[500px] sm:w-1/2"
      />
      <div class="flex flex-col text-center sm:text-start gap-5 sm:w-1/2">
        <h2 class="heading-h1 sm:heading-h2">Lorem ipsum dolor sit amet.</h2>
        <p class="custom-paragraph">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
          est, harum id ad c um iste perferendis voluptas velit recusandae ea.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim,
          temporibus?
        </p>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped></style>
