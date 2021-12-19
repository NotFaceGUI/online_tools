<template>
    <div class="tag">
        {{tab.tag}}
        <!-- 在此处写表格内容 -->
    </div>
</template>

<script>
export default {
    name:"TagContent",
    // 通过父组件的传值，来分析需要获取的内容，这里current是tag下标，对应数据库中的下标
    props:{
        current:Number,
        tab:Object
    }
}
</script>

<style scoped>
    .tag {
        height: 1600px;
    }
</style>