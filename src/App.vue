<template>
  <div id="app">
    <router-view />
  </div>
</template>


<style lang="scss">
:root {
  --bg-color: #242424;
}

* {
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
}

body {
  // background: url("assets/bg.png") #b48c6e repeat top !important;

  background-color: rgb(214, 214, 214);
  background-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.15) 10%,
      rgba(0, 0, 0, 0) 10%
    ),
    linear-gradient(rgba(0, 0, 0, 0.15) 10%, rgba(0, 0, 0, 0) 10%);
  background-size: 15px 15px;
  // background-color: white;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  position: sticky !important;
  position: -webkit-sticky !important;
  top: 0px;
  z-index: 999;

  padding: 0 20px 0 20px;
  line-height: 50px;
  text-align: left;
  box-shadow: 1px 5px 15px 4px rgba(0, 0, 0, 0.7);
  -webkit-box-shadow: 1px 5px 15px 4px rgba(0, 0, 0, 0.7);
  -moz-box-shadow: 1px 5px 15px 4px rgba(0, 0, 0, 0.7);

  // padding: 30px;
  background-color: #242424;

  a {
    font-weight: bold;
    color: #ccc;

    &:hover {
      color: white;
    }
  }

  #icon {
    font-size: 18px;

    &::before {
      content: "";
      vertical-align: middle;
      display: inline-block;
      background: url("./assets/icon.svg") no-repeat;
      background-size: 49px 32px;
      width: 50px;
      height: 36px;
    }
  }

  .left {
    float: left;
  }

  .right {
    float: right;
  }
}

.clear {
  clear: both;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.login_button {
  box-sizing: border-box;
  margin-top: 10px;
  background-color: var(--bg-color);
  color: #fff;
  border-radius: 5px;
  border: 0px;
  width: 250px;
  height: 40px;
  font-size: 16px;
  transition: all 0.2s ease-out;

  &:hover {
    background-color: #0f0f0f;
  }

  &:active {
    transform: scale(95%);
  }
}
</style>
