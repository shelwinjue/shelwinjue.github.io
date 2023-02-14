import Vue from 'vue';
import '@zjlabvis/lowcode-index/dist/jianweiComponents.css';
import Antd from 'ant-design-vue';
import JwFormLib from '@zjlabvis/common-form';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import '@zjlabvis/common-form/lib/cjs/index.css';
import 'ant-design-vue/dist/antd.css';
// import 'codemirror/lib/codemirror.css';
// import 'codemirror/theme/material.css';
window.Prism = Prism;
// if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
//   // vue-press构建时，在构建服务端bundle时会报错，原因时codemirror会报navigator is undefined，所以这里增加判断
//   const VueCodemirror = require('vue-codemirror');
//   require('codemirror/mode/vue/vue.js');
//   Vue.use(VueCodemirror);
// }
Vue.use(Antd);
Vue.use(JwFormLib);
