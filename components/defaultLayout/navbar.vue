<template>
  <v-app-bar
      class="bakgroundMove"
      dark
      app
      flat
      height="80px"
      hide-on-scroll
    >
      <v-img src="/spiderWebCorner.png" style="height:78px; width:100px; position: absolute"></v-img>
      <v-toolbar-title class="mx-lg-12 quicksandFont">
       
        <nuxt-link :to="'/'" style="text-decoration:none; color:white">SpyWer</nuxt-link> </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
      <v-menu
      v-model="menu"
      :close-on-content-click="false"
      offset-x
    >
      <template v-slot:activator="{ on }">
        <v-btn
          
          v-on="on"
          text
          class="comfortaaFont"
        >
          Tutorials
        </v-btn>
      </template>

      <cardTutorials/>
    </v-menu>

      <v-divider vertical></v-divider>

      <v-btn text class="comfortaaFont">
        Blog
      </v-btn>

      <v-divider vertical></v-divider>

      <v-btn text class="comfortaaFont">
        Info
      </v-btn>

      <v-divider vertical class="comfortaaFont"></v-divider>
    </v-toolbar-items>
    </v-app-bar>

</template>

<script>
import cardTutorials from './cardTutorials';
  export default {
    data: () => ({
      hideOrNot:true,
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
      on:undefined,
      menu:null,
    }),
    methods:{
        showAlert(){
           alert('done'); 
        }
    },
    components:{
      cardTutorials
    }
  }
  //style="background:linear-gradient(90deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%);"
</script>

<style>
.bakgroundMove {
	width: 100wh;
	height: 90vh;
	color: #fff;
	background: linear-gradient(90deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%);
	background-size: 400% 400%;
	-webkit-animation: Gradient 15s ease infinite;
	-moz-animation: Gradient 15s ease infinite;
	animation: Gradient 15s ease infinite;
}



@-webkit-keyframes Gradient {
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
}

@-moz-keyframes Gradient {
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
}

@keyframes Gradient {
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
}

</style>
