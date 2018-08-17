<template>
    <div>
      <p>{{msg}}</p>
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
              name: 'Google',
              url: 'http://www.Google.com'
              }
            },
              computed:{
                  msg:{
                    //get
                    get:function () {
                       return this.name + '' +this.url
                    },
                     set :function(newValue){
                       var names=newValue.split('')
                       this.name=names[0]
                       this.url=names[names.length-1]
                     }
              }
          }

    }
</script>
