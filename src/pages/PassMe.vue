<template>
  <div class="passMe">
    <h1>P@ss Me</h1>

    <el-select v-model="selectedApp"
               filterable
               placeholder="Select">
      <el-option
          v-for="item in appNames"
          :key="item.value"
          :label="item.label"
          :value="item.value"
      />
    </el-select>
    <el-input show-password v-model="password" @change="updateLocalStore(constants.PASSWORD_LOCAL_KEY,password)">
      <template #prepend>Password</template>

    </el-input>


    <el-input v-model="secretKey"
              :show-password="!changeSecretKey"
              :disabled="!changeSecretKey"
              @change="updateLocalStore(constants.SECRET_LOCAL_KEY,password)">
      <template #prepend>Secret Key</template>
      <template #append>
        <el-switch
            v-model="changeSecretKey"
            size="small"
        />
      </template>
    </el-input>

    <span id="output"> {{ '@' + encodePassword.substring(passLen[0], passLen[1]) }}</span>
    <el-button id="submit" type="primary" @click="generateSaltedPassword(password,secretKey+selectedApp)">Get
    </el-button>
    
  </div>
</template>

<script setup>
import {ref} from 'vue'
import HmacMD5 from 'crypto-js/hmac-md5'
import constants from "@/constants";

// input
let password = ref(localStorage.getItem(constants.PASSWORD_LOCAL_KEY))
let secretKey = ref(localStorage.getItem(constants.SECRET_LOCAL_KEY))
let passLen = ref([8, 23])
let selectedApp = ref('')

// switch state
let changeSecretKey = ref(false)

// output
let encodePassword = ref('')


const appNames = [
  {
    value: 'Apple',
    label: '苹果(Apple)'
  },
  {
    value: '腾讯QQ',
    label: '腾讯QQ'
  },
  {
    value: '微信',
    label: '微信(WeChat,WX)'
  },
]

/**
 * 生成加盐后的密码
 */
function generateSaltedPassword(pwd, salt) {
  // 固定32位Hash
  let hash = HmacMD5(pwd, salt) // f5ec9b52b56fdc2c2d43726800b3d002
  encodePassword.value = window.btoa(hash.toString())
}

function updateLocalStore(key, value) {
  localStorage.setItem(key, value)
  console.log("local store successful " + key + ':' + value)
}

</script>

<style scoped>
.passMe {
  width: 50%;
  margin: auto;
  height: 100%;
}

.passMe > * {
  margin: 10px;
}


#output {
  width: 30%;
}

#submit {
  display: inline;
  right: 0;
}
</style>