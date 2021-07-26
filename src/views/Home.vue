<template>
  <div class="home">    
    <v-card v-if="config"   elevation="2" class="ma-4 pa-4">
          <h3>플랫폼 정보</h3>
          <table class="dk-table">
            <tr>
              <th>호스트 IP</th>
              <td>{{config.HOST}}</td>
            </tr>            
          </table>          
          <h3>전광판 정보</h3>
          <table class="dk-table">
            <tr>
              <th>IP</th>
              <td>{{config.ETHERNET.IP}}</td>
            </tr>
            <tr>
              <th>NETMASK</th>
              <td>{{config.ETHERNET.NETMASK}}</td>
            </tr>
            <tr>
              <th>GATEWAY</th>
              <td>{{config.ETHERNET.GATEWAY}}</td>
            </tr>
            <tr>
              <th>PORT</th>
              <td>{{config.ETHERNET.PORT}}</td>
            </tr>
            <tr>
              <th>소리 출력</th>
              <td><span v-if="config.SOUND_OUT">출력 함</span><span v-else>출력안함</span></td>
            </tr>            
          </table>
          <v-btn @click="showDialog"><v-icon>mdi-cog</v-icon> 정보수정</v-btn> 
      </v-card>           
      <form-config ref="formConfig" @saved="getConfig"></form-config>
  </div>
</template>

<script>
import formConfig from './formConfig.vue';
export default {
  components: {
    'form-config': formConfig
  },
  data() {
    return {
      config: null
    };
  },
  mounted() {
    this.getConfig();
  },
  methods: {
    showDialog() {
      this.$refs.formConfig.showDialog(this.config)
    },
    getConfig() {
      this.config = window.ipcRenderer.sendSync("get-config", null);
    },
    getUserData() {      
      this.data = window.ipcRenderer.sendSync("get-user-data", null);
    }
  }
}
</script>

<style scoped>
.dk-table {
  border-collapse: collapse;
  border-spacing: 0;
}
.dk-table {
  border-color: #e1e4ea;
  border-style: solid;
  border-width: 0 1px 1px;
  width: 100%;
  margin-bottom:20px;
}
.dk-table tbody tr {
  transition: all 0.15s ease-out;
}
.dk-table tbody tr:hover td {
  background-color: rgba(0, 77, 128, 0.0392157) !important;
}
.dk-table th,
.dk-table td {
  border-color: #e1e4ea;
  border-style: solid;
  border-width: 1px 0 0;
  padding: 10px 24px;
}
.dk-table th {
  background-color: #f8f9fb;
  color: #2c3e50;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
}
.dk-table thead th {
  padding: 12px 24px;
}
.dk-table tbody th {
  border-right: 1px solid #e1e4ea;
}
.dk-table th.th-sub {
  background-color: #fff;
}
.dk-table td {
  color: #2c3e50;
  font-size: 13px;
}

</style>