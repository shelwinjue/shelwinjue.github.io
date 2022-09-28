<template>
  <div class="container">
    <DivInteract
      :defaultRect="{
        width: 200,
        height: 400,
        left: 10,
        top: 10,
      }"
      @afterChange="afterChange"
    />
  </div>
</template>
<script>
import { DivInteract } from '@jianweife/lowcode-index';
export default {
  components: {
    DivInteract,
  },
  methods: {
    afterChange(data) {
      console.error('+++ afterChange', data);
    },
  },
};
</script>
<style scoped>
.container {
  position: relative;
  margin: 10px;
  background: #e6dee9;
  width: 100%;
  height: 500px;
}
</style>
