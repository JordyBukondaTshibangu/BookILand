<template>
  <section class="movie-cover relative z-1 pt-5 min-h-[80vh]">
    <div class="flex items-center gap-5 bg-green p-2 rounded-sm">
      <span class="text-white text-sm">Filter</span>
      <i class="material-icons mr-1 text-[14px] text-white">arrow_back</i>
    </div>
  </section>
  <section
    class="relative z-3 w-11/12 -translate-y-32 mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 pb-32"
  >
    <div
      v-for="(book, index) in books"
      key="index"
      class="custom-movie-card flex flex-col p-3"
    >
      <span class="logo-letter text-2xl font-bold text-green">B</span>
      <div class="mt-auto">
        <h1 class="text-white text-xl font-bold">{{ book.title }}</h1>
      </div>
    </div>
  </section>
</template>

<script setup>
import bookList from "../../data";
import { ref } from "vue";

const books = ref(bookList);
</script>

<style scoped>
.movie-cover {
  background-image: url("../../assets/images/image-bg.jpg");
  object-fit: cover;
}
.custom-movie-card {
  background-image: url("../../assets/images/image-three.jpg");
  object-fit: cover;
}
.logo-letter {
  filter: drop-shadow(0px 50px 70px #01bf71);
}
</style>

<!-- The Movie Cover will be an array -->
