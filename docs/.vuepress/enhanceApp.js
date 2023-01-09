import Vue from 'vue';
import '@zjlabvis/lowcode-index/dist/jianweiComponents.css';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
let VueCodemirror = null;
// import VueCodemirror from 'vue-codemirror';
// import 'codemirror/mode/vue/vue.js';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import './global.css';
if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
  VueCodemirror = require('vue-codemirror');
  require('codemirror/mode/vue/vue.js');
  Vue.use(VueCodemirror);
}
Vue.use(Antd);
