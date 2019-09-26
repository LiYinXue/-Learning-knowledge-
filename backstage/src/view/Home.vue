<template>
    <el-container>
        <!-- 页面顶部 -->
        <el-header>
            LOGO
        </el-header>
        <el-container>
            <!-- 页面左侧菜单 -->
            <el-aside width="200px">
                <el-menu router @select="selectIndex">
                    <!-- 开启菜单中的router=true之后，点击菜单会把index作为路由跳转路径 -->
                    <el-menu-item index="/botany">
                        <i class="el-icon-setting"></i>绿植管理
                    </el-menu-item>
                    <el-menu-item index="/flower">
                        <i class="el-icon-setting"></i>鲜花管理
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-main>
               <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>
<style>
.el-header {
  background-color: #c1cbd8;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

<script>
export default {
  name: 'Home',
  data(){
      return {
          
      }
  },
  methods:{
      selectIndex(index, indexPath){
          console.log(index,indexPath)
      }
  }
}
</script>