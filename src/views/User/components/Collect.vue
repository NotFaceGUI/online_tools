<template>
  <div>
    <div class="back">
      <span style="font-size: 18px; font-weight: bolder">个人收藏:</span>
      <div v-show="collects" class="collect">
        你好我是你的收藏
        <br />
        <br />
        <br />
        <br />
        我底下
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    collects: Boolean,
  },
};
</script>
<style scoped>
.back {
  color: var(--bg-color);
  margin-top: 1%;
  /* background-color: rgb(65, 66, 66); */
  border-radius: 5px;
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
.collect {
  margin-top: 2%;
  border-top: 2px #c2c0c0 dashed;
  background-color: rgba(185, 211, 208, 0.192);
  border-radius: 4px;
  position: relative;
  animation-name: right;
  animation-duration: 0.5s;
}
@keyframes right {
  0% {
    opacity: 0;
    left: 0px;
    top: 300px;
  }

  80% {
      opacity: 0.8;
  }

  100% {
    opacity: 1;
    left: 0px;
    top: 0px;
  }
}
</style>