<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      userInfo:{}
    }
  },
  created(){
    this.getUserInfo();
  },
  methods:{
    getUserInfo(){
     //请求'/user/userinfo'接口
     console.log(this.$http,'////')
      this.$http.get('/user/userinfo')
      .then(({data})=>{
        //打印mock data
        console.log(data);
        if(data.error === 0){
          this.userInfo = data.data;
        }else{
          this.userInfo = {};
        }
        
      });
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
