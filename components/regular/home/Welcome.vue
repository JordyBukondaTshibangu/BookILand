<template>
  <section
    ref="homeContainer"
    class="flex flex-col items-center gap-10 text-center py-56 min-h-[100vh]"
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
      class="text-center flex items-center justify-center gap-2"
    >
      <v-btn class="!w-[190px] !h-[50px] !bg-[#12b488] px-3 py-4 !text-white">
        <span>Get Started </span>
        <i class="material-icons ml-3 text-[17px]">send</i>
      </v-btn>
      <i class="material-icons mr-3 text-[20px] text-black">navigate_next</i>
    </nuxt-link>
    <span
      class="mt-10 uppercase text-[10px] tracking-widest font-bold text-white"
      >you can now read anytime and anywhere.</span
    >
  </section>
</template>
