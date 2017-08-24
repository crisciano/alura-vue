<template>
	<nav id="nav">
      <ul>
      	<li v-for="route in routes">
      		<router-link :to="route.path ? route.path : '/'">{{ route.name }}</router-link>
      	</li>
        <!-- <li class="li">
          <router-link to='/'> home </router-link>
        </li>
        <li class="li">
          <router-link to='/cadastro'> cadastro </router-link>
        </li> -->
      </ul>
    </nav>
	
</template>

<script>
	import { routes } from "../../routes";

	export default {

		data() {
			return {
				routes : routes.filter( router => router.menu )
			}
		}
		
	}

</script>

<style lang="scss">
	#nav{
		li{ padding: 10px 20px; 
			background: #ccc;
			margin: 0 5px;
			a{ text-decoration: none;
				color: #fff ;} 
		}
		
	}
	
</style>