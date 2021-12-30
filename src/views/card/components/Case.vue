<template>
    <div>
        <div >
            <textarea v-model="text"></textarea>
        </div>
        <div>
            <button @click="toUpperCase" class="login_button" type="button">大写</button>
            <button @click="toLowerCase" class="login_button" type="button">小写</button>
        </div>
    </div>
</template>

<script>
export default{

    data(){
        return{
            text:"123"
        }
    },
    methods:{
        toUpperCase(){
            this.text=this.text.toUpperCase()
        },
        toLowerCase(){
            this.text=this.text.toLowerCase()
        }
    }
}
</script>
<style scoped>
textarea {
  box-sizing: border-box;
  outline: none;
  margin-top: 1%;
  padding-top: 0.5%;
  padding-left: 0.5%;
  width: 600px;
  height: 100px;
  font-size: 14px;
  resize: none;
  vertical-align: top;
  border: 2px solid rgba(0, 0, 0, 0);
  border-radius: 10px;
  height: 320px;
  background-color: #adadad65;
  line-break: auto;
}
.login_button{
    width: 120px;
    height: 36px;
    margin-left: 10px;
}
</style>
