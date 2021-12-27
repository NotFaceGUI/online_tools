<template>
  <div>
    <transition name="bounce">
      <div :class="{ msg, error: color, right: top > 450 }" v-if="show">
        {{ msg }}
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "msg",
  props: {
    msg: String,
    show: Boolean,
    color: Boolean,
    top: Number,
  },
};
</script>

<style scoped>
.msg {
  color: white;
  position: absolute;
  top: 450px;
  left: calc(50% - 90px);
  z-index: 10;
  width: 180px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 10px;
  background: #4aff508f;
  box-shadow: 0px 2px 18px 1px rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: 0px 2px 18px 1px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0px 2px 18px 1px rgba(0, 0, 0, 0.4);
  transition: top 0.5s ease-in-out;
}

.right {
  top: 480px;
}

.error {
  background: rgb(204, 14, 14);
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