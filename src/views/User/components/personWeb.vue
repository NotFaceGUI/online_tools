<template>
  <div class="RightTopFrame">
    <span style="font-size: 30px; font-weight: bolder">个人主页:</span>
    <div class="RightTop">
      <dl class="form-group">
        <dt>
          <span class="labels">用户名:</span
          ><input
            id="user"
            type="text"
            class="InputStyle"
            readonly
            ondblclick="this.readOnly=false"
            onchange="this.readOnly=true"
            v-model="name"
          />
        </dt>
        <dt><label>你可以在此修改你喜欢的用户名哦~~~</label></dt>
      </dl>
      <dl class="form-group">
        <dt>
          <span class="labels">个人简介:</span>
          <textarea
            name="TextArea"
            id="TextArea"
            cols="30"
            rows="10"
            readonly
            v-model="person_describe"
            ondblclick="this.readOnly=false"
            onchange="this.readOnly=true"
          ></textarea>
        </dt>
        <dt><label>你可以在此修改你喜欢的个人简介哦~~~</label></dt>
      </dl>
      <button id="bt" type="button" @click="submit" class="btn">
        提交修改
      </button>
    </div>
    <div class="RightMain">基本信息</div>
  </div>
</template>
<script>
export default {
  name: "personWeb",

  props: {
    name: String,
    describe: String,
  },
  data() {
    return {
      person_describe: this.describe,
      password: "",
      alterPs: true,
      alterTA: false,
      alterName: false,
    };
  },
  methods: {
    submit() {
      if (sessionStorage.getItem("username")) {
        this.axios
          .post(
            "/online/api/UPServlet",
            this.qs.stringify({
              username: sessionStorage.getItem("username"),
              upusername: this.name,
              describe: this.person_describe,
            }),
            { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
          )
          .then((res) => {
            if (res.data) {
              sessionStorage.setItem("username", res.data.username);
              sessionStorage.setItem("describe", res.data.describe);
            }
          });
      } else {
        window.alert("您当前已退出登陆，请重新登陆账号再进行相应的修改！");
      }
    },
  },
};
</script>
<style scoped>
.RightTopFrame {
  /* background-color: rgb(221, 221, 221); */
  color: var(--bg-color);
  border-radius: 3%;
}
.RightTop {
  letter-spacing: normal;
  width: 100%;
  border-top: 3px #000000f3 dashed;
  margin-top: 1%;
}
.RightMain {
  margin-top: 1.8%;
  text-align: center;
  border: 1px;
  border-top: 3px #161414 dashed;
  border-bottom: 2px #c2c0c0 dashed;
}
dl {
  font-weight: bolder;
  letter-spacing: 3px;
}

input {
  margin-left: 2%;
  width: 67%;
  height: 27px;
  /* border:5px solid #3f3e3e; */
  padding-left: 0.5%;
}

input:focus {
  border: 2px solid var(--bg-color);
  background-color: rgba(29, 29, 29, 0);
}
.form-group {
  margin: 15px 0;
  margin-top: 7px;
  margin-right: 0px;
  margin-bottom: 15px;
  margin-left: 10px;
}
label {
  font-size: 10px;
  margin-left: 22%;
}
.labels {
  font-weight: bolder;
  font-size: 15px;
  margin-left: 1%;
  width: 80px;
  text-align: justify;
  text-align-last: justify;
  display: inline-block;
}
textarea {
  box-sizing: border-box;
  outline: none;
  margin-left: 2%;
  padding-left: 1%;
  width: 67%;
  font-size: 14px;
  resize: none;
  vertical-align: top;
  border: 2px solid rgba(0, 0, 0, 0);
  border-radius: 10px;
  height: 40px;
  /* border:6px solid #474747; */
  background-color: #c7c6c5;
  line-break: auto;
  transition: all 0.3s ease-in-out;
}

textarea:focus {
  border: 2px solid var(--bg-color);
  background-color: rgba(29, 29, 29, 0);
}

button {
  width: 100px;
  height: 30px;
  background-color: rgba(204, 204, 204, 0.287);
  border-radius: 6%;
}
.btn {
  margin-left: 23%;
}
</style>