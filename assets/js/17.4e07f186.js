(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{707:function(t,e,n){"use strict";n.r(e);var o=n(12),c=function(t,e,n,o){var c,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var i=t.length-1;i>=0;i--)(c=t[i])&&(r=(s<3?c(r):s>3?c(e,n,r):c(e,n))||r);return s>3&&r&&Object.defineProperty(e,n,r),r};let s=class extends o.Vue{constructor(){super(...arguments),this.count=1}mounted(){console.info("+++ mounted")}onClick(){this.count++}};s=c([o.Component],s);var r=s,i=n(74),l=Object(i.a)(r,(function(){var t=this._self._c;this._self._setupProxy;return t("div",{on:{click:this.onClick}},[t("h1",[this._v("计数："+this._s(this.count))])])}),[],!1,null,null,null);e.default=l.exports}}]);