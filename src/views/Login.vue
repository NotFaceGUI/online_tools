<template>
  <div>
    <nav-top></nav-top>
    <div id="login">
      <!-- <div class="login"></div>
      <div class="reg"></div> -->
      <div id="mask" ref="mask">
        <msg :msg="msg" :show="show" :color="color" :top="top"></msg>
        <div class="wall">
          <form action="" method="get" class="login_form" ref="login_form">
            <i class="icon" @click="move()"></i>
            <h2 class="h_log">登录</h2>
            <br />
            <input type="text" placeholder="用户名" v-model="username" /><br />
            <input
              type="password"
              placeholder="密码"
              v-model="password"
            /><br />
            <!-- <input type="button" value="登录" />
            <br /> -->
            <button class="login_button" type="button" @click="login($event)">
              登录
            </button>
          </form>
          <form action="" method="get" class="reg_form" ref="reg_form">
            <i class="icon_left" @click="move_left()"></i>
            <h2 class="h_reg">注册</h2>
            <br />
            <input
              type="text"
              placeholder="用户名"
              v-model="stateMachine[0].text"
              @blur="judgeUser(0)"
              @keyup.enter="judgeUser(0)"
              :class="{ input_error: stateMachine[0].state }"
            /><br />
            <div class="reg_error" ref="user_msg">
              <span>{{ stateMachine[0].msg }}</span>
            </div>
            <input
              type="password"
              placeholder="密码"
              v-model="stateMachine[1].text"
              @blur="judgePassword(1)"
              @keyup.enter="judgePassword(1)"
              :class="{ input_error: stateMachine[1].state }"
            /><br />
            <div class="reg_error" ref="password_msg">
              <span>{{ stateMachine[1].msg }}</span>
            </div>
            <input
              type="text"
              placeholder="邮箱"
              v-model="stateMachine[2].text"
              @blur="judgeEmail(2)"
              @keyup.enter="judgeEmail(2)"
              :class="{ input_error: stateMachine[2].state }"
              style="width: 200px"
            />
            <input
              type="button"
              value="发送"
              @click="sendEmail()"
              style="margin-left: 2px; padding: 0; width: 48px"
            /><br />
            <div class="reg_error" ref="email_msg">
              <span>{{ stateMachine[2].msg }}</span>
            </div>
            <input
              type="text"
              placeholder="验证码"
              v-model="stateMachine[3].text"
              @blur="judgeCode(3)"
              @keyup.enter="judgeCode(3)"
              :class="{ input_error: stateMachine[3].state }"
            /><br />
            <div class="reg_error" ref="code_msg">
              <span>{{ stateMachine[3].msg }}</span>
            </div>
            <!-- <input type="submit" value="注册" /> -->
            <button class="login_button" type="button" @click="register()">
              注册
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
    
