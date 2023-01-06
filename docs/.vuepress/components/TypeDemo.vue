<template>
  <div @click="onClick">
    <h1>计数：{{ count }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Test extends Vue {
  count: number = 1;
  mounted() {
    console.info('+++ mounted');
  }
  onClick() {
    this.count++;
  }
}
</script>
