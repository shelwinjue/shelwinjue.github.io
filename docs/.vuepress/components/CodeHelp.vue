<template>
  <div class="container">
    <div class="wrap">
      <a-tooltip>
        <template slot="title">
          {{ copyClicked ? '已复制' : '复制代码' }}
        </template>
        <a-icon type="copy" class="copyIcon" @click="onCopyIconClick" />
      </a-tooltip>
      <a-tooltip>
        <template slot="title">
          {{ codeVisible ? '隐藏代码' : '显示代码' }}
        </template>
        <img
          :src="codeVisible ? hideCodeIcon : showCodeIcon"
          class="codeIcon"
          @click="onCodeIconClick"
        />
      </a-tooltip>
    </div>
    <codemirror
      class="code-wrapper"
      v-if="codeVisible"
      :value="codeStr"
      :options="{
        mode: 'text/javascript',
        theme: 'material',
      }"
    ></codemirror>
  </div>
</template>
<script>
export default {
  props: {
    codeStr: String,
  },
  data() {
    return {
      showCodeIcon:
        '//gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg',
      hideCodeIcon:
        '//gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg',
      codeVisible: false,
      copyClicked: false,
    };
  },
  methods: {
    onCopyIconClick() {
      navigator.clipboard.writeText(this.codeStr);
      this.copyClicked = true;
      setTimeout(() => {
        this.copyClicked = false;
      }, 2000);
    },
    onCodeIconClick() {
      this.codeVisible = !this.codeVisible;
    },
  },
};
</script>
<style scoped lang="less">
.container {
  width: 100%;
  padding: 10px 0;
  ::v-deep .CodeMirror {
    border: 1px solid #eee;
    height: auto;
  }
  .wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;
  }
  .copyIcon {
    cursor: pointer;
    margin-right: 16px;
  }
  .codeIcon {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
}
</style>