<script>
import NavTop from "../components/NavTop.vue";
import Msg from "./Msg.vue";
export default {
  components: { NavTop, Msg },
  data() {
    return {
      //=======登录========
      username: "",
      password: "",
      msg: "",
      show: false,
      color: false,
      top: 450,
      //=======注册========
      stateMachine: [
        {
          text: "",
          msg: "",
          arrMsg: [
            "用户名不能为空",
            "用户名过短，最短长度应为4",
            "用户名过长，最大长度应为16",
            "用户名不可包含除-和_以外的特殊字符",
            "用户名以被注册",
          ],
          state: false,
          reg: /^[a-zA-Z0-9_-]{4,16}$/,
        },
        {
          text: "",
          msg: "",
          arrMsg: [
            "密码不能为空",
            "密码太短，最短长度应为6",
            "密码太长，最大长度应为20",
            "密码至少包含数字和英文",
          ],
          state: false,
          reg: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/,
        },
        {
          text: "",
          msg: "",
          arrMsg: ["邮箱不能为空", "邮箱格式错误", "该邮箱已被使用"],
          state: false,
          reg: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
        },
        {
          text: "",
          msg: "",
          arrMsg: ["验证码不能为空", "验证码错误"],
          state: false,
          reg: "",
        },
      ],
    };
  },
  methods: {
    req() {
      this.axios
        .get("/online/api/DemoServlet", { params: { name: "abc" } })
        .then((res) => {
          console.log(res);
        });
    },

    // 发送登陆请求，是否登陆成功
    login(e) {
      const button = e.currentTarget;
      button.setAttribute("disabled", true);
      this.axios
        .post(
          "/online/api/LoginServlet",
          this.qs.stringify({
            username: this.username,
            password: this.password,
          }),
          { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
        )
        .then((res) => {
          if (res.data.state) {
            sessionStorage.setItem("username", this.username);
            // 登陆成功挑战到主页
            this.color = false;
            this.msg = "登陆成功，准备跳转~";
            this.show = true;
            setTimeout(() => {
              this.show = false;
              setTimeout(() => {
                this.$router.push("/");
              }, 700);
            }, 1500);
          } else {
            this.color = true;
            this.msg = "用户名或者密码错误";
            this.show = true;
            setTimeout(() => {
              this.show = false;
              setTimeout(() => {
                // this.$router.push("/");
                button.removeAttribute("disabled");
              }, 600);
            }, 1500);
          }
        });
    },
    sendEmail() {
      this.judgeEmail(2);
      if (this.stateMachine[2].msg == "") {
        this.axios.post(
          "/online/api/SendEmail",
          this.qs.stringify({
            email: this.stateMachine[2].text,
          }),
          { withCredentials: true },
          { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
        );
      }
    },
    //==================================
    judgeUser(index) {
      let reg = this.stateMachine[index].reg;
      if (!reg.test(this.stateMachine[index].text)) {
        this.stateMachine[index].state = true;

        if (this.stateMachine[index].text.length < 4) {
          if (this.stateMachine[index].text == "") {
            this.stateMachine[index].msg = this.stateMachine[index].arrMsg[0];
          } else {
            this.stateMachine[index].msg = this.stateMachine[index].arrMsg[1];
          }
        } else if (this.stateMachine[index].text.length > 16) {
          this.stateMachine[index].msg = this.stateMachine[index].arrMsg[2];
        } else {
          this.stateMachine[index].msg = this.stateMachine[index].arrMsg[3];
        }
        this.$refs.user_msg.style.height = "20px";
      } else {
        this.axios
          .get("/online/api/Unique", {
            params: {
              text: this.stateMachine[index].text,
              check: "username",
            },
          })
          .then((res) => {
            if (res.data.state) {
              this.unifiedOperation(index);
              this.$refs.user_msg.style.height = "0px";
            } else {
              this.stateMachine[index].state = true;
              this.$refs.user_msg.style.height = "20px";
              this.stateMachine[index].msg = this.stateMachine[index].arrMsg[4];
            }
          });
      }
    },

    judgeEmail(index) {
      let reg = this.stateMachine[index].reg;
      if (!reg.test(this.stateMachine[index].text)) {
        this.stateMachine[index].state = true;
        if (this.stateMachine[index].text == "") {
          this.stateMachine[index].msg = this.stateMachine[index].arrMsg[0];
        } else {
          this.stateMachine[index].msg = this.stateMachine[index].arrMsg[1];
        }
        this.$refs.email_msg.style.height = "20px";
      } else {
        this.axios
          .get("/online/api/Unique", {
            params: {
              text: this.stateMachine[index].text,
              check: "email",
            },
          })
          .then((res) => {
            if (res.data.state) {
              this.unifiedOperation(index);
              this.$refs.email_msg.style.height = "0px";
            } else {
              this.stateMachine[index].state = true;
              this.$refs.email_msg.style.height = "20px";
              this.stateMachine[index].msg = this.stateMachine[index].arrMsg[2];
            }
          });
      }
    },

    judgePassword(index) {
      let reg = this.stateMachine[index].reg;
      if (!reg.test(this.stateMachine[index].text)) {
        this.stateMachine[index].state = true;
        if (this.stateMachine[index].text.length < 6) {
          if (this.stateMachine[index].text == "") {
            this.stateMachine[index].msg = this.stateMachine[index].arrMsg[0];
          } else {
            this.stateMachine[index].msg = this.stateMachine[index].arrMsg[1];
          }
        } else if (this.stateMachine[index].text.length > 20) {
          this.stateMachine[index].msg = this.stateMachine[index].arrMsg[2];
        } else {
          this.stateMachine[index].msg = this.stateMachine[index].arrMsg[3];
        }
        this.$refs.password_msg.style.height = "20px";
      } else {
        this.unifiedOperation(index);
        this.$refs.password_msg.style.height = "0px";
      }
    },
    judgeCode(index) {
      if (this.stateMachine[index].text == "") {
        this.stateMachine[index].state = true;
        this.stateMachine[index].msg = this.stateMachine[index].arrMsg[0];
        this.$refs.code_msg.style.height = "20px";
      } else {
        this.unifiedOperation(index);
        this.$refs.code_msg.style.height = "0px";
      }
    },
    register() {
      this.judgeUser(0);
      this.judgePassword(1);
      this.judgeEmail(2);
      this.judgeCode(3);
      if (
        this.stateMachine[0].msg == "" &&
        this.stateMachine[0].msg == "" &&
        this.stateMachine[1].msg == "" &&
        this.stateMachine[2].msg == "" &&
        this.stateMachine[3].msg == ""
      ) {
        console.log("开始注册");
        //发送ajax请求
        this.axios
          .post(
            "/online/api/RegServlet",
            this.qs.stringify({
              username: this.stateMachine[0].text,
              password: this.stateMachine[1].text,
              email: this.stateMachine[2].text,
              check: this.stateMachine[3].text,
            }),
            { withCredentials: true },
            { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
          )
          .then((res) => {
            console.log(res.data);
            if (res.data.desc === "验证码错误") {
              this.stateMachine[3].state = true;
              this.stateMachine[3].msg = this.stateMachine[3].arrMsg[1];
              this.$refs.code_msg.style.height = "20px";
            } else if (res.data.desc === "注册成功！") {
              this.color = false;
              this.msg = "success 跳转登录页中~";
              this.show = true;
              setTimeout(() => {
                this.show = false;
                setTimeout(() => {
                  this.move_left();
                }, 700);
              }, 1500);
            }
          });
      }
    },

    unifiedOperation(index) {
      this.stateMachine[index].state = false;
      this.stateMachine[index].msg = "";
    },

    //==========mask元素位移动画==========
    move() {
      setTimeout(() => {
        this.$refs.login_form.style.transform = "translateY(-280px)";
        this.$refs.login_form.style.opacity = "0";
      }, 0);

      console.log(this.$refs.login_form);
      this.$refs.reg_form.style.display = "block";
      this.top = 480;
      setTimeout(() => {
        this.$refs.reg_form.style.transform = "translatex(0px)";
        this.$refs.reg_form.style.opacity = "1";
      }, 0);
      this.$refs.mask.style.transform = "translateX(390px)";
      setTimeout(() => {
        this.$refs.login_form.style.display = "none";
        this.username = "";
        this.password = "";
      }, 700);
    },
    move_left() {
      this.$refs.mask.style.transform = "translateX(0px)";

      this.$refs.login_form.style.display = "block";

      setTimeout(() => {
        this.$refs.login_form.style.transform = "translateY(0px)";
        this.$refs.login_form.style.opacity = "1";
      }, 0);

      this.top = 450;
      setTimeout(() => {
        this.$refs.reg_form.style.transform = "translateY(300px)";
        this.$refs.reg_form.style.opacity = "0";
      }, 0);

      setTimeout(() => {
        this.$refs.reg_form.style.display = "none";
        this.stateMachine = this.$options.data().stateMachine;
        this.$refs.code_msg.style.height = "0px";
        this.$refs.email_msg.style.height = "0px";
        this.$refs.password_msg.style.height = "0px";
        this.$refs.user_msg.style.height = "0px";
      }, 700);
    },
    //==================================
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

#login::after {
  content: "";
  border-radius: 20px;
  width: 800px;
  height: 500px;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("../assets/bg.png") #b48c6e repeat top !important;
  /* filter: url(blur.svg#blur); */ /* FireFox, Chrome, Opera */

  -webkit-filter: blur(5px); /* Chrome, Opera */
  -moz-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px);

  filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=10, MakeShadow=false); /* IE6~IE9 */
}

#mask {
  position: absolute;
  overflow: hidden;
  z-index: 10;
  top: -50px;
  left: 30px;
  width: 350px;
  height: 600px;
  /* background-color: #70533c; */
  background: #926844;
  background: -moz-linear-gradient(
    -45deg,
    #926844 1%,
    #70533c 20%,
    #70533c 50%,
    #70533c 50%,
    #70533c 80%,
    #926844 100%
  );
  background: -webkit-linear-gradient(
    -45deg,
    #926844 1%,
    #70533c 20%,
    #70533c 50%,
    #70533c 50%,
    #70533c 80%,
    #926844 100%
  );
  background: linear-gradient(
    135deg,
    #926844 1%,
    #70533c 20%,
    #70533c 50%,
    #70533c 50%,
    #70533c 80%,
    #926844 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#926844', endColorstr='#926844',GradientType=1 );

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

.login_button {
  box-sizing: border-box;
  margin-top: 10px;
  background-color: #ac7e55;
  color: #fff;
  border-radius: 5px;
  border: 0px;
  width: 250px;
  height: 40px;
  font-size: 16px;
  transition: all 0.2s ease-out;
}

.login_button:hover {
  background-color: #926844;
}

.login_button:active {
  transform: scale(95%);
}

.reg {
  border-radius: 20px;
  display: inline-block;
  width: 400px;
  height: 500px;
  background-color: skyblue;
}

.input_error {
  border: 2px red solid;
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

.reg_error {
  font-size: 14px;
  overflow: hidden;
  height: 0px;
  color: rgb(255, 95, 67);
  transition: all 0.4s ease-in-out;
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
  transition: all 0.3s;
}

h2:hover {
  letter-spacing: 1em;
  transform: translateX(0.5em);
}

.icon {
  font-style: normal;
  width: 20px;
  height: 20px;
  position: absolute;
  color: white;
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