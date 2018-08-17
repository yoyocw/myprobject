<template>
    <div>
      <select v-model="selectV" name="fruit">
          <option value="">选择一个网站</option>
          <option value="www.runoob.com">Runoob</option>
          <option value="wwww.google.com">Google</option>
      </select>

        <div>
          选择的网站是:{{selectV}}

        </div>
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
            return {selectV:''}
        }
    }
</script>
