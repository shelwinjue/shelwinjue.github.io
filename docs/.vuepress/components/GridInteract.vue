<template>
  <div class="demo">
    <Layout
      :style="{ height: '100%' }"
      :defaultLayout="[1, 1, 1]"
      :defaultRowLayout="[[1, 1], [1], [1]]"
    >
      <Row>
        <Col>123</Col>
        <Col>abc</Col>
      </Row>
      <Row><Col>456</Col></Row>
      <Row><Col>789</Col></Row>
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
};
</script>
<style scoped>
.demo {
  width: 100%;
  height: 500px;
}
</style>
