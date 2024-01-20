<template>
  <footer class="footer">
    <div class="text">Let's Connect</div>
    <div class="social-icon">
      <img src="@/assets/Instagram - Negative.svg" />
      <img class="icons-youtube" src="@/assets/YouTube - Negative.svg" />
      <img src="@/assets/Dribbble - Negative.svg" />
    </div>
    <div class="top-btn" @click="scrollToTop">
      <div class="text-top">Back to Top</div>
      <img class="icon-top" src="@/assets/top.svg" />
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.footer {
  box-sizing: border-box;
  width: 100%;
  height: 165px;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.text {
  box-sizing: border-box;
  color: #2f2f2f;
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-size: 36px;
  line-height: 46px;
  font-weight: 500;
  position: relative;
}
.social-icon {
  display: flex;
  flex-direction: row;
  gap: 25px;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  margin-left: auto;
}
.top-btn {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
  cursor: pointer;
}
.text-top {
  box-sizing: border-box;
  color: #2f2f2f;
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  line-height: 36px;
  font-weight: 500;
  position: relative;
}
.icon-top {
  box-sizing: border-box;
  width: 18px;
  height: 24px;
  position: relative;
  overflow: visible;
  margin-left: 13px;
}
</style>