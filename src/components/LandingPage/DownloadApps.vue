<template>
  <div class="">
    <div class="container mb-20 md:gap-x-20  block md:flex justify-between">
      <div class="lg:w-screen max-w-lg lg:mr-24 ">
        <img alt="logo" src="../../assets/providers-illustration.png" />
      </div>

      <div class="flex flex-col lg:mr-32 justify-center">
        <h3 class="text-3xl font-bold">Leading healthcare providers</h3>
        <div class="  mt-7">
          <img src="../../assets/Rectangle.png" />
        </div>
        <p class=" md:my-8 my-6">
          Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride
          in the solutions we deliver
        </p>
        <div class="">
          <button class="btn">
            Learn more
          </button>
        </div>
      </div>
    </div>

    <!--    ELEMENT SECTION-->
    <div class="hidden md:-mt-12 md:flex md:justify-end">
      <img src="../../assets/element.png" />
    </div>
<!--    NEXT SECTION-->
    <div>
      <div class="container mt-8 mb-20 md:gap-x-20 block md:flex justify-between">
        <div>
          <div class="flex flex-col justify-center">
            <h3 class="text-3xl font-bold">Download our mobile apps</h3>
            <div class=" mt-7">
              <img src="../../assets/Rectangle.png" />
            </div>
            <p class="lg:pr-32 md:my-8 my-6">
              Our dedicated patient engagement app and
              web portal allow you to access information instantaneously (no tedeous form, long calls,
              or administrative hassle) and securely
            </p>
            <div >
              <button class="btn flex">
                Download
                <svg class="mt-1 ml-2" width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.81951 1.05554L4.81951 12.6308L2.27646 10.0877C1.92569 9.73698 1.39954 9.73698 1.04878 10.0877C0.698014 10.4385 0.698014 10.9647 1.04878 11.3154L5.08258 15.3492C5.43335 15.7 5.95949 15.7 6.31026 15.3492L10.3441 11.3154C10.6948 10.9647 10.6948 10.4385 10.3441 10.0877C9.9933 9.73698 9.46715 9.73698 9.11638 10.0877L6.57333 12.6308L6.57333 1.05554C6.57333 0.617083 6.22257 0.178627 5.69642 0.178627C5.17027 0.178627 4.81951 0.617083 4.81951 1.05554Z" fill="#458FF6"/>
                </svg>

              </button>
            </div>
          </div>
        </div>

        <div class="lg:w-screen max-w-lg">
          <img alt="logo" src="../../assets/downloadApps-illustration.png" />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "DownloadApps",
};
</script>

<style scoped></style>
