## 代码演示

<iframe src="https://codesandbox.io/embed/hopeful-morning-9sh6q7?autoresize=1&fontsize=14&hidenavigation=1&theme=light"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="hopeful-morning-9sh6q7"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

```html
<template>
  <HelloWorld />
</template>

<script>
  import { HelloWorld } from '@jianweife/lowcode-index';
  export default {
    name: 'App',
    components: {
      HelloWorld,
    },
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
```
