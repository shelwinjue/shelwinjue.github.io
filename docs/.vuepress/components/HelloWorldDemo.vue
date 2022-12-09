<template>
  <div>
    <div>默认</div>
    <HelloWorld />
    <div>传入msg</div>
    <HelloWorld msg="Hello Vue!" />
  </div>
</template>
<script>
import { HelloWorld } from '@zjlabvis/lowcode-index';
export default {
  components: {
    HelloWorld,
  },
};
</script>
