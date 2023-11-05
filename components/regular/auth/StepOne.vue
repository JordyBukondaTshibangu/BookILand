<template>
  <v-form @submit.prevent class="flex flex-col gap-5">
    <h1 class="heading-h1 text-white">Sign up</h1>
    <p class="heading-2">Create a password to start your membership</p>
    <span class="uppercase text-xs p-1">Step 1 of 2 </span>
    <div>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="First name"
      ></v-text-field>
    </div>
    <div>
      <v-text-field
        v-model="password"
        :rules="passwordRules"
        label="Password"
      ></v-text-field>
    </div>
    <div>
      <v-text-field
        v-model="password"
        :rules="passwordRules"
        label="Confirm password"
      ></v-text-field>
    </div>
    <v-btn class="!bg-[#12b488] !text-white mt-8" @click="handleNextStep">
      Next
    </v-btn>
    <p class="custom-paragraph mt-2">
      Already a BookILandLord ?
      <nuxt-link to="/login" class="underline text-xs">Sign In</nuxt-link>
    </p>
  </v-form>
</template>

<script setup>
defineProps({
  handleNextStep: Function,
});

const email = ref();
const emailRules = ref([
  (value) => {
    if (value) return true;

    return "You must enter an email address.";
  },
]);

const password = ref();
const passwordRules = ref([
  (value) => {
    if (value) return true;

    return "You must enter a valid password.";
  },
]);
</script>
