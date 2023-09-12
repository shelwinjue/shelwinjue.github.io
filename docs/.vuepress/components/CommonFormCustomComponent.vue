<template>
  <div class="wrap">
    具体长度：
    <a-input
      :placeholder="placeholder"
      :value="value.length"
      @change="onInputChange"
      class="lengthInput"
    />
    <a-select
      :value="value.unit || 'cm'"
      @change="onUnitChange"
      class="unitSelect"
    >
      <a-select-option value="m">米</a-select-option>
      <a-select-option value="cm">厘米</a-select-option>
    </a-select>
    单位
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CustomUnit extends Vue {
  @Prop({
    type: String,
    default() {
      return '请输入数字';
    },
  })
  placeholder!: string;

  @Prop({
    type: Object,
    default() {
      return {};
    },
  })
  value!: any;

  public onInputChange(event: any) {
    this.$emit('change', {
      ...this.value,
      length: event.target.value,
    });
  }

  onUnitChange(value: any) {
    this.$emit('change', {
      ...this.value,
      unit: value,
    });
  }
}
</script>

<style lang="less" scoped>
.wrap {
  display: inline-block;
  .lengthInput {
    width: 40px;
  }
  .unitSelect {
    width: 80px;
    margin-left: 8px;
  }
}
</style>
