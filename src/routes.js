// import Cadastro from './components/cadastro/Cadastro.vue'
// import Erro from './components/error/Error.vue'
// boas praticas
const Cadastro = () => System.import('./components/cadastro/Cadastro.vue');
const Erro = () => System.import('./components/error/Error.vue');
import Home from './components/home/Home.vue'

export const routes = [
	{ path: '', component: Home, name:'Home', menu: true },
	{ path: '/cadastro', component: Cadastro, name: 'Cadastro', menu: true },
	{ path: '/cadastro/:id', component: Cadastro, name: 'Altera', menu: false },
	{ path: '*', component: Erro, menu: false }
];