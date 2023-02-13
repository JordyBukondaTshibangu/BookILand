<template>
  <section class="movie-cover relative z-1 min-h-[80vh] flex items-center">
    <div
      class="w-full lg:w-1/3 flex flex-col gap-5 sm:gap-10 px-5 sm:px-10 lg:px-20"
    >
      <div class="flex items-center gap-3">
        <span class="logo-letter text-3xl sm:text-6xl font-bold text-green"
          >B</span
        >
        <span class="logo-letter text-sm font-bold text-green">Drama</span>
      </div>
      <h1 class="heading-h1 text-4xl sm:text-6xl">{{ book.title }}</h1>
      <p class="custom-paragraph--big">{{ book.description }}</p>
      <div class="flex items-center gap-5">
        <nuxt-link
          to="/books"
          class="custom-btn--md custom-btn--md lg:custom-btn--lg"
          >Read</nuxt-link
        >
        <button
          class="custom-btn--md custom-btn--md lg:custom-btn--lg"
          @click="handlePreview(index)"
        >
          Get info
        </button>
      </div>
    </div>
  </section>
  <section
    class="w-11/12 -translate-y-20 mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-y-10 sm:gap-x-5 pb-32"
  >
    <div
      v-for="(book, index) in books"
      :key="index"
      class="custom-movie-card flex flex-col"
      @click="handlePreview(index)"
    >
      <div class="h-full w-full">
        <img
          src="../../assets/images/image-one.jpg"
          :alt="book.title"
          class="w-full h-full object-cover"
        />
        <div
          class="p-5 -translate-y-100 flex gap-5 items-center justify-between"
        >
          <button
            class="custom-btn--md translate-y-[-100px]"
            @click="handlePreview(index)"
          >
            Read Book
          </button>
          <button
            class="custom-btn--md w-[30px] h-[30px] rounded-full translate-y-[-100px]"
            @click="handlePreview(index)"
          >
            +
          </button>
        </div>
      </div>
      <span class="logo-letter-card text-2xl font-bold text-green">B</span>
    </div>
  </section>

  <teleport to="body">
    <ModalsBookModal
      v-show="previewBook"
      @close="closePreview"
      :book="book"
    ></ModalsBookModal>
  </teleport>
</template>

<script setup>
import bookList from "../../data";
import { ref } from "vue";

definePageMeta({
  layout: "book",
});

const book = {
  title: "Breaking bad",
  thumbnail: "",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
  author: "Walter White",
  pages: 789,
  genre: "drama",
  link: "https://tailwindcss.com/",
  ratings: "5",
};
const books = ref(bookList);
const previewBook = ref(null);

const handlePreview = (index) => {
  previewBook.value = true;
};
const closePreview = () => {
  previewBook.value = false;
};
</script>

<style scoped>
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
.logo-letter-card {
  position: absolute;
  top: 5px;
  left: 5px;
  z-index: 5;
  filter: drop-shadow(0px 50px 70px #01bf71);
}
</style>

<!-- The Movie Cover will be an array -->
