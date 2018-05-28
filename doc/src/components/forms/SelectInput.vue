<template>
  <div>
    <form action="javascript:;" class="me-form">
      <fieldset class="formLine" :class="{ active: form.slcInput, error: $v.form.slcInput.$error, focus: focus.slcInput }">
        <div class="inputBox -select">
          <model-select name="slcInput" id="slcInput"
            v-model="form.slcInput" :options="selectData"
            @focus="iptFocus('slcInput', $event)" @blur="iptBlur('slcInput', $event)" @input="$v.form.slcInput.$touch"
          >
          </model-select>
          <label for="slcInput">Select com campo outro</label>

          <p class="errorText">Campo Obrigatório</p>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
  import { required, minLength, maxLength } from 'vuelidate/lib/validators';
  import { ModelSelect } from 'vue-search-select';

  export default {
    components: {
      ModelSelect
    },

    data() {
      return {
        selectData: [
          {
            text: 'Opção 1',
            value: 1
          },
          {
            text: 'Opção 1',
            value: 2
          },
          {
            text: 'Opção 1',
            value: 1
          },
          {
            text: 'Opção 1',
            value: 2
          },
          {
            text: 'Opção 1',
            value: 1
          },
          {
            text: 'Opção 1',
            value: 2
          },
        ],

        form : {
          slcInput: ''
        },

        errors: {
          slcInput: ''
        },

        focus: {
          slcInput: false
        }
      }
    },

    methods: {
      iptFocus(ipt) {
        this.focus[ipt] = true;
      },
      iptBlur(ipt) {
        this.focus[ipt] = false;
      },
    },

    validations: {
      form : {
        slcInput: {required}
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
