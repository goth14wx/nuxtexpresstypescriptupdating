<template>
  <v-bottom-navigation
  class="hidden-md-and-up"
    :value="activeBtn"
    color="deep-purple"
    horizontal
    fixed
    light
    app
  >
    <v-btn>
      <span class="comfortaaFont">Tutorials</span>
      <v-icon>assignment</v-icon>
    </v-btn>

    <v-btn>
      <span class="comfortaaFont">Blog</span>
      <v-icon>speaker_notes</v-icon>
    </v-btn>

    <v-btn>
      <span class="comfortaaFont">Info</span>
      <v-icon>info</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
    data(){
        return{
            activeBtn:true
        }
    }
}
</script>
