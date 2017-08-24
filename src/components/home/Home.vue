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
