<template>
  <div>
    <nav-top></nav-top>
    <search :v="this.$route.query.value"></search>
    <content-main></content-main>
    <floor></floor>
  </div>
</template>

<script>
import Floor from '../components/Floor.vue';
import NavTop from '../components/NavTop.vue';
import Search from "../components/Search.vue";
import ContentMain from "./content/ContentMain.vue";

export default {
  components: { Search, ContentMain, Floor, NavTop,},
  mounted(){
    document.body.style.overflow = "";
  }
};
</script>

<style scoped>
</style>