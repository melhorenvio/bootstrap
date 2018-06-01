<template>
  <div>
    <div class="grid">
      <div class="col-12-12">
        <h3>Input</h3>
        <text-input></text-input>

        <select-input></select-input>

        <h3>Select com opção de outro</h3>
        <select-other></select-other>

        <h3>Check</h3>
        <checkline></checkline>
      </div>
    </div>

    <h3>Grid test</h3>
    <div class="grid">
      <div class="col-6-12">
        <text-input></text-input>
      </div>
      <div class="col-6-12">
        <select-input></select-input>
      </div>
    </div>
    <div class="grid">
      <div class="col-4-12">
        <text-input></text-input>
      </div>
      <div class="col-5-12">
        <select-input></select-input>
      </div>
      <div class="col-3-12">
        <text-input></text-input>
      </div>
    </div>
  </div>
</template>

<script>
  import TextInput from '../_forms/TextInput.vue';
  import SelectInput from '../_forms/SelectInput.vue';
  import SelectOther from '../_forms/SelectOther.vue';
  import Checkline from '../_forms/Checkline.vue';

  export default {
    components: {
      TextInput,
      SelectOther,
      SelectInput,
      Checkline
    },

    data() {
      return {

      }
    },

    methods: {

    }
  }
</script>

<style lang="stylus" scoped>

</style>
