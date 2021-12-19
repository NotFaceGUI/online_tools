<template>
    <div id="nav">
      <div class="left">
        <router-link to="/" id="icon"> 在线工具 </router-link>
      </div>
      <div class="right">
        <router-link to="/register"> 注册 </router-link>
        <span>|</span>
        <router-link to="/login"> 登陆 </router-link>
      </div>
      <div class="clear"></div>
    </div>
</template>


<script>
export default {
    name:"NavTop",
}
</script>