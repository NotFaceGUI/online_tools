<template>
  <transition name="bounce">
    <div class="error">请登录</div>
  </transition>
</template>

<script>
export default {
  name: "error",
};
</script>

<style scoped>
.error {
  position: absolute;
  background-color: rgb(196, 29, 29);
  border-radius: 25px;
  top: 40px;
  left: 10px;
  width: 125px;
  height: 25px;
  line-height: 25px;
  z-index: 999;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>