<template>
  <div class="page">
    <nav-top></nav-top>
    <div class="content">
      <radix v-if="currentName == 'radix'"></radix>
      <case v-if="currentName === 'case'"></case>
      <caculates v-if="currentName === 'caculate'"></caculates>
    </div>
    <floor></floor>
  </div>
</template>

<script>
import Floor from "../../components/Floor.vue";
import NavTop from "../../components/NavTop.vue";
import Caculates from "../card/components/Caculates.vue";
import Case from "../card/components/Case.vue";
import Radix from "../card/components/Radix.vue";
export default {
  components: { Floor, NavTop, Radix, Case, Caculates },
  name: "tool",
  data() {
    return {
      currentName: this.$route.params.name,
    };
  },
};
</script>

<style scoped>
.content {
  margin: 0 auto;
  margin-top: 30px;
  padding: 13px;
  /* overflow: hidden; */
  width: 70%;
  max-width: 1226px;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.8);
  background-image: linear-gradient(
      90deg,
      rgba(180, 180, 180, 0.15) 10%,
      rgba(0, 0, 0, 0) 10%
    ),
    linear-gradient(rgba(180, 180, 180, 0.15) 10%, rgba(0, 0, 0, 0) 10%);
  background-size: 15px 15px;
  box-shadow: 0 1px 5px #00000099;
  animation: set-in 1s ease;
}

@keyframes set-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}


</style>