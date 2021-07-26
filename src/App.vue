<template>
    <v-app>
    <v-app-bar
      app
    >
        <h3>DKANT 한강 LED 전광판 서버</h3>
      <v-spacer></v-spacer>

    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  created() {
    console.log(window.ipcRenderer)
  },
  methods: {
    showUpdateForm() {
      
    }
  }
};
</script>
