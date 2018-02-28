<template >
    
  <div id="temp-page">
  <a href="template.html">template</a>
    <div v-for="x in list">{{x}}</div>
  </div>
</template>

<style>
body {
    color: gray;
}
#temp-page{
    background:rgb(226, 181, 181);
    position: absolute;
    width:100%;
}
</style>
<script>
export default {
    data:function(){
        return {list:["zfx","cxm","zh","cyx","tzp13"]}
    }
}
</script>