<template>
	<div>
	    <h1 class="centralizado">Cadastro</h1>

	    <h2 v-if="foto._id"> Alterando </h2>
	    <h2 v-else> incluindo </h2>

	    <form @submit.prevent="add()">
			<div class="controle">
				<label for="titulo">TÍTULO</label>
				<input id="titulo" autocomplete="off" v-model.lazy="foto.titulo">
			</div>

			<div class="controle">
				<label for="url">URL</label>
				<input id="url" autocomplete="off" v-model.lazy="foto.url">
				<imagem-responsiva v-show="foto.url" :url="foto.url" :titulo="foto.titulo"/>
			</div>

			<div class="controle">
				<label for="descricao">DESCRIÇÃO</label>
				<textarea id="descricao" autocomplete="off" v-model="foto.description"></textarea>
			</div>

			<div class="centralizado">
				<botao-cp rotulo="GRAVAR" tipo="submit"/>
				<router-link :to="{ name: 'Home' }"><botao-cp rotulo="VOLTAR" tipo="button"/></router-link>
			</div>

	    </form>
	</div>
</template>

<script>
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue'
import Botao from '../shared/botao/Botao.vue'
import Foto from '../../domain/foto/foto.js'
import FotoService from '../../domain/foto/FotoService.js'

export default{
	components: {
		'imagem-responsiva': ImagemResponsiva,
		'botao-cp': Botao
	},
	data() {
		return {
			foto: new Foto(),
			id: this.$route.params.id
		}
	},
	methods: {
		add() {

			this.service
				.cadastra(this.foto)
				.then(() => {
					if (this.id) this.$router.push({ name: 'Home' });
					this.foto = new Foto();
				}, err => console.log(err))

		}

	},
	created() {
		// this.resource = this.$resource('v1/fotos');
		this.service = new FotoService(this.$resource);
		if (this.id) {
			this.service
				.busca(this.id)
				.then(foto => this.foto = foto);



		}
	}
}

</script>

<style lang="scss">
	.centralizado{ text-align: center}
	.controle{  
		font-size: 1.2em;  
		margin-bottom: 20px; 
		label{
			display: block; 
			font-weight: bold;
		} 
	}
	input, textarea{
		width: 100%
	}

</style>