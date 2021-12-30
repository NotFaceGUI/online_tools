<template>
  <div class="page">
    <nav-top></nav-top>
    <div class="content">
      {{ currentName }}
    </div>
    <floor></floor>
  </div>
</template>

<script>
import Floor from "../../components/Floor.vue";
import NavTop from "../../components/NavTop.vue";
export default {
  components: { Floor, NavTop },
  name: "tool",
  data() {
    return {
      currentName: this.$route.params.name,
    };
  },
};
</script>