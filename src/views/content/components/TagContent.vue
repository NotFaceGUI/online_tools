<template>
  <div class="tag">
    <!-- {{ tab.tag }}
    {{ tab }} -->
    <!-- 在此处写表格内容 -->
    <div class="grid">
      <card v-for="i in 100" :key="i" :id="i"></card>
    </div>
    <div class="bottomLine">
      <a href="https://github.com/NotFaceGUI" class="icon"></a>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  components: { Card },
  name: "TagContent",
  // 通过父组件的传值，来分析需要获取的内容，这里current是tag下标，对应数据库中的下标
  props: {
    current: Number,
    tab: Object,
  },
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6],
    };
  },
};
</script>

<style scoped>
.tag {
  /* height: 800px; */
  min-height: 32px;
  text-shadow: 1px 1px 2px #333;
  font-weight: 1000;
  font-size: 20px;
  color: white;
  transition: all 0.5s ease-in-out;
}

.grid {
  margin: 13px;
  display: grid;
  gap: 13px;
  grid-template-columns: repeat(auto-fit, minmax(285px, 1fr));
  justify-content: space-evenly;
}

.bottomLine {
  box-sizing: border-box;
  color: var(--bg-color);
  font-weight: normal;
  text-shadow: 0 0 0;
  height: 35px;
  border-top: 2px #2424248c dashed;
}

.icon {
  margin: 5px 0;
  text-decoration: none;
  display: inline-block;
  width: 24px;
  height: 24px;
  background: url("../../../assets/icon/github.png") no-repeat;
}
</style>