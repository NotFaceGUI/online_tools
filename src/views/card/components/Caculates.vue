<template>
  <div>
    <div class="div1">
      <dl>
        <dt><label class="label2">约分</label></dt>
        <dt>分子|分母</dt>
        <dt>
          <input id="i1" v-model="v1" type="text" /><span
            style="font-style: italic"
            >/</span
          ><input id="i2" v-model="v2" type="text" />
          <button type="button" class="login_button" @click="yf">计算</button>
        </dt>
        <dt>
          <label class="label1">计算结果为:{{ l1 }}</label>
        </dt>
      </dl>
      <dl>
        <dt><label class="label2">最大公因数</label></dt>
        <dt>数a|数b</dt>
        <dt>
          <input id="i3" v-model="v3" type="text" /><span
            style="font-style: italic"
            >|</span
          ><input id="i4" v-model="v4" type="text" />
          <button type="button" class="login_button" @click="gy">计算</button>
        </dt>

        <dt>
          <label class="label1">计算结果为:{{ l2 }}</label>
        </dt>
      </dl>
      <dl>
        <dt><label class="label2">最小公倍数</label></dt>
        <dt>数a|数b</dt>
        <dt>
          <input id="i5" v-model="v5" type="text" /><span
            style="font-style: italic"
            >|</span
          ><input id="i6" v-model="v6" type="text" />
          <button type="button" class="login_button" @click="gb">计算</button>
        </dt>
        <dt>
          <label class="label1">计算结果为:{{ l3 }}</label>
        </dt>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: "caculates",
  data() {
    return {
      text: "123",
      l1: "",
      l2: "",
      l3: "",
      v1: 0,
      v2: 0,
      v3: 0,
      v4: 0,
      v5: 0,
      v6: 0,
    };
  },
  methods: {
    yf() {
      var m = this.v1;
      var n = this.v2;
      if (this.v2 == 0) {
        this.l1 = "除数为0请重新输入";
        return;
      }
      var a = m;
      var b = n;
      a >= b ? ((a = m), (b = n)) : ((a = n), (b = m));
      if (m != 1 && n != 1) {
        for (var i = b; i >= 2; i--) {
          if (m % i == 0 && n % i == 0) {
            m = m / i;
            n = n / i;
          }
        }
      }
      this.l1 = m + "/" + n;
    },
    gy() {
      var a = this.v3;
      var b = this.v4;
      if (a == 0 || b == 0) {
        this.l2 = "0";
        return;
      }
      var min = Math.min(a, b);
      for (var i = min; i > 0; i--) {
        if (a % i == 0 && b % i == 0) {
          this.l2 = i + "";
          return i;
        }
      }
    },
    gb() {
      var a = this.v5;
      var b = this.v6;
      if (a < 1 || b < 1) {
        this.l3 = "值必须大于等于1请重新输入";
        return;
      }
      var max = Math.max(a, b);
      for (var i = max; i <= a * b; i++) {
        if (i % a == 0 && i % b == 0) {
          this.l3 = i + "";
          return i;
        }
      }
    },
  },
};
</script>
<style scoped>
.div1 {
  color: rgba(44, 40, 40, 0.65);
  box-sizing: border-box;
  margin: auto;
  margin-top: 1%;
  width: 600px;
  height: 400px;
  font-size: 14px;
  resize: none;
  vertical-align: top;
  border: 2px solid rgba(0, 0, 0, 0);
  border-radius: 10px;
  /* background-color: #adadad65; */
}
.login_button {
  width: 50px;
  height: 26px;
  font-size: 8px;
}
label {
  font-size: 30px;
  font-weight: bolder;
  text-align: justify;
  text-align-last: justify;
  display: inline-block;
}
input {
  margin-left: 20px;
  margin-right: 20px;
  width: 150px;
}
dl {
  margin: auto;
  font-size: 20px;
  font-weight: bolder;
  width: 100%;
  letter-spacing: 3px;
}
dt {
  text-align: left;
  margin-left: 10%;
}
.label1 {
  font-size: 15px;
  margin-left: 20px;
  text-align: justify;
  text-align-last: justify;
  display: inline-block;
}
.label2 {
  color: rgba(8, 8, 8, 0.822);
}

input[type="text"] {
  height: 25px;
}

input:focus {
  border: 2px solid var(--bg-color);
  background-color: rgba(29, 29, 29, 0);
}
</style>
