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
    background:green;
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