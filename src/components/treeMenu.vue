<template>
        
  <template v-for="(item,index) in props.menuData">
    <el-menu-item 
      @click="handleClick(item,`${props.index}-${item.meta.id}`)"  
      v-if="!item.children || item.children.length==0"
      :index="`${props.index}-${item.meta.id}`"
      :key="`${props.index}-${item.meta.id}`">  <!--菜单点击跳转-->
      <!-- <el-icon><setting /></el-icon>
      <span>Navigator Four</span> -->

      <el-icon size="20">
        <component :is="item.meta.icon"></component>  <!--根据名称动态渲染组件-->
      </el-icon>
      <span>{{item.meta.name}}</span>
    </el-menu-item> 

    <el-sub-menu v-else :index="`${props.index}-${item.meta.id}`">  <!-- 有子菜单,需要index唯一值 -->
      <template #title>   <!--子菜单图标及名称-->
        <el-icon size="20">
          <component :is="item.meta.icon"></component>  <!--根据名称动态渲染组件-->
        </el-icon>
        <span>{{item.meta.name}}</span>
     </template>
     <tree-menu 
     :index="`${props.index}-${item.meta.id}`" 
     :menuData="item.children" />
    </el-sub-menu>
 </template>

</template>

<script setup>
import { useRouter } from 'vue-router'
const props = defineProps(['menuData','index'])

//创建router实例
const router=useRouter()
// console.log(props,'props')
// 点击菜单
const handleClick=(item,active)=>{
  // console.log(item,'item')
  router.push(item.meta.path)
}
</script>



<style scoped></style>

