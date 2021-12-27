<template>
  <div id="nav">
    <div class="left">
      <router-link to="/" id="icon"> 在线工具 </router-link>
    </div>
    <div class="right">
      <div v-show="name == null">
        <router-link to="/login"> 登陆/注册 </router-link>
      </div>
      <div v-if="name != null">
        <router-link :to="{ name: 'user', params: { name: name } }">
          欢迎，{{ name }}
        </router-link>
        <span @click="exit()">退出登陆</span>
      </div>
    </div>
    <div class="clear"></div>
  </div>
</template>


<script>
export default {
  name: "NavTop",
  created() {
    if (sessionStorage.getItem("username") == null) {
      this.name = null;
    } else {
      this.name = sessionStorage.getItem("username");
    }
  },
  data() {
    return {
      name: null,
    };
  },
  methods: {
    exit() {
      console.log(123);
      sessionStorage.removeItem("username");
      this.name = sessionStorage.getItem("username");
    },
  },
};
</script>

<style scoped>
* {
  -webkit-touch-callout: none; /*系统默认菜单被禁用*/
  -webkit-user-select: none; /*webkit浏览器*/
  -khtml-user-select: none; /*早期浏览器*/
  -moz-user-select: none; /*火狐*/
  -ms-user-select: none; /*IE10*/
  user-select: none;
}

span {
  margin-left: 10px;
  font-weight: bold;
  color: #ccc;
}

span:hover {
  color: white;
}

.nav {
  z-index: 999;
}
</style>