<template>
  <div class="radix">
    <form action="">
      <h2>进值转换</h2>
      <p>
        <label v-for="(item, i) in hexList" :key="i" :for="'radix_' + item">
          <input
            type="radio"
            class="list"
            :value="item"
            v-model="checkedValue"
            name="radix"
            :id="'radix_' + item"
          />
          {{ item }}进制
        </label>
      </p>
      <p>
        <input type="text" v-model="text" />
        <button type="button" class="login_button" @click="turn()">转换</button>
      </p>
    </form>
    <table
      class="table"
      style="width: 100%"
      border="1"
      cellspacing="0"
      cellpadding="0"
    >
      <thead>
        <tr>
          <th width="10%">进制</th>
          <th>结果</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2</td>
          <td>
            <input class="base" type="text" v-model="base_2" />
          </td>
        </tr>
        <tr>
          <td>8</td>
          <td>
            <input class="base" type="text" v-model="base_8" />
          </td>
        </tr>
        <tr>
          <td>10</td>
          <td>
            <input class="base" type="text" v-model="base_10" />
          </td>
        </tr>
        <tr>
          <td>16</td>
          <td>
            <input class="base" type="text" v-model="base_16" />
          </td>
        </tr>
        <tr>
          <td>26</td>
          <td>
            <input class="base" type="text" v-model="base_26" />
          </td>
        </tr>
        <tr>
          <td>32</td>
          <td>
            <input class="base" type="text" v-model="base_32" />
          </td>
        </tr>
        <tr>
          <td>36</td>
          <td>
            <input class="base" type="text" v-model="base_36" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "radix",
  data() {
    return {
      hexList: [2, 8, 10, 16, 26, 32, 36],
      checkedValue: 10,
      text: "",
      base_2: "",
      base_8: "",
      base_10: "",
      base_16: "",
      base_26: "",
      base_32: "",
      base_36: "",
      base_52: "",
      base_58: "",
      base_62: "",
    };
  },
  methods: {
    turn() {
      if (this.checkedValue == 10) {
        this.base_2 = Number(this.text).toString(2);
        this.base_8 = Number(this.text).toString(8);
        this.base_10 = Number(this.text).toString(10);
        this.base_16 = Number(this.text).toString(16);
        this.base_26 = Number(this.text).toString(26);
        this.base_32 = Number(this.text).toString(32);
        this.base_36 = Number(this.text).toString(36);
      } else {
        // 其他转其他
        this.base_2 = parseInt(this.text, this.checkedValue).toString(2);
        this.base_8 = parseInt(this.text, this.checkedValue).toString(8);
        this.base_16 = parseInt(this.text, this.checkedValue).toString(16);
        this.base_26 = parseInt(this.text, this.checkedValue).toString(26);
        this.base_32 = parseInt(this.text, this.checkedValue).toString(32);
        this.base_36 = parseInt(this.text, this.checkedValue).toString(36);

        // 其他转10
        this.base_10 = parseInt(this.text, this.checkedValue);
      }
    },
  },
};
</script>

<style scoped>
.radix {
  width: 80%;
  max-width: 850px;
  margin: 0 auto;
  text-align: left;
}

p {
  margin: 5px 0;
}

input[type="text"] {
  height: 25px;
}

input:focus {
  border: 2px solid var(--bg-color);
  background-color: rgba(29, 29, 29, 0);
}

.base {
  background-color: rgba(29, 29, 29, 0);
  width: 100%;
  border-radius: 0;
  z-index: 10;
  height: 31px !important;
}

.login_button {
  height: 25px;
  vertical-align: middle;
  width: 50px;

  margin: 10px;
}

.table {
  display: table;
  border-collapse: separate;
  box-sizing: border-box;
  border-collapse: collapse;
  text-indent: initial;
  border-spacing: 2px;
  border-color: grey;
}

.table tr,
.table th {
  height: 30px;
  line-height: 30px;
  text-align: center;
}

.table tbody tr:nth-child(odd) {
  background: rgba(204, 204, 204, 0.5);
}
/*设置偶数行颜色*/
.table tr:nth-child(even + 1) {
  background: rgba(255, 255, 255, 0.5);
}

</style>