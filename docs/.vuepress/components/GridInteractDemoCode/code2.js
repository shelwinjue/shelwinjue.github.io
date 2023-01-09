const code = `
<template>
  <div class="demo">
    <Block
      mode="edit"
      :style="{ height: '100%' }"
      :defaultLayout="[
        {
          flex: 1,

          cols: [{ width: 100 }, { flex: 1 }, { width: 100 }],
        },
        {
          height: 100,
          cols: [{ flex: 1 }],
        },
      ]"
      @onLayoutChange="onLayoutChange"
    >
      <Row>
        <Col>1</Col>
        <Col>2</Col>
        <Col>3</Col>
      </Row>
      <Row><Col>5</Col></Row>
    </Block>
  </div>
</template>
<script>
import { Block, Row, Col } from '@zjlabvis/lowcode-index';
export default {
  components: {
    Block,
    Row,
    Col,
  },
  methods: {
    onLayoutChange(data) {
      console.error('+++ onLayoutChange', data);
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
`;
export default code;
