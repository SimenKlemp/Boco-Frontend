<template>
  <component
      v-for="option in options"
      :key="option.value"
      :is="vertical ? 'div' : 'span'"
      :class="{
      horizontal: !vertical,
    }"
  >
    <!--TODO: fix checkbox to be able to check more than one box-->
    <BaseCheckbox
        :label="option.label"
        :checked="option.checked"
        :modelValue="modelValue"
        :name="name"
        @update:modelValue="$emit('update:modelValue', $event)"
    />
  </component>
</template>

<script>
import BaseCheckbox from "@/components/baseTools/BaseCheckbox";

export default {
  components: {BaseCheckbox },
  props: {
    options: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    modelValue: {
      type: [String, Number],
      required: true,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.horizontal {
  margin-right: 20px;
}
label {
  font-size: 16px;
}
</style>