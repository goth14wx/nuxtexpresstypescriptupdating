<template>

  <v-container fluid  grid-list-xl>
      <v-layout wrap >
          <v-flex lg6 md6 xs12 sm12>
            <carouselNews/><!--CAROUSEL-->
          </v-flex>
          <v-flex lg6 md6 xs12 sm12>
            <listNews/><!--list-->
          </v-flex>
      </v-layout>
      <v-layout wrap>
          <v-flex lg12>
            <feedList/>
          </v-flex>
      </v-layout>
  </v-container>

</template>

<script>

import carouselNews from '@/components/home/carouselNews';
import listNews from '@/components/home/listNews';
import feedList from '@/components/home/feedList';

export default {
  data(){
    return{

    }
  },
  layout:"default",
  components:{
    carouselNews,
    listNews,
    feedList
  }
}
</script>
