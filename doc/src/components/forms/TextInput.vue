<template>
  <div>
    <form action="javascript:;" class="me-form">
      <div class="formBox">
        <fieldset class="formLine" :class="{ active: form.inputText, error: $v.form.inputText.$error, focus: focus.inputText }">
          <div class="inputBox">
            <label :for="'inputText'">Input texto</label>
            <input type="text" name="inputText" id="inputText"
              v-model="form.inputText" ref="inputText"
              @focus="iptFocus('inputText', $event)" @blur="iptBlur('inputText', $event)" @input="$v.form.inputText.$touch"
            >
            <p class="errorText">Campo obrigatório!</p>
          </div>
        </fieldset>
      </div>
    </form>
  </div>
</template>

<script>
  import { required, minLength, maxLength } from 'vuelidate/lib/validators';

  export default {
    data() {
      return {
        form : {
          inputText: ''
        },

        errors: {
          inputText: ''
        },

        focus: {
          inputText: false
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
        inputText: {required},
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
