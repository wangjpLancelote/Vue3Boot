<template>
 <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'App'
})
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

li{
  list-style: none;
}

.home-tab{
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ebebeb;
  border-radius: 3px;
}
</style>
