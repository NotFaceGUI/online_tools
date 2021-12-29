<template>
  <div class="list">
    <nav-top></nav-top>
    <search></search>
    <div class="content">
      <div class="gird">
        <card :id="id + 1" :tab="tab" :card_list="card_list"></card>
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
      tab: {
        card_id: 1,
        t_id: 1,
        name: "hex",
        title: "hex转字符串",
        desc: "hex和字符串互转",
        numberOfCollections: 1,
      },
      card_list: [1],
      id: 0,
    };
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