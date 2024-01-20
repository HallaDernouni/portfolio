<template>
  <v-container class="projects-container">
    <div class="header">
      <div class="text">Recent Projects</div>
      <div class="view-btn">
        <div class="background"></div>
        <div class="view">View More</div>
      </div>
    </div>
    <v-container class="portfolio-cont">
      <v-row>
        <v-col class="portfolio">
          <img class="image" src="@/assets/projects1.png" />
          <div class="title-action">
            <div class="ui">UI Portofolio</div>
            <div class="action-buttons">
              <div class="view-study-case">
                <img class="icons-layers" src="@/assets/layers.svg" />
                <div class="view-study-case2">View Study Case</div>
              </div>
              <div class="live-preview">
                <img class="icons-show" src="@/assets/show.svg" />
                <div class="live-preview2">Live Preview</div>
              </div>
            </div>
          </div>
        </v-col>
        <v-col class="portfolio">
          <img class="image" src="@/assets/projects2.png" />
          <div class="title-action">
            <div class="ui">UI Portofolio</div>
            <div class="action-buttons">
              <div class="view-study-case">
                <img class="icons-layers" src="@/assets/layers.svg" />
                <div class="view-study-case2">View Study Case</div>
              </div>
              <div class="live-preview">
                <img class="icons-show" src="@/assets/show.svg" />
                <div class="live-preview2">Live Preview</div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
  
  <style scoped>
.projects-container {
  box-sizing: border-box;
  width: 100%;
  margin: 50px 0px;
  padding: 10px 0px;
  max-width: 100%;
  max-height: 100%;
}
.header {
  display: flex;
  align-items: center;
}
.text {
  box-sizing: border-box;
  color: #151517;
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-size: 48px;
  line-height: 62px;
  font-weight: 600;
  position: relative;
  margin-right: 20px;
}
.view-btn {
  width: 151px;
  height: 55px;
  position: relative;
  margin-left: auto;
}
.background {
  background: #eebf63;
  border-radius: 10px;
  position: absolute;
  right: 0%;
  left: 0%;
  width: 100%;
  bottom: 0%;
  top: 0%;
  height: 100%;
}
.view {
  color: #ffffff;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 700;
  position: absolute;
  right: 21.85%;
  left: 21.19%;
  width: 56.95%;
  bottom: 27.27%;
  top: 29.09%;
  height: 43.64%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.portfolio-cont {
  padding: 56px 0px 0px 0px;
}
.portfolio {
  padding: 0px 0px 0px 12px;
}
.image {
  box-sizing: border-box;
  border-radius: 25px;
  width: 540px;
  height: 756px;
  position: relative;
  object-fit: cover;
}
.title-action {
  box-sizing: border-box;
  width: 346px;
  height: 70px;
  position: static;
  margin-top: 20px;
}
.ui {
  box-sizing: border-box;
  color: #1c1c1c;
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-weight: 600;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.action-buttons {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
}
.view-study-case,
.live-preview {
  box-sizing: border-box;
  height: 24px;
  position: static;
  display: flex;
  align-items: center;
}
.icons-layers,
.icons-show {
  box-sizing: border-box;
  position: relative;
  overflow: visible;
}
.view-study-case2,
.live-preview2 {
  color: #151517;
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 8px;
}
.live-preview {
  margin-left: 50px;
}

@media only screen and (max-width: 600px) {
  .text {
    font-size: 30px;
    line-height: 52px;
  }
  .view-btn {
    width: 120px;
    height: 55px;
  }
  .portfolio {
    padding: 0px 0px 0px 25px;
  }
  .image {
    width: 351px;
    height: 491.4px;
  }
  .title-action {
    margin-bottom: 20px;
  }
}

@media only screen and (max-width: 1680px) {
  .portfolio-cont {
    padding: 56px 0px 0px 0px;
  }
  .portfolio {
    padding: 0px 0px 0px 25px;
    display: inline-grid;
    justify-items: center;
  }
  .title-action {
    margin-bottom: 20px;
  }
}
</style>