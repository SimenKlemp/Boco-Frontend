<template>
  <input
    v-bind="$attrs"
    :placeholder="label"
    class="inputField"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :id="uuid"
  />
</template>

<script>
import UniqueID from "@/features/UniqueID";
export default {
  name: "BaseSearchBar",
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    error: {
      type: String,
      default: "",
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
  padding: 1rem 0 1rem 1.5rem;
  border: none;
  border-radius: 10px;
  font-size: 20px;
}
.inputField:focus {
  border: none;
}
</style>
