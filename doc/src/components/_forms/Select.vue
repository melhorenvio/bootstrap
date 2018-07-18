<template>
  <div>
    <form action="javascript:;" class="me-form">
      <div class="formBox">
        <fieldset class="selectLine">
          <div class="inputBox">
            <input type="checkbox" :name="'chckTest'" :id="'chckTest'"
              v-model="form.select"
            >
            <label :for="'chckTest'">Mão própria</label>
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
          select: ''
        },

        errors: {
          select: ''
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
        select: {required},
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
