<template>
  <div>
    <Header />
    <Hero />
    <Services/>
    <DownloadApps/>
    <ArticlesPreview/>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/LandingPage/Header";
import Hero from "@/components/LandingPage/Hero";
import Services from "@/components/LandingPage/Services";
import DownloadApps from "@/components/LandingPage/DownloadApps";
import ArticlesPreview from "@/components/LandingPage/ArticlesPreview";
import Footer from "@/components/LandingPage/Footer";
export default {
  name: "LandingPageView",
  components: { Footer, ArticlesPreview, DownloadApps, Services, Hero, Header },
};
</script>

<style scoped></style>
