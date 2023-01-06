<template>
  <div>
    <div class="user-info-container">
      <el-card>
        <template #header>
          <div>
            <button class="button" @click="getUserInfo">
              get info
            </button>
          </div>
        </template>
        <div v-loading="loading">
          <div v-if="userInfo?.name">name: {{ userInfo?.name }}</div>
          <div v-if="userInfo?.bio">bio: {{ userInfo?.bio }}</div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
import axios from '../utils/axios'

export default defineComponent({
  name: 'Axios',
  setup() {
    const userInfo: Ref = ref(null)
    const loading = ref(false)

    const getUserInfo = () => {
      loading.value = true
      axios
        .get('/users/sabdahtb')
        .then((response) => {
          // eslint-disable-next-line no-console
          console.log('response: ', response.data)
          userInfo.value = response.data
          loading.value = false
        })
        .catch((error) => {
          loading.value = false
          // eslint-disable-next-line no-console
          console.error(error)
        })
    }

    return {
      userInfo,
      loading,
      getUserInfo
    }
  }
})
</script>

<style scoped lang="stylus">

  .user-info-container {
    padding 10px
    border 1px solid #d5d5d5
    width 300px
    border-radius 5px

    .button {
      padding 5px 15px
      border-radius 5px
      margin-bottom 12px
      border 1px solid #d5d5d5
    }

  }
</style>
