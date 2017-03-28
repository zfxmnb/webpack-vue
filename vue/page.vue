<template id="temp-page">
  <div>
  <a href="index.html">index</a>
    <div v-for="x in list">{{x}}</div>
  </div>
</template>

<style>
body {
    color: blue;
}
</style>
<script>
export default {
    data:function(){
        return {list:["zfx","cxm","zh","cyx","tzp","hnp"]}
    }
}
</script>