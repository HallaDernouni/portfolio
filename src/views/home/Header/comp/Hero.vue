<template>
  <v-container class="hero-container">
    <v-row>
      <v-col>
        <div class="text">
          <h4 class="hey">Hey!</h4>
          <h1 class="name">
            I’m
            <span style="color: #EEBF63;">Ariene Rey</span>.
            <br />an UI/UX Designer.
          </h1>
          <img class="line-vector" src="@/assets/Line-Vector.svg" />
          <div class="intro">
            UX Designer based in Jakarta, Indonesia.
            <br />I am designing with a minimal and beautiful design in mind.
          </div>
          <div class="social-icon">
            <div class="follow-me">Follow Me</div>
            <img src="@/assets/instagram.svg" />
            <img class="icons-youtube" src="@/assets/youtube.svg" />
            <img src="@/assets/dribbble.svg" />
          </div>
        </div>

        <div class="mail-btn">
          <div class="background1"></div>
          <img class="icons-mail" src="@/assets/mail.svg" />
          <div class="mail">Mail Me</div>
        </div>

        <div class="download-btn">
          <div class="background2"></div>
          <div class="download">Download CV</div>
          <img class="icons-download" src="@/assets/download.svg" />
        </div>
      </v-col>
      <v-col>
        <v-img class="ml-auto image" src="@/assets/hImage.svg" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.hero-container {
  box-sizing: border-box;
  width: 100%;
  margin: 0px 0pc 80px 0px;
  padding: 0px;
  max-width: 100%;
  max-height: 100%;
}
.text {
  width: 475px;
  height: 386px;
  position: relative;
  margin-top: 77px;
}
.hey {
  color: #828282;
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  line-height: 36px;
  font-weight: 500;
  position: relative;
}
.name {
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-size: 48px;
  line-height: 62px;
  font-weight: 600;
  position: relative;
  width: 475px;
  margin-top: 16px;
}
.line-vector {
  box-sizing: border-box;
  border-radius: 0px;
  width: 324px;
  height: 19px;
  position: relative;
  overflow: visible;
  left: 101px;
  margin-top: 15px;
}
.intro {
  width: 475px;
}
.social-icon {
  display: flex;
  flex-direction: row;
  gap: 30px;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  margin-top: 32px;
}

.follow-me {
  color: #828282;
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  line-height: 30px;
  font-weight: 400;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.icons-youtube {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  position: relative;
}
.mail-btn {
  width: 151px;
  height: 55px;
  position: relative;
  margin-top: 44px;
}

.background1 {
  background: #eebf63;
  border-radius: 10px;
  position: relative;
  right: 0%;
  left: 0%;
  width: 100%;
  bottom: 0%;
  top: 0%;
  height: 100%;
}
.icons-mail {
  width: 20px;
  height: 16px;
  position: absolute;
  left: 28px;
  top: 20px;
  overflow: visible;
}
.mail {
  color: #ffffff;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 700;
  position: absolute;
  right: 18.54%;
  left: 39.74%;
  width: 41.72%;
  bottom: 27.27%;
  top: 29.09%;
  height: 43.64%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.download-btn {
  width: 184px;
  height: 55px;
  position: relative;
  left: 181px;
  margin-top: -55px;
}
.background2 {
  border-radius: 10px;
  border-style: solid;
  border-color: #eebf63;
  border-width: 2px;
  position: relative;
  right: 0%;
  left: 0%;
  width: 100%;
  bottom: 0%;
  top: 0%;
  height: 100%;
}
.icons-download {
  width: 14px;
  height: 20px;
  position: absolute;
  left: 22px;
  top: 18px;
  overflow: visible;
}
.download {
  color: #2f2f2f;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 700;
  position: absolute;
  right: 11.96%;
  left: 27.72%;
  width: 60.33%;
  bottom: 27.27%;
  top: 29.09%;
  height: 43.64%;
}
.image {
  width: 593px;
  height: 575px;
  position: relative;
  overflow: visible;
  margin-top: 42px;
  right: 0px;
}
@media only screen and (max-width: 600px) {
  .hero-container {
    margin-bottom: 40px;
  }
  .text {
    margin-top: 30px;
  }
  .name {
    width: 400px;
  }
  .line-vector {
    left: 20px;
  }
  .intro {
    color: #2f2f2f;
    text-align: left;
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    line-height: 30px;
    font-weight: 400;
    position: relative;
    width: 380px;
    margin-top: 22px;
  }
  .mail-btn {
    margin-top: 100px;
  }
  .image {
    width: 385.45px;
    height: 373.75px;
    margin-top: 0px;
  }
}
</style>
