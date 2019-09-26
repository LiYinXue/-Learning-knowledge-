<template>
    <div class="login_box">
        <div class="login_wrap">
            <h4>登录</h4>
            <el-form ref="form" :model="form" class="form_box">
                <el-form-item>
                    <el-input v-model="form.account">
                        <el-button slot="prepend" icon="iconfont iconyonghu"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-input type="password" v-model="form.password">
                        <el-button slot="prepend" icon="iconfont iconmima"></el-button>
                    </el-input>
                </el-form-item>
            </el-form>
            <el-button type="primary" size="small" class="btn" @click="goLogin">登 录</el-button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            form:{
                account:'',
                password:''
            }
        }
    },
    methods:{
        goLogin(){
            this.$router.push({
                path:'/home'
            })
        }
    }
}
</script>
<style scoped lang="less">
    .login_box{
        width: 100%;
        height: 100vh;
        background-image: url(../assets/login.jpg);
        background-size: cover;
        .login_wrap{
            text-align: center;
            width: 330px;
            background: rgba(255, 255, 255, 0.6);
            border-radius: 10px;
            position: absolute;
            right: 12%;
            top: 30%;
            padding-bottom: 26px;
            h4{
                padding: 16px 0;
                border-bottom: 1px solid #dddddd;
                margin-bottom: 30px;
            }
            .form_box{
                margin: 0 auto;
                width: 300px;
            }
            .btn{
                display: block;
                margin: 0 auto;
                width: 300px;
            }
        }
    }
</style>