<template>
    <div class="login">
        <div class="cont_forms" >
            <div class="cont_img_back_"> <img src="../assets/po.jpg" alt=""  width="1000px"/> </div>
            <div class="login_box">
                <!-- 头像 -->
                <div class="img_box">
                    <h1>登录</h1>
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

    .cont_forms {
        position: absolute;
        overflow: hidden;
        position: absolute;
        left:50%;
        top: 50%;
        transform: translate(-50%,-50%);
        border: 1px solid #b4bccc;
        width: 450px;
        height: 550px;
        background-color: #eee;
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        -ms-transition: all 0.5s;
        -o-transition: all 0.5s;
        transition: all 0.5s;
    }
    .cont_forms_active_login {
        box-shadow: 1px 10px 30px -10px rgba(0,0,0,0.5);
        height: 2000px;
        top:20px;
        left: 0px;
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        -ms-transition: all 0.5s;
        -o-transition: all 0.5s;
        transition: all 0.5s;

    }
    .cont_forms_active_sign_up {
        box-shadow: 1px 10px 30px -10px rgba(0,0,0,0.5);
        height: 420px;
        top:20px;
        left:320px;
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        -ms-transition: all 0.5s;
        -o-transition: all 0.5s;
        transition: all 0.5s;
    }
    .cont_img_back_grey {
        position: absolute;
        width: 950px;
        top:-80px;
        left: -116px;
    }
    .cont_img_back_grey > img {
        width: 100%;
        -webkit-filter: grayscale(100%);     filter: grayscale(100%);
        opacity: 0.2;
        animation-name: animar_fondo;
        animation-duration: 20s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-direction: alternate;

    }
    .cont_img_back_ {
        position: absolute;
        width: 950px;
        top:-80px;
        left: -116px;
    }
    .cont_img_back_ > img {
        width: 100%;
        opacity: 0.3;
        animation-name: animar_fondo;
        animation-duration: 20s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-direction: alternate;
    }
    @-webkit-keyframes animar_fondo {
        from { -webkit-transform: scale(1) translate(0px);
            -moz-transform: scale(1) translate(0px);
            -ms-transform: scale(1) translate(0px);
            -o-transform: scale(1) translate(0px);
            transform: scale(1) translate(0px); }
        to { -webkit-transform: scale(1.5) translate(50px);
            -moz-transform: scale(1.5) translate(50px);
            -ms-transform: scale(1.5) translate(50px);
            -o-transform: scale(1.5) translate(50px);
            transform: scale(1.5) translate(50px); }
    }
    @-o-keyframes identifier {
        from { -webkit-transform: scale(1);
            -moz-transform: scale(1);
            -ms-transform: scale(1);
            -o-transform: scale(1);
            transform: scale(1); }
        to { -webkit-transform: scale(1.5);
            -moz-transform: scale(1.5);
            -ms-transform: scale(1.5);
            -o-transform: scale(1.5);
            transform: scale(1.5); }

    }
    @-moz-keyframes identifier {
        from { -webkit-transform: scale(1);
            -moz-transform: scale(1);
            -ms-transform: scale(1);
            -o-transform: scale(1);
            transform: scale(1); }
        to { -webkit-transform: scale(1.5);
            -moz-transform: scale(1.5);
            -ms-transform: scale(1.5);
            -o-transform: scale(1.5);
            transform: scale(1.5); }

    }
    @keyframes identifier {
        from { -webkit-transform: scale(1);
            -moz-transform: scale(1);
            -ms-transform: scale(1);
            -o-transform: scale(1);
            transform: scale(1); }
        to { -webkit-transform: scale(1.5);
            -moz-transform: scale(1.5);
            -ms-transform: scale(1.5);
            -o-transform: scale(1.5);
            transform: scale(1.5); }
    }
    .cont_form_login {
        position: absolute;
        opacity: 0;
        display: none;
        width: 320px;
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        -ms-transition: all 0.5s;
        -o-transition: all 0.5s;
        transition: all 0.5s;
    }
    .cont_form_sign_up {
        position: absolute;
        width: 320px;
        float: left;
        opacity: 0;
        display: none;
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        -ms-transition: all 0.5s;
        -o-transition: all 0.5s;
        transition: all 0.5s;
    }
    .cont_form_sign_up > input {
        text-align: left;
        padding: 15px 5px;
        margin-left: 10px;
        margin-top: 20px;
        width: 260px;
        border: none;
        color: #757575;
    }
    .cont_form_sign_up > h2 {
        margin-top: 50px;
        font-weight: 400;
        color: #757575;
    }
    .cont_form_login > input {
        padding: 15px 5px;
        margin-left: 10px;
        margin-top: 20px;
        width: 260px;
        border: none;
        text-align: left;
        color: #757575;
    }
    .cont_form_login > h2 {
        margin-top: 110px;
        font-weight: 400;
        color: #757575;
    }
    .cont_form_login > a,.cont_form_sign_up > a  {
        color: #757575;
        position: relative;
        float: left;
        margin: 10px;
        margin-left: 30px;
    }
    .login{
        position: absolute;
        width: 100%;
        height: 100%;
        /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#cfd8dc+0,607d8b+100,b0bec5+100 */
        background: #aac4bc; /* Old browsers */
        background: -moz-linear-gradient(-45deg,  #aac4bc 0%, #eca8a8 100%, #eed5a9 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(-45deg,  #aac4bc 0%,#eca8a8 100%,#eed5a9 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(135deg, #aac4bc 0%,#eca8a8 100%,#eed5a9 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cfd8dc', endColorstr='#b0bec5',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */

    }
    .login_box{
        width:320px;
        height: 300px;
        position: absolute;
        left:50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
    .img_box{
        background: white;
        -webkit-background-clip: text;
        color: transparent;
        padding: 20px;
        position: absolute;
        left: 50%;
        transform: translate(-50%,-60%);
        font-size: 20px;

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

</style>
