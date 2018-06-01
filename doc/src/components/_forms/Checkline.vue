<template>
  <div>
    <form action="javascript:;" class="me-form">
      <div class="formBox">
        <fieldset class="checkLine">
          <div class="inputBox">
            <input type="checkbox" :name="'chkMP-'" :id="'chkMP-'" class="customCheckBullet"
              v-model="form.checkLine"
            >
            <label :for="'chkMP-'">Mão própria</label>
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
          checkLine: ''
        },

        errors: {
          checkLine: ''
        },
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
        checkLine: {required},
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
