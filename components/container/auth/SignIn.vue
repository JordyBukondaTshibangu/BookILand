<template>
  <section class="text-white pt-32 sm:pt-40">
    <v-form @submit.prevent class="flex flex-col gap-8">
      <h1 class="heading-h1 text-white">Sign In</h1>
      <div>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="Email"
        ></v-text-field>
      </div>
      <div>
        <v-text-field
          v-model="password"
          :rules="passwordRules"
          label="Password"
        ></v-text-field>
      </div>
      <v-btn class="!bg-[#12b488] !text-white mt-8">Sign In</v-btn>
      <p class="text-sm mt-2">
        New to BookILand ?
        <nuxt-link to="/register" class="underline text-sm"
          >Register now</nuxt-link
        >
      </p>
    </v-form>
  </section>
</template>

<script setup>
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
