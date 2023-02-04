<template>
  <section
    ref="container"
    class="w-full sm:w-4/5 mx-auto flex justify-between sm:gap-2 pt-96 md:pt-64 min-h-[100vh]"
    :class="!displayContent && 'hide'"
  >
    <span
      class="logo-letter text-5xl sm:text-7xl lg:text-[7.5rem] font-bold text-green"
      >B</span
    >
    <span
      class="logo-letter text-5xl sm:text-7xl lg:text-[7.5rem] font-bold text-green"
      >O</span
    >
    <span
      class="logo-letter text-5xl sm:text-7xl lg:text-[7.5rem] font-bold text-green"
      >O</span
    >
    <span
      class="logo-letter text-5xl sm:text-7xl lg:text-[7.5rem] font-bold text-green"
      >K</span
    >
    <span
      class="logo-letter text-5xl sm:text-7xl lg:text-[7.5rem] font-bold text-green"
      >I</span
    >
    <span
      class="logo-letter text-5xl sm:text-7xl lg:text-[7.5rem] font-bold text-green"
      >L</span
    >
    <span
      class="logo-letter text-5xl sm:text-7xl lg:text-[7.5rem] font-bold text-green"
      >A</span
    >
    <span
      class="logo-letter text-5xl sm:text-7xl lg:text-[7.5rem] font-bold text-green"
      >N</span
    >
    <span
      class="logo-letter text-5xl sm:text-7xl lg:text-[7.5rem] font-bold text-green"
      >D</span
    >
  </section>
  <section
    ref="homeContainer"
    class="flex flex-col items-center gap-10 text-center py-48 min-h-[100vh]"
  >
    <span class="text-[12px] tracking-wider font-bold text-white"
      >Welcome to BookILand</span
    >
    <h1 class="heading-h1">Unlimited books, novels, and more.</h1>
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

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";

const container = ref(null);
const displayContent = ref(true);
const homeContainer = ref(null);

onMounted(() => {
  gsap.from(container.value, {
    duration: "4",
    y: "-80%",
    ease: "bounce",
  });

  setTimeout(() => {
    homeContainer.value?.scrollIntoView({ behavior: "smooth" });
  }, 5000);
});
setTimeout(() => {
  displayContent.value = false;
}, 6000);
</script>

<style scoped>
.logo-letter {
  filter: drop-shadow(0px 50px 70px #01bf71);
}
@keyframes slideaway {
  from {
    display: block;
  }
  to {
    transform: translateY(40px);
    opacity: 0;
  }
}
.hide {
  transition: opacity 200ms, display 200ms;
  display: none;
  opacity: 0;
}
</style>
