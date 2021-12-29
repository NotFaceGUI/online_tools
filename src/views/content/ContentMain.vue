<template>
  <div class="content">
    <transition name="fade">
      <loading v-if="isLoading"></loading>
    </transition>
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
  color: var(--bg-color);
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  font-weight: bold;
}

.tab-tilte li {
  margin: 10px 0 0 10px;
  box-sizing: border-box;
  float: left;
  width: 80px;
  cursor: pointer;
  transition: background-color 0.2s;
  border-radius: 40px;
  /* border-bottom: 2px solid rgb(255, 255, 255); */
}

.tab-tilte .select {
  background-color: var(--bg-color);
  color: #fff;
}

.content {
  margin: 0 auto;
  /* overflow: hidden; */
  width: 70%;
  max-width: 1226px;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.8);
  background-image: linear-gradient(
      90deg,
      rgba(180, 180, 180, 0.15) 10%,
      rgba(0, 0, 0, 0) 10%
    ),
    linear-gradient(rgba(180, 180, 180, 0.15) 10%, rgba(0, 0, 0, 0) 10%);
  background-size: 15px 15px;
  box-shadow: 0 1px 5px #00000099;
  animation: set-in 1s ease;
}

@keyframes set-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>

<script>
import Loading from "../Loading.vue";
import TagContent from "./components/TagContent.vue";
export default {
  components: { TagContent, Loading },
  name: "ContentMain",
  data() {
    return {
      tab_title: [],
      tab: {
        tag: "全部",
        data: {},
      },
      current: 0,
      isLoading: true,
    };
  },
  mounted() {
    // 获取全部tag类型
    this.axios.get("/online/api/TagServlet").then((res) => {
      this.tab_title = res.data;
    });
    // 默认获取全部数据
    this.req();
  },

  methods: {
    // 当切换值的时候，发送请求获取对应的数据
    req() {
      this.isLoading = true;
      this.axios
        .get("/online/api/CardServlet", {
          params: {
            current: this.current,
          },
        })
        .then((res) => {
          this.tab.data = res.data;
          this.isLoading = false;
        });
    },
  },
};
</script>