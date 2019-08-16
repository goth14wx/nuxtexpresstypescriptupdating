<template>
<v-app style="background-color:white">
  <navbar/>
  <v-content>
      <nuxt/>
  </v-content>
  <buttomNavbar />
</v-app>
</template>

<script>
import navbar from '@/components/defaultLayout/navbar.vue';
import buttomNavbar from '@/components/defaultLayout/buttomNavbar';
export default {
    data: () => ({
      colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
    }),
    components:{
      navbar,
      buttomNavbar
    }
  }
</script>

<style>
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background:white; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: white; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
</style>

