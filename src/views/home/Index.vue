<template>
  <v-app id="home">
    <Header />
    <Gladto />
    <Projects />
    <Why />
    <Cta />
    <Logo />
    <Testimonial />
    <Footer />
  </v-app>
</template>

<script>
import Header from "./Header/Index.vue";
import Gladto from "./gladTo/Index.vue";
import Projects from "./recentProjects/Index.vue";
import Why from "./whyHireme/Index.vue";
import Cta from "./cta/Index.vue";
import Logo from "./logos/Index.vue";
import Testimonial from "./testimonial/Index.vue";
import Footer from "./footer/Index.vue";

export default {
  components: {
    Header,
    Gladto,
    Projects,
    Why,
    Cta,
    Logo,
    Testimonial,
    Footer,
  },
};
</script>

<style>
#home {
  padding: 15px;
  @media (min-width: 1110px) {
    padding: 0 165px;
  }
  /* @media (max-width: 1680px) {
    padding: 0 60px;
  } */
}
</style>