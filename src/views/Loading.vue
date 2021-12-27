<template>
  <div class="loading"></div>
</template>
 
<script>
export default {
  name: "Loading",
};
</script>
 
<style scoped>
.loading {
  position: absolute;
  top: 254px;
  left: calc(50% - 32px);
  background: url("../assets/loading.svg") center center no-repeat;
  width: 64px;
  height: 64px;
  z-index: 1000;
  animation: rotate 1s linear infinite;
}
@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
