<template>
  <div>
    <div class="btn-box -center">
      <a v-if="!listTables.length" href="javascript:;" class="btn-border -full-blue" @click="populate()">Popular tabela</a>
      <a v-else href="javascript:;" class="btn-border -full-blue" @click="clear()">Limpar tabela</a>
    </div>

    <div class="table-box" :class="{'-inative': !listTables.length }">
      <div v-if="listTables.length" class="table -amazon">
        <ul class="head">
          <li><span>CEP</span></li>
          <li><span>Data</span></li>
          <li class="-center"><span>Ações</span></li>
        </ul>
        <ul class="body">
          <li v-for="item in listTables" :key="item.id">
            <ul class="body-list">
              <li><span>{{ item.postal_code }}</span></li>
              <li><span>{{ item.created_at }}</span></li>
              <li class="-center">
                <span>
                  <a href="javascript:;" class="action-button -download" data-tip="Download">
                    <svg class="ico" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 444.92 500"><title>Download</title><g id="Camada_2" data-name="Camada 2"><g id="Camada_9" data-name="Camada 9"><path d="M344,260.9H292.45v-20a10,10,0,0,0-20,0v40h61L227.07,412.35,120.66,280.9h61V20h90.76V192.52a10,10,0,0,0,20,0V15a15,15,0,0,0-15-15H176.69a15,15,0,0,0-15,15V260.9H110.18a15,15,0,0,0-11.66,24.44l116.89,144.4a15,15,0,0,0,23.32,0l116.89-144.4A15,15,0,0,0,344,260.9Z"/></g><g id="Camada_10" data-name="Camada 10"><path class="cls-1" d="M435.41,481H9.51a9.51,9.51,0,0,0,0,19H435.41a9.51,9.51,0,1,0,0-19Z"/></g></g></svg>
                  </a>
                  <a href="javascript:;" class="action-button -editar" data-tip="Editar">
                    <svg class="ico" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 454.15 500"><title>Editar</title><g id="Camada_2" data-name="Camada 2"><g id="Camada_10" data-name="Camada 10"><path class="cls-1" d="M435.41,481H9.51a9.51,9.51,0,0,0,0,19H435.41a9.51,9.51,0,1,0,0-19Z"/><path class="cls-1" d="M10.61,435a17,17,0,0,0,3.43,5,17.22,17.22,0,0,0,16.16,4.58L144.7,417.42a10.84,10.84,0,0,0,1.85-.61c.42-.15.85-.33,1.31-.54a17.17,17.17,0,0,0,3.31-2c.17-.12.43-.3.74-.55a9.84,9.84,0,0,0,1-.89l19.54-19.54a9.51,9.51,0,0,0,0-13.45h0a9.51,9.51,0,0,0-13.45,0l-13.48,13.48L133,380.77l160-160a9.73,9.73,0,0,0,.66-13.22,9.51,9.51,0,0,0-13.88-.46L119.54,367.32,86.81,334.6l160-160a9.73,9.73,0,0,0,.66-13.22,9.51,9.51,0,0,0-13.88-.46L73.36,321.15,60.82,308.6,288.59,80.83l84.72,84.72L192.64,346.21a9.51,9.51,0,1,0,13.45,13.45l225-225a79,79,0,0,0,0-111.62h0a79,79,0,0,0-111.62,0L41.32,301.2a10.69,10.69,0,0,0-1.16,1.38c-.22.28-.39.51-.51.68l-.11.15a17.08,17.08,0,0,0-2.11,4c-.07.16-.16.39-.27.68s-.18.49-.28.8l-.08.27L9.47,423.92a16.25,16.25,0,0,0-.41,3A10.86,10.86,0,0,0,9,428.06a17.13,17.13,0,0,0,1.06,5.7C10.24,434.22,10.42,434.62,10.61,435Zm407-398.53a60,60,0,0,1,6.45,77.06L340.56,30.06A60,60,0,0,1,417.62,36.52Zm-91.12,6.39,84.72,84.72-5.51,5.51L321,48.42Zm-19,19,84.72,84.72-5.51,5.51L302,67.38Zm-255.41,265L127.32,402l-81,19.29L52,415.63a9.51,9.51,0,0,0-13.45-13.45l-5.66,5.66Z"/></g></g></svg>
                  </a>
                  <a href="javascript:;" class="action-button -excluir" data-tip="Excluir">
                    <svg class="ico" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 383.2 500"><title>Excluir</title><g id="Camada_2" data-name="Camada 2"><g id="Camada_10" data-name="Camada 10"><path class="cls-1" d="M304.95,62.21H267.32v-.62c0-20.76-8.31-37.36-24-48C230,4.57,212.08,0,190,0s-40,4.57-53.31,13.57c-15.72,10.65-24,27.26-24,48v.62H78.25C43.15,62.21,0,106.59,0,142.7a9.41,9.41,0,0,0,9.41,9.41H15V490.59A9.41,9.41,0,0,0,24.42,500H358.54a9.41,9.41,0,0,0,9.41-9.41V462.17a9.41,9.41,0,0,0-18.83,0v19H33.83V152.12H349.12v263a9.41,9.41,0,0,0,18.83,0v-263h5.84a9.41,9.41,0,0,0,9.41-9.41C383.2,106.59,340.05,62.21,304.95,62.21Zm-173.46-.62c0-19.51,10.15-42.77,58.51-42.77s58.51,23.26,58.51,42.77v.62h-117ZM20.24,133.29c2.79-10,9.57-21.14,19-31C51.89,89.18,66.82,81,78.25,81H304.95c11.43,0,26.36,8.15,39,21.26,9.48,9.86,16.26,21,19,31Z"/><path class="cls-1" d="M98.57,217.67V415.1a9.41,9.41,0,0,0,18.83,0V217.67a9.41,9.41,0,1,0-18.83,0Z"/><path class="cls-1" d="M182.13,217.67V415.1a9.41,9.41,0,1,0,18.83,0V217.67a9.41,9.41,0,1,0-18.83,0Z"/><path class="cls-1" d="M265.69,217.67V415.1a9.41,9.41,0,0,0,18.83,0V217.67a9.41,9.41,0,1,0-18.83,0Z"/></g></g></svg>
                  </a>
                </span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div v-else class="inative-box">
        <p>Você ainda não gerou nenhuma tabela.</p>
      </div>
    </div>
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
        listTables: [],

        listTablesPopulated: [
          {
            created_at: "2018-05-30 18:51:03",
            filename: "0",
            id: 1,
            postal_code: "01018020",
            updated_at: "2018-05-30 18:51:03"
          },
          {
            created_at: "2018-05-30 18:51:03",
            filename: "0",
            id: 2,
            postal_code: "01018020",
            updated_at: "2018-05-30 18:51:03"
          },
          {
            created_at: "2018-05-30 18:51:03",
            filename: "0",
            id: 3,
            postal_code: "01018020",
            updated_at: "2018-05-30 18:51:03"
          },
        ]
      }
    },

    methods: {
      populate() {
        this.listTables = this.listTablesPopulated;
      },
      clear() {
        this.listTables = [];
      }
    }

  }
</script>

<style lang="stylus" scoped>

</style>
