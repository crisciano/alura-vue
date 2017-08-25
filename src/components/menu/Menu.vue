<template>
	<nav class="navbar navbar-toggleable-md navbar-light bg-faded">
	  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
	    <span class="navbar-toggler-icon"></span>
	  </button>
	  <router-link class="navbar-brand" :to="{ name: 'Home' }">Navbar</router-link >
	  <div class="collapse navbar-collapse" id="navbarNav">
	    <ul class="navbar-nav" v-for="route in routes">
	      <li class="nav-item">
	        <router-link :to="route.path ? route.path : '/'">{{ route.name }}</router-link>
	      </li>
	    </ul>
	  </div>
	</nav>
	<!-- <nav id="nav">
      <ul>
      	<li v-for="route in routes">
      		<router-link :to="route.path ? route.path : '/'">{{ route.name }}</router-link>
      	</li>
      </ul>
    </nav> -->
	
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
		li{ 
			a{ text-decoration: none;
				color: #fff ;} 
		}
		
	}
	
</style>