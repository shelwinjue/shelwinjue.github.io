<template>
  <div>
    <div>默认</div>
    <HelloWorld />
    <div>传入msg</div>
    <HelloWorld msg="Hello Vue!" />
  </div>
</template>

<script>
import { HelloWorld } from '@jianweife/lowcode-index';
export default {
  name: 'App',
  components: {
    HelloWorld,
  },
};
</script>

<style></style>
