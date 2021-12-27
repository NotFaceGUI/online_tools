<template>
  <div class="tag">
    {{ tab.tag }}
    {{ tab }}
    <!-- 在此处写表格内容 -->
    
    <like></like>
  </div>
</template>

<script>
import Like from "./Like.vue";
export default {
  components: { Like },
  name: "TagContent",
  // 通过父组件的传值，来分析需要获取的内容，这里current是tag下标，对应数据库中的下标
  props: {
    current: Number,
    tab: Object,
  },
};
</script>

<style scoped>
.tag {
  /* height: 1600px; */
  min-height: 32px;
  text-shadow: 1px 1px 2px #333;
  font-weight: 1000;
  font-size: 20px;
  color: white;
}
</style>