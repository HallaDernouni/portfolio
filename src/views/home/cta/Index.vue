<template>
  <v-container class="cta-container">
    <v-card class="frame">
      <div class="text">
        Interested working
        <br />with me?
      </div>
      <div class="mail-btn">
        <div class="background1"></div>
        <img class="icons-mail" src="@/assets/mailb.svg" />
        <div class="email-me">Email Me</div>
      </div>
      <div class="more-btn">
        <div class="background2"></div>
        <div class="more">See More Projects</div>
      </div>
    </v-card>
  </v-container>
</template>

<style scoped>
.cta-container {
  box-sizing: border-box;
  width: 100%;
  margin: 50px 0px;
  padding: 10px 0px;
  max-width: 100%;
  max-height: 100%;
}
.frame {
  box-sizing: border-box;
  background: #eebf63;
  padding: 63px 85px 60px;
  border-radius: 25px;
  border-style: solid;
  border-color: transparent;
  border-width: 3px;
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.text {
  box-sizing: border-box;
  color: #ffffff;
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-size: 48px;
  line-height: 62px;
  font-weight: 600;
  position: relative;
  width: 265px;
  height: 190px;
}

.mail-btn {
  box-sizing: border-box;
  width: 212.19px;
  height: 70px;
  position: relative;
  margin-left: auto;
}
.background1 {
  background: #ffffff;
  border-radius: 10px;
  width: 212.19px;
  height: 70px;
  position: absolute;
  box-shadow: 0px 0.93px 1.92px 0px rgba(0, 0, 0, 0.01);
}
.icons-mail {
  width: 26.25px;
  height: 21px;
  position: absolute;
  left: 25.27px;
  top: 26px;
  overflow: visible;
}
.email-me {
  color: #2f2f2f;
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-weight: 600;
  position: absolute;
  left: 68.06px;
  top: 19px;
  width: 119.11px;
  height: 32px;
}
.more-btn {
  width: 273.25px;
  height: 70px;
  position: relative;
  margin-left: auto;
}
.background2 {
  border-radius: 10px;
  border-style: solid;
  border-color: #ffffff;
  border-width: 2px;
  width: 273.25px;
  height: 70px;
  position: absolute;
}
.more {
  color: #ffffff;
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-weight: 700;
  position: absolute;
  left: 28.03px;
  top: 17px;
  width: 217.2px;
}

@media only screen and (max-width: 1680px) {
  .cta-container {
    display: flex;
    justify-content: center;
  }
  .frame {
    width: 70%;
    flex-direction: column;
    align-items: center;
  }
  .text {
    text-align: center;
  }
  .mail-btn {
    margin-left: 0px;
    margin-top: 20px;
  }
  .more-btn {
    margin-left: 0px;
    margin-top: 20px;
  }
}

@media only screen and (max-width: 600px) {
  .cta-container {
    display: flex;
    justify-content: center;
  }
  .frame {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
  .text {
    text-align: center;
  }
  .mail-btn {
    margin-left: 0px;
    margin-top: 20px;
  }
  .more-btn {
    margin-left: 0px;
    margin-top: 20px;
  }
}
</style>