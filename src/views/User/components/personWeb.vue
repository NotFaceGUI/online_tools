<template>
  <div>
    <span style="font-size: 30px">个人主页:</span>
    <div class="RightTop">
      <dl class="form-group">
        <dt>
          <span class="labels">用户名:</span
          ><input type="text" class="InputStyle" />
        </dt>
        <dt><label>你可以在此修改你喜欢的用户名哦~~~</label></dt>
      </dl>
      <dl class="form-group">
        <dt>
          <span class="labels">个人简介:</span>
          <textarea name="TextArea" id="TextArea" cols="30" rows="10"></textarea>
        </dt>
        <dt><label>你可以在此修改你喜欢的个人简介哦~~~</label></dt>
      </dl>
      <dl class="form-group">
        <dt>
          <span class="labels">用户密码:</span
          ><input type="password" class="InputStyle" />
        </dt>
        <dt><label>你可以在此修改你用户密码哦~~~</label></dt>
      </dl>
    </div>
    <div class="RightMain">
        <span style="font-size: 30px">个人收藏:</span>
    </div>
    <div class="RightBottom">基本信息</div>
  </div>
</template>
<script>
export default {
    
};
</script>
<style scoped>
.RightTop {
  letter-spacing: normal;
  width: 100%;
  border-top: 0.1 solid black;
  border-left: 0 solid #000;
  border-right: 0 solid #000;
  border-bottom: 0 solid #000;
  border-style: solid;
  margin-top: 1%;
}
.RightMain{
  letter-spacing: normal;
  width: 100%;
  border-top: 0.1 solid black;
  border-left: 0 solid #000;
  border-right: 0 solid #000;
  border-bottom: 0px solid #000;
  border-style: solid;
  margin-top: 1%;
}

.RightBottom {
  text-align: center;
  border: 1px;
  border-top: black;
  border-left: 0 solid #000;
  border-right: 0 solid #000;
  border-bottom: 0px solid #000;
  border-style: solid;
}
dl {
  font-weight: bolder;
  letter-spacing: 3px;
}

input {
  margin-left: 2%;
  width: 67%;
  height: 27px;
  border:5px solid #6b3d00;
  padding-left: 0.5%;
}
.form-group {
  margin: 15px 0;
  margin-top: 7px;
  margin-right: 0px;
  margin-bottom: 15px;
  margin-left: 10px;
}
label {
  font-size: 10px;
  margin-left: 22%;
}
.labels {
  font-weight: bolder;
  font-size: 15px;
  margin-left: 1%;
  width: 80px;
  text-align: justify;
  text-align-last: justify;
  display:inline-block;
  
}
textarea{  
  margin-left: 2%;
  width:65%;
  font-size:14px;
  resize: none;
  vertical-align: top;
  border-radius:10px;
  height: 40px;
  border:6px solid #6b3d00;
  background-color: #ac967a;
  line-break: auto;
}
</style>