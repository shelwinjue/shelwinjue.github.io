<template>
  <div>
    <div>示例1：整体可拖拽</div>
    <div class="containerDemo">
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
    <CodeHelp :codeStr="code1" />

    <div>示例2：仅header插槽区域可拖拽</div>

    <div class="containerDemo">
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
        <template v-slot:header>
          <div :style="{ textAlign: 'center', backgroundColor: '#cfd9df' }">
            header区域
          </div>
        </template>
        <div>拖动我试试吧</div>
      </DivInteract>
    </div>
    <CodeHelp :codeStr="code2" />
  </div>
</template>
<script>
import { DivInteract } from '@zjlabvis/lowcode-index';
import code1 from './DivInteractDemoCode/code1';
import code2 from './DivInteractDemoCode/code2';
import CodeHelp from './CodeHelp.vue';
export default {
  data: () => {
    return {
      code1,
      code2,
    };
  },
  components: {
    DivInteract,
    CodeHelp,
  },
  methods: {
    afterChange(data) {
      console.error('+++ afterChange', data);
    },
  },
};
</script>
<style scoped>
.containerDemo {
  position: relative;
  margin: 10px;
  background: white;
  border: 1px dashed #2575fc;
  width: 100%;
  height: 350px;
}
</style>
