<template>
  <v-card
    class="mx-auto"
    max-width="400"
    light
    flat
  >
    <v-img
    gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
      class="white--text"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title class="align-end fill-height">
          <nuxt-link to="/articles/1" style="text-decoration: none; color:white;" class="text--white">Top 10 Australian beaches </nuxt-link>
      </v-card-title>
    </v-img>

    <v-card-text>
      <span>Number 10</span><br>
      <span class="text--black">
        <span>Whitehaven Beach</span><br>
        <span>Whitsunday Island, Whitsunday Islands</span>
      </span>
    </v-card-text>

    <v-card-actions>
      <v-btn
        text
        color="blue"
        rounded
      >
        Ir
      </v-btn>
      <tags/>
    </v-card-actions>
  </v-card>
</template>

<script>
import tags from './tagsPopular';
export default {
    data:()=>({

    }),
    components:{
            tags
    }
}
</script>
