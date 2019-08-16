<template>
  

<v-container fluid>
  <v-layout wrap>
     <v-flex lg12 xs12 sm12>
       <h4 class="display-1 black--text" >Articulos</h4>
       <v-divider horizontal class="grey"></v-divider>
     </v-flex>
    <v-flex xl3 lg3 md4 sm6 xs12 v-for="index in 7" :key="index">
      <cardFeed/>
    </v-flex>
  </v-layout>
</v-container>

</template>


<script>
import cardFeed from './cardFeed';
export default {
  data:()=>({}),
  components:{
    cardFeed
  }
}
</script>
