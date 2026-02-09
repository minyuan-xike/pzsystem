<template>
      <el-menu
      :style="{width:'230px'}"
        active-text-color="#ffd04b"
        class="aside-container" 
        background-color="#545c64"
        efault-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
      >
      <p class="logo-lg">DIDI陪诊</p>
      <TreeMenu :index="1" :menuData="menuData"/>
        
      </el-menu>
  
</template>


<script setup>
import treeMenu from './treeMenu.vue';
import {useRouter} from 'vue-router';
import {reactive} from 'vue'


const router = useRouter()
const menuData = reactive(router.options.routes[0].children)


// console .log(router ,'router')

const handleOpen = ()=> {}
const handleClose = () => {}
</script>



<style lang="less" scoped>
.aside-container{
  height: 100%;
  // background-color: blue;
  .logo-lg{
    font-size: 20px;
    text-align: center;
    line-height: 50px;
    color: #fff;
    // background-color: pink;
  }
}
</style>