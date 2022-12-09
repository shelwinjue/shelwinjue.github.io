<template>
  <div>
    <div
      class="testPortalContainer"
      :style="{ width: '100%', height: '300px', border: '1px solid black' }"
    ></div>
    <Portal containerSelector=".testPortalContainer">
      <div :style="{ width: '150px', height: '150px', background: 'orange' }">
        这是一段文本
      </div>
    </Portal>
  </div>
</template>
<script>
import { Portal } from '@zjlabvis/lowcode-index';
export default {
  components: {
    Portal,
  },
};
</script>
