<template>
  <v-container class="logo-container">
    <div class="logos">
      <img class="logo" src="@/assets/logos.svg" />
    </div>
  </v-container>
</template>

<style scoped>
.logo-container {
  box-sizing: border-box;
  width: 100%;
  padding: 50px 48px 94.02px;
  max-width: 100%;
  max-height: 100%;
}
.logos {
  box-sizing: border-box;
  position: relative;
  inset: 0;
}
.logo {
  display: flex;
  flex-direction: column;
  gap: 100px;
  align-items: center;
  justify-content: flex-start;
  height: auto;
  position: relative;
  overflow: visible;
  display: flex;
  flex-direction: row;
  align-items: center;
}
@media only screen and (max-width: 600px) {
  .logo-container {
    box-sizing: border-box;
    width: 100%;
    padding: 0px 0px 50px;
    max-width: 100%;
    max-height: 100%;
  }
  .logo {
    width: 380px;
  }
}
</style>