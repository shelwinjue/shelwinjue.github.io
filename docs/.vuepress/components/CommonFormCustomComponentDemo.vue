<template>
  <div class="page-demo-layout">
    <div class="demo-box">
      <jw-form
        ref="formRef"
        v-model="formData"
        :injectComponents="injectComponents"
        :form-items="formItems"
        @change="onChange"
        @itemChange="onItemChange"
      ></jw-form>
    </div>
    <CodeHelp
      :defaultCodeVisible="true"
      :showCopy="false"
      :codeStr="JSON.stringify(this.formData, null, 2)"
    />
    <CodeHelp
      codeSandboxUrl="https://codesandbox.io/s/vue-2-playground-forked-7ljh2u?file=/src/components/CommonFormLayoutDemo.vue"
    ></CodeHelp>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { EventValueParseType, JwFormItem } from '@zjlabvis/common-form';
import { IKV } from '@zjlabvis/common-form';
import CustomUnit from './CommonFormCustomComponent.vue';
import CodeHelp from './CodeHelp.vue';

@Component({
  name: 'page-demo-layout',
  components: {
    CodeHelp,
  },
})
export default class PageDemoLayout extends Vue {
  formData: IKV = {
    name: '123',
  };

  injectComponents = {
    'test-custom-unit': CustomUnit,
  };

  formItems: JwFormItem[] = [
    {
      name: '开始时间',
      key: 'gmtStartRange',
      type: 'a-range-picker',
      eventChangePaseType: EventValueParseType.origin,
      props: {
        placeholder: ['开始', '结束'],
        format: 'YYYY-MM-DD HH:00:00',
        valueFormat: 'YYYY-MM-DD HH:00:00',
        class: 'event-enter-range',
        showTime: {
          minuteStep: 60,
          secondStep: 60,
        },
      },
    },
    {
      type: 'test-custom-unit',
      name: '自定义组件',
      key: 'testUnit',
    },
  ];

  onChange(...data: any[]) {
    console.info('+++ onFormChange', ...data);
  }
  onItemChange(...data: any[]) {
    console.info('+++ onItemChange', ...data);
  }
}
</script>
<style scoped lang="less">
.page-demo-layout {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;

  .title {
    font-size: 16px;
    line-height: 36px;
    color: #333;
    border-bottom: 1px solid #eaeaeb;
    margin-bottom: 16px;
  }

  .setting-box {
    margin-top: 20px;
  }

  .layout-info {
    margin-top: 20px;
  }
}
</style>
