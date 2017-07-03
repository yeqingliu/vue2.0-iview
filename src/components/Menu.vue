<template>
    <div id="menu">
        <header>
    <Icon type="model-s" class="logo"></Icon>
    <h1>车博士</h1>
        
        <router-link to='/' class="logoutbtn">退出</router-link>
  </header>


            <Menu>
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-paper"></Icon>
                        报警管理
                    </template>
                    <Menu-item name="1-1"><router-link to='/alarmPoint'>报警点和电子围栏管理</router-link></Menu-item>
                    <Menu-item name="1-2"><router-link to='/alarmRule'>报警规则管理</router-link></Menu-item>
                    <Menu-item name="1-3"><router-link to='/generateTickets'>生成罚单定时任务</router-link></Menu-item>
                    <Menu-item name="1-4"><router-link to='/ticketsManage'>罚单管理</router-link></Menu-item>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-people"></Icon>
                        任务调度
                    </template>
                    <Menu-item name="2-1"><router-link to='/vehicleManage'>车辆管理</router-link></Menu-item>
                    <Menu-item name="2-2"><router-link to='/lineList'>线路列表</router-link></Menu-item>
                    <Menu-item name="2-3"><router-link to='/lineEdit'>线路新增、编辑</router-link></Menu-item>
                    <Menu-item name="2-4"><router-link to='/timeList'>日期任务调度列表</router-link></Menu-item>
                    <Menu-item name="2-5"><router-link to='/taskEdit'>任务调度新增、编辑</router-link></Menu-item>
                </Submenu>
               
            </Menu>
      
      
   
    
    </div>
</template>
<script>
    export default {
        data () {
            return {
                theme2: 'light'
            }
        }
    }
</script>
<style>
header {
  width: 100%;
  height: 60px;
  background-color: #3588cb;
  margin-top: -60px;
  color:#fff;
  line-height: 60px;
}
header .logo{
  float: left;
  font-size: 24px;
  line-height: 60px;
  margin-left: 10px;
}
header h1{
  float: left;
  margin-left: 15px;
}
.logoutbtn{
  float: left;
  margin-left: 80%;
  font-size: 16px;
  cursor:pointer;
  color: #fff;
}
ul.ivu-menu{
    width: 170px !important;
}
div.ivu-menu-submenu-title{
    padding-left: 0 !important;
}

.ivu-menu-item{
    padding-left: 0 !important;
}
.ivu-menu-vertical.ivu-menu-light{
    height: 550px;
    background-color: #f0f0f3 !important;
    /*color:#fff;*/
}

</style>
