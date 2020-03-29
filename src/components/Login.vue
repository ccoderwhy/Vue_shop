<template>

    <div class="login">
        <div class="login_box">
            <!-- 头像 -->
           <div class="img_box">
               <h1>米修后台管理系统</h1>
           </div>
           <!-- 登录表单 -->
           <el-form ref="loginRef" :rules="FormRules" :model="loginForm" label-width="0px" class="login_from">
               <!-- 用户名 -->
            <el-form-item prop="username">
                <el-input v-model="loginForm.username" prefix-icon="el-icon-user-solid"></el-input>
            </el-form-item>
            <!-- 密码 -->
            <el-form-item prop="password">
                <el-input v-model="loginForm.password" prefix-icon="el-icon-s-goods" type="password"></el-input>
            </el-form-item>
            <!-- 按钮 -->
            <el-form-item class="btns">
                 <el-button type="primary" @click="login">登录</el-button>
                 <el-button type="info" @click="resetLoginForm">重置</el-button>
            </el-form-item>
           </el-form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data(){
        return{
            loginForm:{
                username:'admin',
                password:'123456'
            },
            FormRules:{
                username:[
                     { required: true, message: '请输入活动名称', trigger: 'blur' },
                     { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                password:[
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                     { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
                ]
            }
        }
    },
    methods:{
        //重置表单
        resetLoginForm(){
            this.$refs.loginRef.resetFields();
        },
        //验证登录
        login(){
            this.$refs.loginRef.validate(async vaild=>{
                if(!vaild) return;
                const {data:res} =await this.$http.post('login',this.loginForm)
                console.log(res)
                if(res.meta.status !==200) return this.$message.error("登录失败");
                this.$message.success("登录成功")
                //token只在当前网站打开时生效，所以将他保存在sessionStorage临时会话中
                window.sessionStorage.setItem('token',res.data.token)
                this.$router.push("/home")

            });
        }
    }
}
</script>

<style lang="less" scoped>
    .login{
        /*background-color:cadetblue;*/
        background: linear-gradient(to right,#d3959b,#bfe6ba);
        height: 100%;
    }
    .login_box{
        width:520px;
        height: 300px;
        /*background: linear-gradient(to right,#1c92d2,#f2fcfe);*/
        /*background-color: #fff;*/
        border-radius: 3px;
        position: absolute;
        left:50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
    .img_box{
        background: white;
        -webkit-background-clip: text;
        color: transparent;
        /*padding: 10px;*/
        position: absolute;
        left: 50%;
        transform: translate(-50%,-100%);
        font-size: 15px;

    }
    .btns{
        display: flex;
        justify-content: flex-end;
    }
    .login_from{
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 0 20px;
        box-sizing: border-box;
    }
    .el-input{
        background: linear-gradient(to right,#d3959b,#bfe6ba);
    }
</style>
