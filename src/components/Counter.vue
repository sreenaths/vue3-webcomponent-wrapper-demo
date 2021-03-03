<template>
  <div class="counter">
    Counter: {{ valueInternal }}<br />
    <button type="button" @click.stop="valueInternal++">Add</button>&nbsp;
    <button type="button" @click.stop="valueInternal--">Sub</button>
  </div>
</template>

<script>
export default {
  props: {
    value: Number
  },
  emits: ["change"],
  data() {
    return {
      valueInternal: this.value
    };
  },
  watch: {
    valueInternal: function() {
      this.$emit("change", this.valueInternal);
    }
  }
};
</script>

<style scoped>
.counter {
  font-size: 2em;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
</style>
