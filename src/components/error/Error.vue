<template>
	<div class="error">
		<h1>Pagina não  encontrada</h1>
		<router-link :to="{ name: 'Home' }"><botao-cp rotulo="VOLTAR" tipo="button"/></router-link>
	</div>
</template>

<script>
	import Botao from '../shared/botao/Botao.vue'

	export default{
		components: {
			'botao-cp': Botao
		}
	}
</script>

<style>
	
</style>