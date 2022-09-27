<template>
  <div class="demo">
    <Layout
      :style="{ height: '100%' }"
      :defaultLayout="[1, 1, 1]"
      :defaultRowLayout="[[1, 1, 1], [2, 1], [1]]"
      @afterLayoutResize="afterLayoutResize"
    >
      <Row>
        <Col :style="{ backgroundColor: '#f7a3a4' }">1</Col>
        <Col :style="{ backgroundColor: '#f7afab' }">2</Col>
        <Col :style="{ backgroundColor: '#f6bcb5' }">3</Col>
      </Row>
      <Row>
        <Col :style="{ backgroundColor: '#b0cffe' }">4</Col>
        <Col :style="{ backgroundColor: '#bedffc' }">5</Col>
      </Row>
      <Row><Col>6</Col></Row>
    </Layout>
  </div>
</template>
<script>
import { Layout, Row, Col } from '@jianweife/lowcode-index';
export default {
  components: {
    Layout,
    Row,
    Col,
  },
  methods: {
    afterLayoutResize(data) {
      console.error('+++ afterLayoutResize', data);
    },
  },
};
</script>
<style scoped>
.demo {
  width: 100%;
  height: 500px;
}
</style>
