<template>

  <div class="painel">
    <div class="painel-title" @dblclick='visible = !visible'> {{ titulo }} </div>
    <transition name="painel-fade">
      <div class="painel-content" v-show="visible">
        <slot></slot>
      </div>
    </transition>
  </div>

</template>

<script>
export default {
  props:['titulo'],
  data() {
    return{
      visible: true
    }
  }

}
</script>

<style lang="scss">
    /* estilo do painel */ 

  .painel {
    border: solid 2px grey;
    display: inline-block;
    margin: 5px;
    box-shadow: 5px 5px 10px grey;
    width: 200px;
    height: 100%;
    vertical-align: top;
    text-align: center;
    overflow: hidden;
    img{ width: 100% }
    .painel-title {
      text-align: center;
      border: solid 2px;
      background: lightblue;
      margin: 0 0 15px 0;
      padding: 10px;
      text-transform: uppercase;
    }
  }
  .painel-fade-enter .painel-fade-leave-active{
    opacity: 0;
  }
  .painel-fade-enter-active, .painel-fade-leave-active{
    transition: opacity .4s;
  }

</style>
