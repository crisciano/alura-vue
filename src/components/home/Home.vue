<template>
  <div>
      <h1>{{ titulo }}</h1>
      <input type="search" class="filtre" v-on:input='filtro = $event.target.value' placeholder="filtro">
      {{ filtro }}
      <h2 v-show="mensagem" >{{ mensagem }}</h2>
      <ul>
        <li v-for="foto of fotosFiltro">
          <painel-cp v-bind:titulo='foto.titulo'>
            <img v-bind:src="foto.url" v-dc-transform:rotate.animate.reverse='15' v-bind:alt="foto.titulo">
            <router-link :to="{ name: 'Altera', params: { id: foto._id} }"> 
              <botao-cp tipo='button' rotulo='alterar'/>
            </router-link>
            <botao-cp 
            tipo="button" 
            rotulo="excluir" 
            @botaoAtivado="remove(foto)"
            :confirmacao="true"
            estilo="perigo"/>
          </painel-cp>

        </li>
      </ul>

      <div class="fixed-action-btn horizontal click-to-toggle">
        <a class="btn-floating btn-large red">
          <i class="material-icons">menu</i>
        </a>
        <ul>
          <li><a class="btn-floating red"><i class="material-icons">insert_chart</i></a></li>
          <li><a class="btn-floating yellow darken-1"><i class="material-icons">format_quote</i></a></li>
          <li><a class="btn-floating green"><i class="material-icons">publish</i></a></li>
          <li><a class="btn-floating blue"><i class="material-icons">attach_file</i></a></li>
        </ul>
      </div>

      <!-- Modal Trigger -->
      <a class="waves-effect waves-light btn modal-trigger" id="modal" href="#modal1">Modal</a>

      <!-- Modal Structure -->
      <div id="modal1" class="modal">
        <div class="modal-content">
          <h4>Modal Header</h4>
          <p>A bunch of text</p>
        </div>
        <div class="modal-footer">
          <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
        </div>
      </div>
              
  </div>

</template>

<script>
import Painel from "../shared/painel/Painel.vue";
import Botao from "../../components/shared/botao/Botao.vue"
import FotoService from '../../domain/foto/FotoService.js'

export default {
  components: {
    'painel-cp': Painel,
    'botao-cp': Botao

  }, 
  data() {
    return {
      titulo: 'fotos',
      fotos: [ ],
      mensagem: '',
      filtro: ''

    }
  },
  computed:{
    fotosFiltro(){
      if (this.filtro) {
        /* filtrar */
        let exp = new RegExp(this.filtro.trim(), 'i');
        return this.fotos.filter(foto => exp.test(foto.titulo));
      }else{
        return this.fotos;
      }
    }
  },
  methods:{
    remove(foto) {

      this.service.apaga(foto._id)
      .then(() => {
              let indice = this.fotos.indexOf(foto);
              this.fotos.splice(indice, 1);
              this.mensagem = 'foto apagada com sucesso' }, 
            err => this.mensagem = err.message );
    }
  },
  created() {

    this.service = new FotoService(this.$resource);

    this.service
      .lista()
      .then(fotos => this.fotos = fotos, err => this.mensagem = err.message);
  }

}
</script>

<style lang="scss">
  ul{
    list-style: none;
    li{
      display: inline-block
    }
  }
  img{width: 100%}
  .filtre{
    display: block;
    width: 100%;
  }

</style>
