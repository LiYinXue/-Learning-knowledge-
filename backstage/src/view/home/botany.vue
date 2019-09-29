<template>
    <div>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column type="index" label="序号" align="center"></el-table-column>
            <el-table-column prop="name" label="名称" align="center"></el-table-column>
            <el-table-column prop="title" label="介绍" align="center"></el-table-column>
            <el-table-column prop="date" label="日期" align="center"></el-table-column>
        </el-table>
    </div>
</template>

<script>
import api from '@/plugin/axios/index.js'
export default {
  name: 'App',
  data(){
    return {
      tableData:[]
    }
  },
  created(){
    this.getUserInfo();
  },
  methods:{
    getUserInfo(){
     api.JH_news('/botany/index', 'type=top&key=123456')
      .then(res => {
        console.log(res);
        this.tableData = res.list;
      });
    }
  }
}
</script>
<style lang="less" scoped>

</style>