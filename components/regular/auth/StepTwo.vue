<template>
  <div class="flex flex-col gap-5">
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
        quaerat? Fugit mollitia explicabo debitis ad fuga? Eius libero est sequi
        asperiores tempora quidem, quod laboriosam exercitationem.
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
</template>

<script setup>
const planIndex = ref(1);
const choosePlan = (planName) => {
  if (planName === "basic") {
    planIndex.value = 1;
  } else if (planName === "geek") {
    planIndex.value = 2;
  }
};
</script>

<style lang="scss" scoped></style>
