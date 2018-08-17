<template>
    <div>
     千米:<input  type="text" v-model="kilometers"/>
    米<input type="text" v-model="meters"/>
    </div>
</template>

<style>
    body {
        background-color: #fefdff;
    }
</style>

<script>
    export default {
        data() {
          return {
            kilometers: 0,
            meters: 0
          }
        },
              watch:{
                kilometers:function(val) {
                    this.kilometers=val;
                      this.meters=val*1000;
                  },
                meters:function(val){
                  this.kilometers=val/1000;
                  this.meters=val;
                }

          }

    }
</script>
