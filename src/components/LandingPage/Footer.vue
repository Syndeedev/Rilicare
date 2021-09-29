<template>
  <div class="">
    <div class="hidden md:flex md:justify-end">
      <img src="../../assets/footer-element-1.png" />
    </div>
    <div class="footer-img flex">
      <div class="w-20 flex-col items-end">
        <img src="../../assets/footer-element-2.png" />
      </div>
      <div class="my-20">
        <img src="../../assets/logo-white.png" alt="logo" />
        <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online
          for everyone</p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer-img{
  background: url("../../assets/footer-rect-bg.png") no-repeat;
}
</style>
