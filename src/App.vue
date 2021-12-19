<template>
  <div id="app">
    <router-view />
  </div>
</template>


<style lang="scss">
* {
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
}

body {
  background: url("assets/bg.png") #b48c6e repeat top !important;
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
  background-color: #795a40;

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
</style>
