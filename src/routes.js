import Cadastro from './components/cadastro/Cadastro.vue'
import Home from './components/home/Home.vue'
import Erro from './components/error/Error.vue'

export const routes = [
	{ path: '', component: Home, name:'Home', menu: true },
	{ path: '/cadastro', component: Cadastro, name: 'Cadastro', menu: true },
	{ path: '/cadastro/:id', component: Cadastro, name: 'Altera', menu: false },
	{ path: '*', component: Erro, menu: false }
];