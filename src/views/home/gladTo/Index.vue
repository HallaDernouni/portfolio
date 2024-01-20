<template>
  <v-container class="glad-container">
    <v-card class="frame">
      <v-row class="frame-row">
        <v-col cols="6" class="image-col">
          <img class="image" src="@/assets/gImage.png" />
        </v-col>
        <v-col class="text-col">
          <div class="text">
            <v-row class="row1">
              <v-col class="num-col">
                <div class="_120">
                  120
                  <span style="color: #8ed2a9;">+</span>
                </div>
                <div class="gray">Completed Projects</div>
              </v-col>
              <v-col class="num-col">
                <div class="a">
                  A+
                  <img class="rating" src="@/assets/Rating.svg" />
                </div>
                <div class="gray">Positive Review’s</div>
              </v-col>
            </v-row>
            <div class="glad">Glad to Help You!</div>
            <div
              class="discription"
            >As a full-service digital designer, I work closely with my clients to define, design and develop transformative user experiences across all platforms and brand’s touchpoints.</div>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<style scoped>
.glad-container {
  box-sizing: border-box;
  width: 100%;
  margin: 50px 0px;
  padding: 10px 0px;
  max-width: 100%;
  max-height: 100%;
}
.frame {
  box-sizing: border-box;
  background: #e9e9e9;
  border-radius: 45px;
  height: auto;
  position: relative;
}

.image-col {
  padding: 0px 0px 0px 12px;
  max-width: 38%;
}

.image {
  border-radius: 30px;
  width: 350px;
  height: 458px;
  position: relative;
  margin-left: 65px;
  margin-top: 63px;
  margin-bottom: 63px;
}

.text {
  position: relative;
  top: 63px;
  left: 0px;
}
.text-col {
  padding: 0px 0px 0px 60px;
}
.num-col {
  padding: 12px 0px 0px 12px;
}

._120 {
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-size: 72px;
  line-height: 62px;
  font-weight: 600;
  position: relative;
}

.gray {
  color: #828282;
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  line-height: 36px;
  font-weight: 400;
  position: relative;
}

.a {
  color: #2f2f2f;
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-size: 48px;
  line-height: 62px;
  font-weight: 600;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.rating {
  width: 148px;
  height: 25px;
  position: relative;
}
.glad {
  color: #151517;
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-size: 48px;
  line-height: 62px;
  font-weight: 600;
  position: relative;
  margin-top: 70px;
}

.discription {
  color: #000000;
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  line-height: 45px;
  font-weight: 400;
  position: relative;
  width: 570px;
  margin-top: 19px;
}
@media only screen and (max-width: 600px) {
  .frame {
    height: auto;
    display: flex;
    flex-direction: column;
  }
  .frame-row {
    justify-content: center;
  }
  .image {
    border-radius: 30px;
    width: 350px;
    height: 458px;
    position: relative;
    margin-bottom: 0px;
    margin-left: 0px;
  }
}
</style>