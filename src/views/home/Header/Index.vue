<template>
  <div>
    <Navbar />
    <Header />
  </div>
</template>
  
  <script>
import Navbar from "./comp/Navbar.vue";
import Header from "./comp/Hero.vue";

export default {
  components: {
    Navbar,
    Header,
  },
};
</script>