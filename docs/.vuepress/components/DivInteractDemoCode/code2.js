const code = `
<template>
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
</template>
<script>
import { DivInteract } from '@zjlabvis/lowcode-index';
export default {
  components: {
    DivInteract,
  },
  methods: {
    afterChange(data) {
      console.error('+++ afterChange', data);
    },
  },
</script>
`;
export default code;
