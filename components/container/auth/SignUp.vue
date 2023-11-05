<template>
  <section class="text-white pt-32 sm:pt-40">
    <div class="flex flex-col gap-5">
      <RegularAuthStepOne
        v-show="currentIndex === 1"
        :handleNextStep="handleNextStep"
      ></RegularAuthStepOne>
      <RegularAuthStepTwo v-show="currentIndex === 2"></RegularAuthStepTwo>
    </div>
  </section>
</template>

<script setup>
const currentIndex = ref(1);

const handleNextStep = () => {
  currentIndex.value += 1;
};
</script>
