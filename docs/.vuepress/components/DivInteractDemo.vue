<template>
  <div class="container">
    <DivInteract
      :defaultRect="{
        width: 100,
        height: 100,
        left: 10,
        top: 10,
      }"
      @afterChange="afterChange"
      :style="{
        background: '#accbee',
      }"
    >
      <div>拖动我试试吧</div>
    </DivInteract>
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
  background: white;
  border: 1px dashed #2575fc;
  width: 100%;
  height: 350px;
}
</style>
