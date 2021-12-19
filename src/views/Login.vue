<template>
  <div id="login">
    <!-- <div class="login"></div>
    <div class="reg"></div> -->
    <div id="mask" ref="mask">
      <div class="wall">
        <form action="" method="get" class="login_form" ref="login_form">
          <i class="icon" @click="move()"></i>
          <h2 class="h_log">登陆</h2>
          <br />
          <input type="text" placeholder="用户名" /><br />
          <input type="password" placeholder="密码" /><br />
          <input type="submit" value="登陆" />
        </form>
        <form action="" method="get" class="reg_form" ref="reg_form">
          <i class="icon_left" @click="move_left()"></i>
          <h2 class="h_reg">注册</h2>
          <br />
          <input type="text" placeholder="用户名" /><br />
          <input type="password" placeholder="密码" /><br />
          <input type="text" placeholder="邮箱" style="width: 200px" />
          <input
            type="button"
            value="发送"
            style="margin-left: 2px; padding: 0; width: 48px"
          /><br />
          <input type="text" placeholder="验证码" /><br />
          <input type="submit" value="注册" />
        </form>
      </div>
    </div>
  </div>
</template>
    
<script>
export default {
  data() {
    return {};
  },
  methods: {
    req() {
      this.axios
        .get("/api/DemoServlet", { params: { name: "abc" } })
        .then((res) => {
          console.log(res);
        });
    },
    move() {
      setTimeout(() => {
        this.$refs.login_form.style.transform = "translateY(-280px)";
        this.$refs.login_form.style.opacity = "0";
      }, 0);

      this.$refs.reg_form.style.display = "block";

      setTimeout(() => {
        this.$refs.reg_form.style.transform = "translateX(0px)";
        this.$refs.reg_form.style.opacity = "1";
      }, 0);
      this.$refs.mask.style.transform = "translateX(390px)";
      setTimeout(() => {
        this.$refs.login_form.style.display = "none";
      }, 700);
    },
  },
};
</script>

<style scoped>
#login {
  text-align: left; /*让div内部文字居中*/
  background-color: #fff;
  border-radius: 20px;
  width: 800px;
  height: 500px;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

#mask {
  position: absolute;
  /* overflow: hidden; */
  z-index: 999;
  top: -50px;
  left: 30px;
  width: 350px;
  height: 600px;
  background-color: #795a40;
  border-radius: 50px;
  transition: all 0.7s ease-in-out;
  box-shadow: -4px 2px 23px 2px rgba(0, 0, 0, 0.56);
  -webkit-box-shadow: -4px 2px 23px 2px rgba(0, 0, 0, 0.56);
  -moz-box-shadow: -4px 2px 23px 2px rgba(0, 0, 0, 0.56);
  transform: translateX(0px);
}

.login {
  border-radius: 20px;
  display: inline-block;
  width: 400px;
  height: 500px;
  background-color: rgb(255, 197, 158);
}

.reg {
  border-radius: 20px;
  display: inline-block;
  width: 400px;
  height: 500px;
  background-color: skyblue;
}

.wall {
  height: 100%;
  width: 100%;
  text-align: center;
  position: relative;
}

.reg_form {
  display: none;
  /* height: 600px; */
  width: 100%;
  position: absolute;
  top: 50%;
  margin-top: -165.5px;
  transform: translateY(200px);
  opacity: 0;
  transition: all 0.7s ease-in-out;
}

.login_form {
  /* display: none; */
  /* height: 600px; */
  width: 100%;
  position: absolute;
  top: 50%;
  margin-top: -105.5px;
  transform: translateY(0px);
  opacity: 1;
  transition: all 0.7s ease-in-out;
}

h2 {
  display: inline-block;
  color: rgb(226, 226, 226);
}

.icon {
  position: absolute;
  width: 20px;
  height: 20px;
  background: url("../assets/jt.svg") no-repeat;
  background-size: 20px 20px;
  right: 50px;
  top: 8px;
  transition: all 0.3s ease;
}

.icon_left {
  position: absolute;
  width: 20px;
  height: 20px;
  background: url("../assets/jt.svg") no-repeat;
  background-size: 20px 20px;
  transform: rotate(180deg);
  left: 50px;
  top: 8px;
  transition: all 0.3s ease;
}

input {
  margin: 10px 0;
  width: 250px;
  height: 40px;
  line-height: 40px;
  color: rgb(226, 226, 226);
  vertical-align: middle;
  font-size: 16px;
}

input::-webkit-input-placeholder {
  color: rgb(226, 226, 226);
}
</style>