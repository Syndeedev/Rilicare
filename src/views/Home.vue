<template>
  <div class="home container align-items: center">
    <div class="">
      <div class="btn bg-yellow-600">ye o</div>
      <img alt="Vue logo" src="../assets/logo-black.png" />
    </div>

    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
<style>

</style>
