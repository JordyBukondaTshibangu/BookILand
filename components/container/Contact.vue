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
      <v-btn class="!w-[180px] !h-[50px] !bg-[#12b488] px-3 py-4 !text-white">
        <span>Email us</span>
        <i class="material-icons ml-3 text-[17px]">send</i>
      </v-btn>

      <v-btn class="!w-[180px] !h-[50px] !bg-[#12b488] px-3 py-4 !text-white">
        <span>Give us a call</span>
        <i class="material-icons ml-3 text-[17px]">call</i>
      </v-btn>
    </div>
  </section>
</template>
