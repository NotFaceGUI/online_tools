<template>
  <div class="card">
    <div class="glow">
      123456464564
      <like :id="id"></like>
    </div>
  </div>
</template>

<script>
import Like from "./Like.vue";
import { fun } from "../../../assets/js/card.js";
export default {
  components: { Like },
  name: "card",
  props: {
    id: Number,
  },
  mounted() {
    fun(this.id - 1);
  },
};
</script>

<style scoped>
.card {
  width: 100%;
  height: 150px;
  border-radius: 15px;
  background-color: #7fb2db9d;
  background-size: cover;
  box-shadow: 0 1px 5px #00000099;
  position: relative;
  transition-duration: 300ms;
  transition-property: transform, box-shadow;
  transition-timing-function: ease-out;
  transform: rotate3d(0);
  /* transition: all 0.5s ease; */
}

.card:hover {
  transition-duration: 150ms;
  /* transform: scale3d(1.1, 1.1, 1.1) !important; */
  z-index: 10;
  box-shadow: 0 5px 20px 5px #00000044;
}

.glow {
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 15px;

  height: 100%;
  width: 100%;
}

/* .card > .glow {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  background-image: radial-gradient(circle at 50% -20%, #ffffff22, #0000000f);
} */
</style>
