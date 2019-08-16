<template>
  <v-carousel
    cycle
    height="400"
    show-arrows-on-hover
    
      delimiter-icon="mdi-minus"
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
      
    >
      <v-sheet
        :color="colors[i]"
        height="100%"
        :style="'background-image: url(https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=823&q=80); background-color: #cccccc;  height: 500px;  background-position: center; background-repeat: no-repeat; background-size: cover;'"
        tile
      >
      <v-container fluid>
        <v-layout
          align-center
          fill-height
          justify-center
        >
          <div class="display-3">{{ slide }} Slide</div>
        </v-layout>
      </v-container>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
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
      }
    },
  }
</script>