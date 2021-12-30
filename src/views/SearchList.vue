<template>
  <div class="list">
    <nav-top></nav-top>
    <search :v="this.$route.query.value"></search>
    <div class="content">
      <div
        v-if="flag"
        style="height: 60px; line-height: 80px; color: #242424; font-size: 30px"
      >
        没有这个工具，请换个关键词查询
      </div>
      <div class="gird">
        <card
          v-for="(item, i) in tab"
          :key="i"
          :id="i + 1"
          :tab="item"
          :card_list="card_list"
        ></card>
      </div>
    </div>
    <floor></floor>
  </div>
</template>

<script>
import Floor from "../components/Floor.vue";
import NavTop from "../components/NavTop.vue";
import Search from "../components/Search.vue";
import Card from "./content/components/Card.vue";
export default {
  components: { NavTop, Floor, Card, Search },
  name: "searchList",
  data() {
    return {
      tab: [],
      card_list: [1],
      flag: false,
    };
  },
  watch: {
    $route(to, form) {
      console.log(to, form);
      if (to.query.value != form.query.value) {
        this.req();
      }
    },
  },
  mounted() {
    this.req();
  },
  methods: {
    req() {
      this.axios
        .get("/online/api/CardServlet", {
          params: {
            current: -1,
            value: this.$route.query.value,
          },
        })
        .then((res) => {
          console.log(res);
          this.tab = res.data;
          if (res.data == null || res.data.length <= 0) {
            this.flag = true;
          } else {
            this.flag = false;
          }

          this.axios
            .get("/online/api/NumberServlet", {
              params: {
                username: sessionStorage.getItem("username"),
              },
            })
            .then((res) => {
              // console.log(res);
              this.card_list = res.data.data;
            });
        });
    },
  },
};
</script>

<style scoped>
.content {
  margin: 0 auto;
  margin-top: 30px;
  padding: 13px 0;
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
  text-shadow: 1px 1px 2px #333;
  font-weight: 1000;
  font-size: 20px;
  color: white;
}

@keyframes set-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
.content ul {
  list-style-type: none;
}

.gird {
  margin: 13px;
  display: grid;
  gap: 13px;
  grid-template-columns: 1fr;
  justify-content: space-evenly;
}
</style>