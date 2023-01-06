<template>
  <main class="main-container">
    <div class="top">
      <p><router-link to="/">Home</router-link></p>
      <p><router-link to="/axios">Axios</router-link></p>
    </div>

    <div class="content">
      <router-view />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Main',
})
</script>

<style scoped lang="stylus">

$top-height = 60px
$left-side-width = 80px

ul {
  list-style-type none
}
.main-container {
  width 100%
  height 100%
  background $second-background-color
  box-sizing border-box
  display flex
  flex-direction column

  .top {
    width 100%
    height $top-height
    display flex
    align-items center
    padding 0px 40px
    gap 20px
    border-bottom 1px solid #d5d5d5
  }

  .content {
    padding 40px
  }
}
</style>
