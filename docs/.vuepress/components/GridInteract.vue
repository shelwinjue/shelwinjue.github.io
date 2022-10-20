<template>
  <div>
    <div>示例1：包含展开和收起按钮</div>
    <div class="demo">
      <Block
        mode="edit"
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
    <div>
      示例2：不包含展开和收起按钮,
      指定固定高度(指定行的高度)或者固定宽度(指定列的宽度)
    </div>
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
    <div>
      示例3：不包含展开和收起按钮,
      不指定固定高度或者固定宽度，根据flex的值进行布局
    </div>
    <div class="demo">
      <Block
        mode="edit"
        :style="{ height: '100%' }"
        :defaultLayout="[
          {
            flex: 2,

            cols: [{ flex: 2 }, { flex: 2 }, { flex: 1 }],
          },
          {
            flex: 1,
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
  </div>
</template>
<script>
import { Block, Row, Col } from '@jianweife/lowcode-index';
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
