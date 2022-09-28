<template>
  <div>
    <div>示例1：包含展开和收起按钮</div>
    <div class="demo">
      <Layout
        :style="{ height: '100%' }"
        :defaultLayout="[
          {
            flex: 1,
            unfold: true,
            showUnfoldBtn: false,
            cols: [
              { flex: 1, unfold: true, showUnfoldBtn: true, width: 200 },
              { flex: 1 },
              { flex: 1 },
            ],
          },
          {
            flex: 1,
            unfold: true,
            showUnfoldBtn: true,
            height: 200,
            cols: [{ flex: 1 }],
          },
        ]"
        @afterLayoutResize="afterLayoutResize"
      >
        <Row>
          <Col>1</Col>
          <Col>2</Col>
          <Col>3</Col>
        </Row>
        <Row><Col>5</Col></Row>
      </Layout>
    </div>
    <div>示例2：不包含展开和收起按钮</div>
    <div class="demo">
      <Layout
        :style="{ height: '100%' }"
        :defaultLayout="[
          {
            flex: 1,

            cols: [{ flex: 1 }, { flex: 1 }, { flex: 1 }],
          },
          {
            flex: 1,

            cols: [{ flex: 1 }],
          },
        ]"
        @afterLayoutResize="afterLayoutResize"
      >
        <Row>
          <Col>1</Col>
          <Col>2</Col>
          <Col>3</Col>
        </Row>
        <Row><Col>5</Col></Row>
      </Layout>
    </div>
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
