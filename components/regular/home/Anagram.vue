<template>
  <section
    ref="container"
    class="w-full sm:w-3/5 mx-auto flex justify-between sm:gap-1 pt-96 md:pt-72 min-h-[100vh]"
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
</template>
<script setup>
import { gsap } from "gsap";

// const audio = new Audio(require("~/assets/sound/Bookilandsound.mp3"));

const play = (frequency = 300, duration = 1e3) => {
  const context = new AudioContext();
  const gainNode = context.createGain();
  const oscillator = context.createOscillator();
  oscillator.frequency.value = frequency;
  oscillator.connect(gainNode);
  gainNode.connect(context.destination);
  oscillator.start(0);
  setTimeout(() => oscillator.stop(), duration);
};

const container = ref(null);
const displayContent = ref(true);
const homeContainer = ref(null);

onMounted(() => {
  gsap.from(container.value, {
    duration: "4",
    y: "-80%",
    ease: "bounce",
  });

  // audio.play();
  // play(800, 1e3);
  // if (!res.data.success) {
  //   throw new Error(res.data.message);
  // }

  setTimeout(() => {
    homeContainer.value?.scrollIntoView({ behavior: "smooth" });
  }, 10000);
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
