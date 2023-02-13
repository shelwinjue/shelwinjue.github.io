<template>
  <div class="page-demo-layout">
    <div class="setting-box">
      <h3 class="title">布局配置</h3>
      <div class="setting-item">
        <a-radio-group
          v-model="layoutSetting"
          size="default"
          @change="handleLayoutChange"
        >
          <a-radio-button value="inline">inline</a-radio-button>
          <a-radio-button value="vertical">vertical</a-radio-button>
          <a-radio-button value="horizontal">horizontal</a-radio-button>
        </a-radio-group>
      </div>
      <jw-form
        ref="formRef"
        v-model="formData"
        :layout="layoutSettingReal"
        :form-items="formItems"
        :rules="rules"
        :watch-config="formWatchConfig"
        @change="onChange"
        @itemChange="onItemChange"
      >
        <template #level-default="{ componentSlotScope }">
          <a-select-option
            v-for="(op, i) in componentSlotScope.options"
            :key="i"
            :disabled="op.disabled"
            :value="`${op.value}`"
          >
            <a-icon type="play-circle" />
            {{ op.label }}
          </a-select-option>
        </template>
      </jw-form>
      <div>表单的值：</div>
      <CodeHelp
        :defaultCodeVisible="true"
        :showCopy="false"
        :codeStr="JSON.stringify(this.formData, null, 2)"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import {
  EventValueParseType,
  JwFormItem,
  JwFormLayout,
  setValueByPath,
  JwFormRules,
  JwOptions,
  IKV,
} from '@zjlabvis/common-form';
import CodeHelp from './CodeHelp.vue';

@Component({
  name: 'page-demo-layout',
  components: {
    CodeHelp,
  },
})
export default class PageDemoLayout extends Vue {
  layoutSetting: string = 'horizontal';

  layoutSettingReal: JwFormLayout = 'horizontal';

  formData: IKV = {
    name: '这是默认的名称',
  };

  formWatchConfig = {
    level: (...args: any[]) => {
      console.info(...args);
    },
  };

  rules: JwFormRules = {
    level: {
      required: true,
      message: '赛事级别是必填项',
      trigger: ['change'],
    },
    gmtStartRange: {
      required: true,
      message: '开始时间是必填项',
      trigger: ['change'],
    },
    name: {
      required: true,
      message: '赛事名称是必填项',
      trigger: ['blur'],
    },
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
      // formItemProps: {
      //   style: {
      //     width: '450px',
      //     marginRight: '16px',
      //   },
      // },
    },

    {
      name: '赛事级别',
      key: 'level',
      type: 'jw-select',
      eventChangePaseType: EventValueParseType.origin,
      props: {
        showSearch: true,
        placeholder: '请选择',
        allowClear: true,
        style: {
          minWidth: '350px',
        },
        mode: 'tags',
        single: true,
      },
      // formItemProps: {
      //   style: {
      //     width: '450px',
      //     marginRight: '16px',
      //   },
      // },
      options: [],
      optionsFunc: () => {
        return new Promise((resolve) => {
          resolve([
            {
              label: 'A级',
              value: 'A',
            },
            {
              label: 'B级',
              value: 'B',
            },
            {
              label: 'C级',
              value: 'C',
            },
          ]);
        });
      },
      listener: {
        search: (keyword: string, other: any) => {
          console.info('+++ params', keyword, other);

          other.componentRef.updateOptions([
            {
              label: keyword + '/测试',
              value: keyword,
            },
          ]);
        },
        change: (...args: any[]) => {
          console.info('+++ change', ...args);
        },
      },
    },
    {
      name: '赛事名称',
      key: 'name',
      type: 'a-input',
      eventChangePaseType: EventValueParseType.event,
      props: {
        placeholder: '请输入',
        allowClear: true,
        style: {
          minWidth: '350px',
        },
      },
      listener: {
        change: (...args: any[]) => {
          console.info('+++ args', ...args);
        },
      },
      // formItemProps: {
      //   style: {
      //     width: '450px',
      //     marginRight: '16px',
      //   },
      // },
    },
    {
      name: '赛事状态',
      key: 'status',
      type: 'jw-select',
      eventChangePaseType: EventValueParseType.origin,
      props: {
        placeholder: '请选择',
        allowClear: true,
        style: {
          minWidth: '350px',
        },
      },
      // formItemProps: {
      //   style: {
      //     marginRight: '16px',
      //     width: '450px',
      //   },
      // },
      options: [
        {
          label: '未提交',
          value: 0,
        },
        {
          label: '审核中',
          value: 1,
        },
        {
          label: '其他',
          value: 2,
        },
      ],
    },
  ];

  validate() {
    (this.$refs.formRef as any).validate().catch((err: any) => {});
  }

  changeFormValue() {
    setValueByPath(this.formData, 'name', '123');
  }

  onBtnClick() {
    console.info('+++ button clicked');
    setValueByPath(this.formData, 'level', 'A');
  }

  handleLayoutChange(event: any) {
    if (['inline', 'vertical'].includes(event.target.value)) {
      this.layoutSettingReal = event.target.value;
    } else {
      this.layoutSettingReal = {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      };
    }
  }

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
