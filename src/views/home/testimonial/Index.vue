<template>
  <div class="background">
    <v-container class="testimon-container">
      <div class="header">We Are Loved By Users And Clients Worldwide</div>
      <div class="slide">
        <Slider />
      </div>
    </v-container>
  </div>
</template>

<script>
import Slider from "./comp/Slider.vue";

export default {
  components: {
    Slider,
  },
};
</script>

<style scoped>
.background {
  background: #6fc2c5;
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
}
.testimon-container {
  box-sizing: border-box;
  width: 100%;
  padding: 50px 0px;
  max-width: 100%;
  max-height: 100%;
}
.slide {
  box-sizing: border-box;
  width: 100%;
  padding: 50px 0px;
  max-width: 100%;
  max-height: 100%;
}
.header {
  box-sizing: border-box;
  color: #ffffff;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 48px;
  line-height: 60px;
  font-weight: 600;
  position: relative;
  left: 250px;
  width: 609px;
}
@media only screen and (max-width: 600px) {
  .testimon-container {
    box-sizing: border-box;
    width: 100%;
    padding: 50px 0px;
    max-width: 100%;
    max-height: 100%;
    display: flex;
    justify-content: center;
  }
  .header {
    left: auto;
    width: 609px;
  }
}
</style>