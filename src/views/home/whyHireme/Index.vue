<template>
  <v-container class="why-container">
    <div class="header">Why Hire me?</div>
    <v-container class="reason-con">
      <v-row style="gap: 50px; justify-content: center;">
        <v-col class="reason">
          <div class="rectangle">
            <img class="image" src="@/assets/why1.png" />
          </div>
          <div class="text">
            <div class="communicative">Communicative</div>
            <div
              class="description"
            >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</div>
          </div>
        </v-col>

        <v-col class="reason">
          <div class="rectangle">
            <img class="image" src="@/assets/why2.png" />
          </div>
          <div class="text">
            <div class="communicative">Communicative</div>
            <div
              class="description"
            >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</div>
          </div>
        </v-col>

        <v-col class="reason">
          <div class="rectangle">
            <img class="image" src="@/assets/why3.png" />
          </div>
          <div class="text">
            <div class="communicative">Communicative</div>
            <div
              class="description"
            >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</div>
          </div>
        </v-col>

        <v-col class="reason">
          <div class="rectangle">
            <img class="image" src="@/assets/why4.png" />
          </div>
          <div class="text">
            <div class="communicative">Communicative</div>
            <div
              class="description"
            >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<style scoped>
.why-container {
  box-sizing: border-box;
  width: 100%;
  margin: 50px 0px;
  padding: 10px 0px;
  max-width: 100%;
  max-height: 100%;
}
.header {
  box-sizing: border-box;
  color: #151517;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 48px;
  line-height: 62px;
  font-weight: 600;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.reason-con {
  padding: 50px 0px 0px 0px;
}
.reason {
  padding: 0px 0px 0px 12px;
  max-width: 239.75px;
}
@media only screen and (max-width: 600px) {
  .why-container {
    margin: 0px;
    padding: 0px;
  }
  .reason {
    padding: 0px;
    max-width: 239.75px;
  }
}
.rectangle {
  box-sizing: border-box;
  width: 239.75px;
  height: 313px;
  position: static;
}
.image {
  border-radius: 45px;
  border-style: solid;
  border-color: transparent;
  border-width: 3px;
  width: 239.75px;
  height: 313px;
  position: absolute;
  object-fit: cover;
}
.text {
  box-sizing: border-box;
  width: 240px;
  height: 133px;
  position: static;
  margin-top: 27px;
}
.communicative {
  color: #2f2f2f;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  line-height: 36px;
  font-weight: 500;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.description {
  color: #828282;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  line-height: 30px;
  font-weight: 400;
  position: relative;
  width: 240px;
  margin-top: 7px;
}
</style>