<template>
  <div>
    <div class="grid">
      <div class="col-12-12">
        <h3>Normais</h3>
        <form action="javascript:;" class="me-form">
          <div class="formBox">
            <fieldset class="formLine" :class="{ active: form.platformOutro, error: $v.form.platformOutro.$error, focus: focus.platformOutro }">
              <div class="inputBox">
                <label :for="'platformOutro'">Outro</label>
                <input type="text" name="platformOutro" id="platformOutro"
                  v-model="form.platformOutro" ref="platformOutro"
                  @focus="iptFocus('platformOutro', $event)" @blur="iptBlur('platformOutro', $event)" @input="$v.form.platformOutro.$touch"
                >
                <p class="errorText">Campo obrigatório!</p>
              </div>
            </fieldset>
          </div>
        </form>
      </div>
      <div class="col-12-12">
        <pre>
          <code class="html">
            &lt;a href="#" class="btn-border -blue"&gt;Alterar imagem&lt;/a&gt;

            &lt;a href="#" class="btn-border -orange"&gt;Alterar imagem&lt;/a&gt;
          </code>
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
  import { required, minLength, maxLength } from 'vuelidate/lib/validators';
  import { ModelSelect } from 'vue-search-select';

  export default {
    data() {
      return {
        enviosData: [],
        enviosMLData: [],
        platformData: [],
        erpData: [],
        mpData: [],

        showModal: false,

        form : {
          slEnvios: '',
          slEnviosML: '',
          slPlatform: '',
          slERP: '',
          slMP: '',
          platformOutro: '',
          erpOutro: '',
          mpOutro: ''
        },

        errors: {
          slEnvios: '',
          slEnviosML: '',
          slPlatform: '',
          slERP: '',
          slMP: '',
          platformOutro: '',
          erpOutro: '',
          mpOutro: ''
        },

        focus: {
          slEnvios: false,
          slEnviosML: false,
          slPlatform: false,
          slERP: false,
          slMP: false,
          platformOutro: false,
          erpOutro: false,
          mpOutro: false
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
        slEnvios: {
          requiredIf(value, self) {
            if (!this.extra)
              return true;
            return !!value;
          }
        },
        slEnviosML: {
          requiredIf(value, self) {
            if (self.slERP !== 14)
              return true;
            return !!value;
          }
        },
        slPlatform: {required},
        slERP: {
          requiredIf(value, self) {
            if (!this.extra)
              return true;
            return !!value;
          }
        },
        slMP: {
          requiredIf(value, self) {
            if (!this.extra)
              return true;
            return !!value;
          }
        },
        platformOutro: {
          requiredIf(value, self) {
            if (self.slPlatform !== 8)
              return true;
            return !!value;
          }
        },
        erpOutro: {
          requiredIf(value, self) {
            if (self.slERP !== 8)
              return true;
            return !!value;
          }
        },
        mpOutro: {
          requiredIf(value, self) {
            if (self.slMP !== 23)
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
