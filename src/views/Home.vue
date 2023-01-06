<template>
  <div class="container">
    <div class="page-title">Home Page</div>
    <p>store Root is: {{ text }}</p>
    <p>store doubleCount is: {{ count }}</p>
    <button class="btn" @click="double">Double</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, toRefs } from 'vue'
import { useStore } from '../store'

export default defineComponent({
  name: 'Vuex',

  setup() {
    const store = useStore()
    const reactiveData = reactive({
      text: computed(() => store.state.text),
      count: computed(() => store.state.numFactoryModule.count)
    })

    const double = () => {
      store.commit('numFactoryModule/DOUBLE_COUNT')
    }

    return {
      ...toRefs(reactiveData),
      double
    }
  }
})
</script>

<style scoped lang="stylus">
  .btn {
    padding 5px 10px
    border-radius 4px
    margin-top 20px
    cursor pointer
  }
</style>
