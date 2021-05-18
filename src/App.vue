<template>
  <div id="app">
    <button @click="getUserData">Get User data</button>
    <table>
      <tr v-for="(row, idx) in data" :key="idx">
        <td>{{row.NAME}}</td>
        <td>{{row.PHONE}}</td>
        <td>{{row.EMAIL}}</td>
        <td>{{row.BIRTHDAY}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [{
        NAME:"dummy", PHONE:"none", EMAIL:"no", BIRTHDAY:1111
      }]
    };
  },
  methods: {
    getUserData() {
      this.data = window.ipcRenderer.sendSync("get-user-list", null);
    }
  }
};
</script>
