<template>
  <header>
    <nav>
      <nuxt-link to="/">BookILand</nuxt-link>
      <ul>
        <li>
          <nuxt-link to="/signup">Sign In</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <ul>
      <li></li>
    </ul>
  </footer>
</template>

<script setup></script>

<style scoped></style>
