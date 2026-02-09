<template>
        <!-- <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon><document /></el-icon>
          <span>Navigator Three</span>
        </el-menu-item> -->

  <template v-for="(item,index) in props.menuData">
    <el-menu-item 
      v-if="!item.children || item.children.length==0"
      :index="'${props.index}-${item.meta.id}'"
      :key="'${props.index}-${item.meta.id}'">
      <!-- <el-icon><setting /></el-icon>
      <span>Navigator Four</span> -->

      <el-icon size="20">
        <component :is="item.meta.icon"></component>  <!--根据名称动态渲染组件-->
      </el-icon>
      <span>{{item.meta.name}}</span>
    </el-menu-item> 

    <el-sub-menu v-else :index="'${props.index}-${item.meta.id}'">  <!-- 有子菜单,需要index唯一值 -->
      <template #title>   <!--子菜单图标及名称-->
        <el-icon size="20">
          <component :is="item.meta.icon"></component>  <!--根据名称动态渲染组件-->
        </el-icon>
        <span>{{item.meta.name}}</span>
     </template>
     <tree-menu 
     :index="'${props.index}-${item.meta.id}'" 
     :menuData="item.children"></tree-menu>
    </el-sub-menu>
 </template>

</template>

<script setup>
const props = defineProps(['menuData','index'])
console.log(props,'props')
</script>



<style scoped></style>

