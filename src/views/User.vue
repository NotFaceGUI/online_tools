<template>
  <div>{{ name }}</div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      name: sessionStorage.getItem("username"),
    };
  },
};
</script>

<style scoped>
</style>