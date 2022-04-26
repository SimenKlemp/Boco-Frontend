<template>
  <input
      type="checkbox"
      :checked="modelValue === value"
      :value="value"
      :id="uuid"
  />
<!--  v-bind="$attrs"
  @change="$emit('update:modelValue', value)"-->
  <label class="radio" :for="uuid" v-if="label">{{ label }}</label>
</template>

<script>
import UniqueID from "@/features/UniqueID";

export default {
  name: "BaseCheckbox",
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    value: {
      type: [String, Number],
      required: true,
    },
  },
  setup() {
    const uuid = UniqueID().getID();
    return {
      uuid,
    };
  },
};
</script>
<style scoped>
input {
  display: inline-block;
  max-width: 25px;
  border: 0;
  height: 20px;
  margin-left: 5px;
}
</style>