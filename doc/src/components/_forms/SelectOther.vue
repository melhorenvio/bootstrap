<template>
  <div>
    <form action="javascript:;" class="me-form">
      <div class="other-line" :class="{'-open': form.slOutro === 'outro'}">
        <fieldset class="formLine" :class="{ active: form.slOutro, error: $v.form.slOutro.$error, focus: focus.slOutro }">
          <div class="inputBox -select">
            <model-select name="slOutro" id="slOutro"
              v-model="form.slOutro" :options="outroData"
              @focus="iptFocus('slOutro', $event)" @blur="iptBlur('slOutro', $event)" @input="$v.form.slOutro.$touch"
            >
            </model-select>
            <label for="slOutro">Select com campo outro</label>

            <p class="errorText">Campo Obrigatório</p>
          </div>
        </fieldset>
        <fieldset class="formLine" :class="{ active: form.iptOutro, error: $v.form.iptOutro.$error, focus: focus.iptOutro }">
          <div class="inputBox">
            <label :for="'iptOutro'">Outro</label>
            <input type="text" name="iptOutro" id="iptOutro"
              v-model="form.iptOutro" ref="iptOutro"
              @focus="iptFocus('iptOutro', $event)" @blur="iptBlur('iptOutro', $event)" @input="$v.form.iptOutro.$touch"
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
  import { ModelSelect } from 'vue-search-select';

  export default {
    components: {
      ModelSelect
    },

    data() {
      return {
        outroData: [
          {
            text: 'Opção 1',
            value: 1
          },
          {
            text: 'Outro',
            value: 'outro'
          },
        ],

        form : {
          slOutro: '',
          iptOutro: ''
        },

        errors: {
          slOutro: '',
          iptOutro: '',
        },

        focus: {
          slOutro: false,
          iptOutro: false,
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
        slOutro: {required},
        iptOutro: {
          requiredIf(value, self) {
            if (self.slOutro !== 'outro')
              return true;
            return !!value;
          }
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
