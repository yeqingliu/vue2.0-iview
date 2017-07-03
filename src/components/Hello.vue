<template>
  <div class="hello">
       <h2>车博士</h2>
    <p class="word">让您的管理更便捷、更高效</p>
    <Tabs :animated="false">
          <Tab-pane label="注册" class="sign signin">
          <div class="signinbox">
            <p class="name">
              <input type="text" class="loginName">
            </p>
            <p class="tel">
              <input type="text" class="telnum">
            </p>
            <p class="password">
              <input type="password" class="loginPassword">
            </p>
            </div>
            <!-- <p class="loginSubmit" id="loginSubmit">登录</p> -->
            <router-link to="/menu" class="signinSubmit" id="signinSubmit">
              <a class="signinLink">注册</a>
            </router-link>
          </Tab-pane>
          <Tab-pane label="登录" class=" sign signin">
            <div class="signupbox">
            <p class="name">
              <!-- <span class="numvalue">账号</span> -->
              <input type="text" class="loginName" >
            </p>
            <p class="password"  value="密码">
              <input type="password" class="loginPassword">
            </p>
            </div>
            <!-- <p class="loginSubmit" id="loginSubmit">登录</p> -->
            <router-link to="/menu" class="signupSubmit" id="signupSubmit">
              <a class="signupLink">登录</a>
            </router-link>
          </Tab-pane>

    </Tabs>
  


   
    
  </div>
</template>

<script>
export default {
  name: 'hello',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
div.hello h2{
  font-size: 40px;
  color:#3e8dff;
  margin-bottom: 10px;
  font-family: "微软雅黑";
}
div.hello p.word{
  font-size: 18px;
  color:#666;
  margin-bottom: 10px;
}




</style>
<style>

  .ivu-tabs-bar{
    width: 50%;
    margin-left: 45%;
    border:0;
    margin-bottom: 30px;
  }
  .ivu-tabs-nav-container{
  font-size: 18px;
  font-family: "微软雅黑";
  color:#999;
  }

 
.loginName{
width:100%;
height:100%;
}
input{
  border: 0;
  outline:none;
}
.signinbox{
  font-family: "微软雅黑";
  margin-left: 40.5%;
  width: 20%;
  height: 123px;
  border:1px solid #ccc;
  border-radius: 3px;
}
.signinbox p.name{
  height: 40px;
  border-bottom: 1px solid #ccc;
}
.signinbox p.tel{
  height: 40px;
  border-bottom: 1px solid #ccc;
}
.signinbox p.tel input{
  width: 100%;
  height: 100%;
}
.signinbox p.password{
  height: 40px;
}
.signinbox  input.loginPassword{
  width: 100%;
  height: 100%;
}
.signinSubmit{
  margin-top: 30px;
 margin-left: 40.5%;
 display: block;
  width: 20%;
  height: 40px;
  border-radius: 3px;
  text-align: center;
  line-height: 40px;
 
  background-color: #3e8dff;
}
.signinSubmit a{
  display: block;
  color:#fff;
  font-size: 16px;
  
}
.signupbox{
  font-family: "微软雅黑";
  margin-left: 40.5%;
  width: 20%;
  height: 83px;
  border:1px solid #ccc;
  border-radius: 3px;
}
.signupbox p.name{
  height: 40px;
  border-bottom: 1px solid #ccc;

}
.signupbox p.name input{
  padding-left: 1%;
  color:#ccc;
}
.signupSubmit{
  margin-top: 30px;
 margin-left: 40.5%;
 display: block;
  width: 20%;
  height: 40px;
  border-radius: 3px;
  text-align: center;
  line-height: 40px;
 
  background-color: #3e8dff;
}
.signupSubmit a{
  display: block;
  color:#fff;
  font-size: 16px;
  
}
</style>
