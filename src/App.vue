<template>
  <div>
   <!--  <nav>
      <ul>
        <li class="li">
          <router-link to='/'> home </router-link>
        </li>
        <li class="li">
          <router-link to='/cadastro'> cadastro </router-link>
        </li>
      </ul>
    </nav> -->
    <nav-cp></nav-cp>
    <section id="app">
      <div class="container">
        <div class="row">
          <transition name="load">
            <router-view></router-view>
            
          </transition> 
        </div>
      </div>
    </section>
    
  </div>

</template>

<script>
import Nav from "./components/menu/Menu.vue";
export default {
  components:{
    'nav-cp': Nav
  }

}
</script>

<style lang="scss">
  body{
    margin: 0;
    padding: 0;
  }
  .container{
    width: 90%;
    margin: 0 auto;
    padding: 0 15px;
    .row{
      margin-right: -15px;
      margin-left: -15px;
    }
  }
  .load-enter .load-leave-active{
    opacity: 0;
  }
  .load-enter-active, .load-leave-active{
    transition: opacity .2s;
  }

</style>
