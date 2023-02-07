<template>
  <section class="text-white pt-32 sm:pt-40">
    <form class="sm:w-2/5 mx-auto flex flex-col gap-5">
      <div v-show="currentIndex === 1" class="flex flex-col gap-5">
        <h1 class="heading-h1 text-white">Sign up</h1>
        <p class="heading-2">Create a password to start your membership</p>
        <span class="uppercase text-xs p-1">Step 1 of 2 </span>
        <div class="input-group">
          <label for="email" class="custom-label">Email</label>
          <input type="email" class="custom-input" />
        </div>
        <div class="input-group">
          <label for="email" class="custom-label">Password</label>
          <input type="password" class="custom-input" />
        </div>
        <button class="custom-btn--lg mt-8" @click="handleNextStep">
          Next
        </button>
        <p class="custom-paragraph mt-2">
          Already a BookILandLord ?
          <nuxt-link to="/login" class="underline text-xs">Sign In</nuxt-link>
        </p>
      </div>
      <div v-show="currentIndex === 2" class="flex flex-col gap-5">
        <h1 class="heading-h1 text-white">Sign up</h1>
        <p class="heading-2">Choose your plan</p>
        <span class="uppercase text-xs p-1">Step 2 of 2 </span>
        <div
          class="flex justify-between items-center border-green border-2 rounded-xl"
        >
          <span
            class="w-1/2 text-center cursor-pointer leading-7 py-2 tracking-wider"
            @click="choosePlan('basic')"
            >Basic</span
          >
          |
          <span
            class="w-1/2 text-center cursor-pointer leading-7 py-2 tracking-wider"
            @click="choosePlan('geek')"
            >Geek</span
          >
        </div>
        <div v-show="planIndex === 1" class="flex flex-col gap-2 p-5">
          <p class="custom-paragraph h-[130px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            eligendi, rerum qui aperiam soluta quam hic enim est. Cupiditate,
            voluptas voluptas?
          </p>
          <div class="flex ml-auto gap-3 mt-4">
            <span class="mt">Price : </span>
            <span class="font-semilbold">R50</span>
          </div>
        </div>
        <div v-show="planIndex === 2" class="flex flex-col gap-2 p-5">
          <p class="custom-paragraph h-[130px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            eligendi, rerum qui aperiam soluta quam hic enim est. Cupiditate,
            voluptas voluptas? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Eum officiis repudiandae earum id
            quaerat? Fugit mollitia explicabo debitis ad fuga? Eius libero est
            sequi asperiores tempora quidem, quod laboriosam exercitationem.
          </p>
          <div class="flex ml-auto gap-3 mt-4">
            <span class="mt">Price : </span>
            <span class="font-semilbold">R80</span>
          </div>
        </div>
        <div class="">
          <button class="custom-btn--lg mt-8">Proceed</button>
        </div>
      </div>
    </form>
  </section>
</template>

<script setup>
import { ref } from "vue";

const currentIndex = ref(1);
const planIndex = ref(1);

const handleNextStep = () => {
  currentIndex.value += 1;
};

const choosePlan = (planName) => {
  if (planName === "basic") {
    planIndex.value = 1;
  } else if (planName === "geek") {
    planIndex.value = 2;
  }
};
</script>

<style scoped></style>
