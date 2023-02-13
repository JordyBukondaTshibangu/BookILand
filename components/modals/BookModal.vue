<template>
  <div class="overview-overlay" @click="$emit('close')">
    <div
      class="book-modal relative w-[80%] md:w-[70%] lg:w-[50%] mx-auto min-h-[80vh] mt-[60rem] sm:mt-[38rem] lg:mt-[35rem] bg-black z-20 flex flex-col !overflow-y-auto"
    >
      <div class="w-full min-h-[400px]">
        <img
          src="../../assets/images/image-two.jpg"
          alt=""
          class="w-full min-h-[400px] max-h-[400px] object-cover opacity-[.7]"
        />
        <button
          @click="$emit('close')"
          class="absolute right-5 top-5 rounded-full w-[24px] h-[24px] bg-white"
        ></button>
      </div>
      <div
        class="flex flex-col gap-5 sm:gap-10 p-5 -translate-y-32 overflow-y-auto"
      >
        <h1 class="text-5xl sm:text-6xl heading-h1 text-white">Hello Header</h1>
        <div class="flex gap-5 items-center mt-10">
          <nuxt-link
            to="/"
            class="custom-btn--md"
            @click="handlePreview(index)"
          >
            Read Book
          </nuxt-link>
          <button
            class="custom-btn--md w-[30px] h-[30px] rounded-full"
            @click="handlePreview(index)"
          >
            -
          </button>
          <button
            class="custom-btn--md w-[30px] h-[30px] rounded-full"
            @click="handlePreview(index)"
          >
            +
          </button>
        </div>
        <div class="flex flex-col gap-3">
          <h3 class="heading-h3">Book description</h3>
          <p class="custom-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            inventore earum hic consequatur, error laboriosam facere deserunt
            voluptatibus adipisci autem quisquam fugiat saepe odit, debitis
            harum necessitatibus ut illo! Pariatur voluptatibus aut atque sed
            aperiam temporibus nam repudiandae odio est?
          </p>
        </div>
        <ul class="flex flex-col gap-3">
          <li class="flex items-center gap-5">
            <span class="custom-paragraph--small uppercase">Author:</span>
            <span class="custom-paragraph--small font-bold">Jordy Tshibss</span>
          </li>
          <li class="flex items-center gap-5">
            <span class="custom-paragraph--small uppercase">Pages:</span>
            <span class="custom-paragraph--small font-bold">243</span>
          </li>
          <li class="flex items-center gap-5">
            <span class="custom-paragraph--small uppercase">Genre:</span>
            <span class="custom-paragraph--small font-bold">Novel</span>
          </li>
        </ul>
        <h3 class="heading-h3">Similar books</h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 pb-10">
          <div
            v-for="(bookSimilar, index) in booksSimilar"
            :key="index"
            class="custom-movie-card h-[180px] flex flex-col"
          >
            <div class="h-full w-full">
              <img
                src="../../assets/images/image-one.jpg"
                :alt="bookSimilar.title"
                class="w-full h-full object-cover"
              />
              <div class="p-2 -translate-y-100">
                <button
                  class="custom-btn--md w-[30px] h-[30px] rounded-full translate-y-[-50px]"
                >
                  +
                </button>
              </div>
            </div>
            <span class="logo-letter-card-modal text-2xl font-bold text-green"
              >B</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";
import { booksSimilar } from "../../data";

defineEmits("close");
</script>

<style scoped>
.overview-overlay {
  position: fixed;
  background-color: rgba(0, 0, 0 0.1);
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
}
.movie-cover {
  background-image: url("../../assets/images/image-bg.jpg");
  object-fit: cover;
}
.custom-movie-card {
  background-image: url("../../assets/images/image-three.jpg");
  object-fit: cover;
  cursor: pointer;
}
.custom-movie-card:hover {
  transition: ease-in-out 0.4s;
  transform: scale(1.18);
}
.logo-letter-card {
  filter: drop-shadow(0px 50px 70px #01bf71);
}
.logo-letter-card-modal {
  position: absolute;
  top: 5px;
  left: 5px;
  z-index: 5;
  filter: drop-shadow(0px 50px 70px #01bf71);
}
</style>
