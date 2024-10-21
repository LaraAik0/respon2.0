<template>

  <div class="hello">
    <h1> Joanas</h1>
    <h2> Elas são de várias cores como por exemplos:</h2>
    <br>
    <br>
    
  </div>

    <imagemDiversos/>
    <br>
    <videoUnico/>
    <br>
    <tabelaUnica/>

</template>

<script>
import imagemDiversos from './imagemDiversos.vue';
import videoUnico from './videoUnico.vue';
import tabelaUnica from './tabelaUnica.vue';
    export default {
        name: 'PaginaPrincipal', 
        components:{
            imagemDiversos,videoUnico,tabelaUnica
        },
        props: {
            msg: String
        }
    }
</script>

<style scoped></style>