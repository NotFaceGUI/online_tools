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
  color: #000;
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
  background-color: #795a40;
  color: #fff;
}

.content {
  margin: 0 auto;
  overflow: hidden;
  width: 70%;
  max-width: 1226px;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.8);
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
    // 默认获取全部数据
    this.axios
      .post(
        "/online/api/DemoServlet",
        this.qs.stringify({
          username: "admin",
          password: "123456",
        }),
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      )
      .then((res) => {
        console.log(res);
        this.tab.data = res.data;
        this.isLoading = false;
      });
    // 获取全部tag类型
    this.axios.get("/online/api/TagServlet").then((res) => {
      this.tab_title = res.data;
    });
  },

  methods: {
    // 当切换值的时候，发送请求获取对应的数据
    req(index) {
      this.isLoading = true;
      this.axios
        .get("/online/api/DemoServlet", { params: { tag: this.tab.tag } })
        .then((res) => {
          console.log(index);
          this.tab.data = res.data;
          this.isLoading = false;
        });
    },
  },
};
</script>