<template>
  <v-container class="slides">
    <v-row>
      <v-col>
        <v-card class="rectangle">
          <p
            class="comnt"
          >One of the best additions to our feedback loop has been the company-wide adoption of Fellow.</p>
          <div class="profile">
            <img class="picture" src="@/assets/user1.png" />
            <div class="information">
              <div class="name">Ronald Richards</div>
              <div class="prof">UI/UX Designer</div>
            </div>
            <div class="value">4.5</div>
            <img class="raiting" src="@/assets/Rating.svg" />
          </div>
        </v-card>
      </v-col>

      <v-col>
        <v-card class="rectangle">
          <p
            class="comnt"
          >It provides an amazing platform for constant conversations and direct feedback between managers and direct reports.</p>
          <div class="profile">
            <img class="picture" src="@/assets/user2.png" />
            <div class="information">
              <div class="name">Ronald Richards</div>
              <div class="prof">UI/UX Designer</div>
            </div>
            <div class="value">4.5</div>
            <img class="raiting" src="@/assets/Rating5.svg" />
          </div>
        </v-card>
      </v-col>
    </v-row>
    <div class="slider-dot">
      <div class="_5"></div>
      <div class="_4"></div>
      <div class="_3"></div>
      <div class="_2"></div>
      <div class="_1"></div>
    </div>
  </v-container>
</template>

<script>
</script>
<style scoped>
.slides {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.rectangle {
  box-sizing: border-box;
  padding: 55px 52px;
  background: #ffffff;
  border-radius: 30px 0px 30px 30px;
  width: 529px;
  height: 351px;
  position: relative;
}
.comnt {
  box-sizing: border-box;
  color: #151517;
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-weight: 400;
  position: relative;
  width: 419px;
  height: 155px;
}
.profile {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 419px;
  height: 50px;
  position: static;
  margin-top: 42px;
}

.picture {
  box-sizing: border-box;
  border-radius: 46px;
  width: 47.92px;
  height: 50px;
  position: relative;
  object-fit: cover;
}

.information {
  display: flex;
  flex-direction: column;
}

.name {
  box-sizing: border-box;
  color: #2f2f2f;
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 600;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.prof {
  box-sizing: border-box;
  color: #676767;
  text-align: left;
  font-family: "libre-franklin", sans-serif;
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  position: relative;
  width: 110px;
  height: 23px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.value {
  box-sizing: border-box;
  color: #2f2f2f;
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 600;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.raiting {
  box-sizing: border-box;
  width: 145px;
  height: 24px;
  position: relative;
}
.slider-dot {
  box-sizing: border-box;
  width: 150px;
  height: 10px;
  position: static;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
}
._1 {
  background: #505050;
  border-radius: 5px;
  width: 10px;
  height: 30px;
  position: absolute;
  transform-origin: 0 0;
  transform: rotate(-90deg) scale(1, 1);
}
._2,
._3,
._4,
._5 {
  background: #ffffff;
  border-radius: 5px;
  width: 10px;
  height: 10px;
  transform-origin: 0 0;
  transform: rotate(-90deg) scale(1, 1);
}
</style>