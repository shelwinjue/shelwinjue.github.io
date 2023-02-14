<template>
  <div class="container">
    <div class="wrap">
      <a-tooltip v-if="codeSandboxUrl">
        <template slot="title">打开codesanbox</template>
        <a-icon type="code-sandbox" class="icon" @click="openCodeSandbox" />
      </a-tooltip>
      <a-tooltip v-if="showCopy && codeStr">
        <template slot="title">
          {{ copyClicked ? '已复制' : '复制代码' }}
        </template>
        <a-icon type="copy" class="icon" @click="onCopyIconClick" />
      </a-tooltip>
      <a-tooltip v-if="codeStr">
        <template slot="title">
          {{ codeVisible ? '隐藏代码' : '显示代码' }}
        </template>
        <img
          :src="codeVisible ? hideCodeIcon : showCodeIcon"
          class="codeIcon icon"
          @click="onCodeIconClick"
        />
      </a-tooltip>
    </div>
    <pre v-if="codeVisible" class="language-javascript" v-html="codeHtml"></pre>
  </div>
</template>
<script>
import Prism from 'prismjs';
export default {
  props: {
    codeSandboxUrl: String,
    codeStr: String,
    defaultCodeVisible: {
      type: Boolean,
      default: false,
    },
    showCopy: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    codeHtml: function () {
      const result = Prism.highlight(
        this.codeStr,
        Prism.languages.javascript,
        'javascript'
      );
      return result;
    },
  },
  data() {
    return {
      showCodeIcon:
        '//gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg',
      hideCodeIcon:
        '//gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg',
      codeVisible: this.defaultCodeVisible,
      copyClicked: false,
    };
  },
  methods: {
    openCodeSandbox() {
      window.open(this.codeSandboxUrl);
    },
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
  // ::v-deep .CodeMirror {
  //   border: 1px solid #eee;
  //   height: auto;
  //   padding: 0 10px;
  // }
  .wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;
  }
  .icon {
    cursor: pointer;
    padding: 0 8px;
  }
  .codeIcon {
    height: 16px;
  }
}
</style>
