<template>
  <div class="card">
    <div class="glow">
      <div class="img"></div>
      <div class="title">
        <span>hex转字符串</span>
      </div>
      <!-- <p>/p> -->
      <div class="like">
        <like :id="id"></like>
        <span>123人收藏</span>
      </div>
      <div class="desc">
        <span>hex和字符串的互相转换</span>
      </div>
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
    title: String,
    desc: String,
    img: String,
    routingSrc: String,
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
  background-color: #242424de;
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

.img {
  display: inline-block;
  position: absolute;
  top: calc(50% - 32px);
  left: 10px;
  width: 64px;
  height: 64px;
  background: url("../../../assets/icon/str.png") no-repeat;
}

.like {
  font-size: 14px;
  vertical-align: middle;
  font-weight: normal;
  position: absolute;
  text-align: left;
  height: 40px;
  top: 60px;
  left: 70px;
}

.title {
  position: absolute;
  font-size: 30px;
  top: 20px;
  left: 81px;
}

.desc {
  position: absolute;
  top: 100px;
  left: 81px;
  font-size: 16px;
  font-weight: normal;
}
</style>
