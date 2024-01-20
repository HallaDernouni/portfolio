<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style>
#app {
  padding: 0px;
  font-family: "Poppins";
  @media (min-width: 1440px) {
    padding: 0px 205px;
  }
}
</style>
