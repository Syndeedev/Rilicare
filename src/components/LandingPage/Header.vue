<template>
  <div class="bg-white-700">
    <div class="my-10 md:flex container justify-between">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </div>
      <div class="md:flex-1">
        <img alt="logo" src="../../assets/logo-black.png" />
      </div>

      <div class="md:block hidden items-center justify-center space-x-7">
        <router-link to="#"> Home </router-link>
        <router-link to="#"> Find a doctor </router-link>
        <router-link to="#"> Apps </router-link>
        <router-link to="#"> Testimonials </router-link>
        <router-link to="#"> Abouts us </router-link>
      </div>
    </div>
    <div class="hidden md:block">
      <img src="../../assets/element.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {},
};
</script>

<style scoped></style>
