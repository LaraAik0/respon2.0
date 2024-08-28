<template>
  <div class="hello">
    <h1> Joanas</h1>
    <h2> Elas são de várias cores como por exemplos:</h2>
    <br>
    <br>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
P{
  font-size: 23px;
}
h1{
  color: blueviolet;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
* {
    box-sizing: border-box;
}

h2{
    text-align: center;

}
h1{
    text-align: center;
}
iframe{

    display: table;
    margin: auto;
}
table{
    display: table;
    margin: auto;
    border-collapse: collapse;
}

td {
    padding: 6px;
}

.secao {
    display: flex;
    margin: auto;
    margin-bottom: 1rem;
    width: 25%;
}
.subsecao {
    width: 100%;
}
.imagemUnica {
    display: table;
    width: 100%;
}
.imagemNaoUnica {
    width: 100%;
}


@media only screen and (max-device-width: 700px) {
    .secao {
        display: block;
    }
   .img1{
    border: 2px;
    height: 300px;
        width: 30%;
   }
   .img2{

    height: 300px;
        width: 30%;
    
   }
   .img3{
    height: 300px;
    width: 30%;
   }
    h2{
        text-align: center;
        font-size: 23px;
    }
    h1{
        text-align: center;
        font-size: 50px;
    }

    iframe{
        width: 43%;
        height: 350px;
    }
    table{
        font-size: 20px;
        width: 40%;
    height: 20px;
    }
}@media only screen and (max-device-width: 300px) {
    
    img{ 
        height: 30%;
        width: 30%;
    }
    h2{
        text-align: center;
        font-size: 60px;
    }
    h1{
        text-align: center;
        font-size: 80px;
    }
           
    iframe{
        width: 70%;
        height: 350px;
    }
    table{
        font-size: 60px;
        width: 90%;
    height: 480px;
    }
}

</style>
