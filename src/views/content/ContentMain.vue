<template>
  <div class="content">
    <div class="tab">
      <ul class="tab-tilte">
        <li
          v-for="(item, index) in tab_title"
          :class="{ select: current == index }"
          @click="
            current = index;
            tab.tag = tab_title[current];
            req(current);
          "
          :key="item"
        >
          {{ item }}
        </li>
      </ul>
      <div class="clear"></div>
    </div>
    <div class="tab_content">
      <tag-content :current="current" :tab="tab"></tag-content>
    </div>
  </div>
</template>

<style scoped>
.tab-tilte {
  list-style: none;
  color: #000;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  font-weight: bold;
}

.tab-tilte li {
  box-sizing: border-box;
  float: left;
  width: 80px;
  cursor: pointer;
  transition: background-color 0.2s;
  /* border-bottom: 2px solid rgb(255, 255, 255); */
}

.tab-tilte .select {
  background-color: #795a40;
  color: #fff;
}

.content {
  margin: 0 auto;
  overflow: hidden;
  width: 80%;
  border-radius: 15px;
  background-color: #fff;
}
</style>

<script>
import TagContent from "./components/TagContent.vue";
export default {
  components: { TagContent },
  name: "ContentMain",
  data() {
    return {
      tab_title: ["全部", "工具"],
      tab: {
        tag: "全部",
        data: {},
      },
      current: 0,
    };
  },
  mounted() {
    // 默认获取全部数据
    this.axios
      .get("/api/DemoServlet", { params: { tag: this.tab.tag } })
      .then((res) => {
        this.tab.data = res.data;
      });
  },
  methods: {
    // 当切换值的时候，发送请求获取对应的数据
    req(index) {
      this.axios
        .get("/api/DemoServlet", { params: { tag: this.tab.tag } })
        .then((res) => {
          console.log(index);
          this.tab.data = res.data;
        });
    },
  },
};
</script>