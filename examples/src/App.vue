<script lang="ts">
import { defineComponent } from 'vue';

  export default defineComponent({
    setup(){
      const columns = [
        {
          title: '项目编码'
        },
        {
          title: '项目名称'
        },
        {
          title: '责任人'
        }
      ]

      return {
        columns,
      }
    }
  })
</script>

<template>
  <ido-table :columns="columns"></ido-table>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
