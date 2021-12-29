<template>
    <div >
        <div class="back">
            <span style="font-size: 18px;font-weight:bolder;">个人收藏:</span>
            <div class="collects"></div>

        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.back{
    color: var(--bg-color);
    margin-top: 1%;
    /* background-color: rgb(65, 66, 66); */
    border-radius: 5px;
}
.labels {
  font-weight: bolder;
  font-size: 15px;
  margin-left: 1%;
  width: 80px;
  text-align: justify;
  text-align-last: justify;
  display: inline-block;
}
.collects{
    border-top: 2px #c2c0c0 dashed;
}
</style>