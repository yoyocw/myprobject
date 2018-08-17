<template>
    <div>
        <input v-model="msg" placeholder="编辑我。。。"/>
        <p>消息是：{{msg}}</p>

        <p>textarea 元素：</p>
        <p style="white-space:pre">{{msg2}}</p>

        <textarea v-model="msg2" placehoder="多行文本输入"></textarea>
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
              msg: '这个是双向绑定模板页',
              msg2: '这个是双向绑定模板页'
            }
        }
    }
</script>
