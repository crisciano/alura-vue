<template>
    <button @click="disparaAcao()" class="botao" :class="estiloDoBotao" :type="tipo">{{ rotulo }}</button>
</template>

<script>

export default {

    props: {

        tipo: {
            required: true, 
            type: String
        },

        rotulo: {
            required: true, 
            type: String
        }, 

        confirmacao: Boolean,
        estilo: String

    },

    methods: {

        disparaAcao() {

            if(this.confirmacao) {
                if(confirm('Confirma operação?')) {
                    this.$emit('botaoAtivado');
                }
                return;
            }
            this.$emit('botaoAtivado');
        }
    },

    computed: {

        estiloDoBotao() {

            if(this.estilo == 'padrao' || !this.estilo) return 'botao-padrao';
            if(this.estilo == 'perigo') return 'botao-perigo';
        }

    }
}
</script>

<style>
    .botao { display: inline-block; padding: 8px 15px; margin: 10px; font-size: 1em; font-weight: bold; border: none; }
    .botao-perigo { background: firebrick; color: white; }
    .botao-padrao { background: darkcyan; color: white; }
</style>