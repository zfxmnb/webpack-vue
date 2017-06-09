<template >
  <div id="temp-page3">
  <a href="index.html">index</a>
    <div v-for="x in list">{{x}}</div>
  </div>
</template>

<style>
body {
    color: gray;
}
#temp-page3{
    background: blue;
    position: absolute;
    width:100%;
}
</style>
<script>
export default {
    data:function(){
        return {list:["zfx","cxm","zh"]}
    }
}
</script>