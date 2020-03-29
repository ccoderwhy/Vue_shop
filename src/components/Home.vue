<template>

    <el-container class="home-container">
        <!-- 头部区域 -->
        <el-header>
            <div>
                <img src="" alt="">
                <span>米修后台管理系统</span>
            </div>
            <el-button  @click="clearToken">退出</el-button>
        </el-header>
        <!-- 页面主体区域 -->
        <el-container>
            <!-- 侧边栏 -->
            <el-aside :width="isCollapse ? '64px ': '200px'">
                <div class="toggle-button" @click="toggleClick">|||</div>
                <el-menu
                        text-color="black"
                        active-text-color="#409eff"
                        unique-opened
                        :collapse="isCollapse"
                        :collapse-transition="false"
                        router
                        :default-active="activePath">
                    <!-- 一级菜单 -->
                    <el-submenu :index="item.id + ''" v-for="item in menulist" :key="item.id">
                        <!-- 一级菜单的模板区域 -->
                        <template slot="title">
                            <!-- 图标 -->
                            <i :class="iconsObj[item.id]"></i>
                            <!-- 文本 -->
                            <span>{{item.authName}}</span>
                        </template>
                        <!-- 二级菜单 -->
                        <el-menu-item :index="'/' + subItem.path " v-for="subItem in item.children" :key="subItem.id"
                                      @click="saveNavState('/' + subItem.path)">
                            <template slot="title">
                                <!-- 图标 -->
                                <i class="el-icon-menu"></i>
                                <!-- 文本 -->
                                <span>{{subItem.authName}}</span>
                            </template>
                        </el-menu-item>
                    </el-submenu>

                </el-menu>
            </el-aside>
            <!-- 右侧内容 -->
            <el-main>
                <!-- 路由占位符 -->
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>



</template>

<script>
    export default {
        data(){
            return{
                //左侧菜单数据
                menulist:[],
                iconsObj:{
                    '125':'iconfont icon-GroupCopy',
                    '103':'iconfont icon-lifangtilitiduomiantifangkuai',
                    '101':'iconfont icon-shangpin',
                    '102':'iconfont icon-dingdan',
                    '145':'iconfont icon-shujutongji'
                },
                isCollapse: false,
                //被激活的链接地址
                activePath:''
            }

        },
        created(){
            this.getMenuList(),
                this.activePath = window.sessionStorage.getItem('activePath')
        },
        methods:{
            clearToken(){
                window.sessionStorage.clear()
                this.$router.push('/login')
            },
            //获取所有菜单
            async getMenuList(){
                const {data:res} = await this.$http.get('menus')
                if(res.meta.status !==200) return this.$message.error(res.meta.$message)
                this.menulist = res.data
            },
            //点击按钮切换折叠展开
            toggleClick(){
                this.isCollapse = !this.isCollapse
            },
            //保存链接的激活状态
            saveNavState(activePath){
                window.sessionStorage.setItem('activePath',activePath)
                this.activePath = activePath
            }
        }
    }
</script>

<style lang="less" scoped>
    .home-container{
        height: 100%;
    }
    .el-button{
        background: -moz-linear-gradient(-45deg,  #aac4bc 0%, #eca8a8 100%, #eed5a9 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(-45deg,  #aac4bc 0%,#eca8a8 100%,#eed5a9 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(135deg, #e0eafc 0%,#cfdef3 100%,#dbdbdb 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        opacity: 0.8;
    }
    .el-menu-item{
        background: -moz-linear-gradient(-45deg,  #aac4bc 0%, #eca8a8 100%, #eed5a9 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(-45deg,  #aac4bc 0%,#eca8a8 100%,#eed5a9 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(135deg, #e0eafc 0%,#cfdef3 100%,#dbdbdb 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        /*opacity: 0.8;*/

    }
    .el-menu{
        background: -moz-linear-gradient(-45deg,  #aac4bc 0%, #eca8a8 100%, #eed5a9 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(-45deg,  #aac4bc 0%,#eca8a8 100%,#eed5a9 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(135deg, #aac4bc 0%,#eca8a8 100%,#eed5a9 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */

    }
    .el-header{
        background: -moz-linear-gradient(-45deg,  #aac4bc 0%, #eca8a8 100%, #eed5a9 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(-45deg,  #aac4bc 0%,#eca8a8 100%,#eed5a9 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(135deg, #aac4bc 0%,#eca8a8 100%,#eed5a9 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */

        display: flex;
        justify-content: space-between;
        align-items: center;
        color: aliceblue;
        font-size: 25px;
        > div {
            margin-left: 6%;
        }
    }
    .el-aside{
        background: -moz-linear-gradient(-45deg,  #aac4bc 0%, #eca8a8 100%, #eed5a9 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(-45deg,  #aac4bc 0%,#eca8a8 100%,#eed5a9 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(135deg, #aac4bc 0%,#eca8a8 100%,#eed5a9 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */

        .el-menu{
            border-right: none;
        }
    }
    .el-main{
        background: linear-gradient(135deg, #aac4bc 0%,#eca8a8 100%,#eed5a9 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    }
    .iconfont{
        margin-right: 10px;
    }
    .toggle-button{
        background: -moz-linear-gradient(-45deg,  #aac4bc 0%, #eca8a8 100%, #eed5a9 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(-45deg,  #aac4bc 0%,#eca8a8 100%,#eed5a9 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(135deg, #aac4bc 0%,#eca8a8 100%,#eed5a9 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */

        color: aliceblue;
        text-align: center;
        font-size: 10px;
        line-height: 24px;
        letter-spacing: 0.2em;
        cursor: pointer;
    }
</style>
