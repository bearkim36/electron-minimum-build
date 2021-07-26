<template>  
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">전광판 서버 정보 수정</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form v-model="valid">
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="플랫폼 HOST IP"
                    required
                    :rules="requireRules"
                    v-model="formData.HOST"
                  ></v-text-field>
                </v-col>
                <h3>전광판 정보</h3>
                <v-col cols="12">
                  <v-text-field
                    label="IP"
                    required
                    :rules="requireRules"
                    v-model="formData.ETHERNET.IP"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="PORT"
                    required
                    :rules="requireRules"
                    v-model="formData.ETHERNET.PORT"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="NETMASK"
                    required
                    :rules="requireRules"
                    v-model="formData.ETHERNET.NETMASK"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="GATEWAY"
                    required
                    :rules="requireRules"
                    v-model="formData.ETHERNET.GATEWAY"
                  ></v-text-field>
                </v-col>         
                 <v-col cols="12">
                  <v-switch
                      v-model="formData.SOUND_OUT"
                      label="소리 출력"
                    ></v-switch>
                </v-col>                                                       
              </v-row>
            </v-form>
          </v-container>        
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="hideDialog()"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="save()"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>  
</template>

<script>
import _ from 'lodash';
  export default {
    data: () => ({
      valid: false,
      dialog: false,
      formData: {
        HOST:"",
        "ETHERNET": {
          "IP": "",
          "NETMASK": "",
          "GATEWAY": "",
          "PORT": ""
        },
        "SOUND_OUT": false
      },
      requireRules: [
        v => !!v || 'data is required'        
      ],
    }),
    methods: {
      showDialog(config) {
        this.formData = _.cloneDeep(config);

        this.dialog = true;
      },
      save() {        
        if (!this.valid) {          
          return;
        }     
        this.config = window.ipcRenderer.sendSync("set-config", this.formData);   
        this.$emit('saved', {})
        this.dialog = false;
      },
      hideDialog() {
        this.dialog = false;
      }
    }
  }
</script>