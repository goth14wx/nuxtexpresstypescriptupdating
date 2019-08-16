<template>
  <v-card
    class="mx-auto"
    tile
    flat
    style="border-left:1px solid  #BDBDBD; padding-left: 20px; background-color:white"
  >
  <v-divider class="grey lighten-1"></v-divider>

   <v-list three-line flat elevation="0" tile light height="400px" style="overflow-y: auto; " class="hideScrollbar">
      <template v-for="(item, index) in items">
        <v-subheader
          v-if="item.header"
          :key="item.header"
          class="cambayFont"
          style="border-bottom:1px solid black; font-size:15px"
        >
        {{item.header}} &nbsp <tagsPopular/><!--TAGS POPULAR COMPONENT-->
        </v-subheader>
        

        <v-divider
          v-else-if="item.divider"
          :key="index"
          :inset="item.inset"
        ></v-divider>

        <v-list-item
            @click="()=>{alert('hi')}"
          v-else
          :key="item.title"
        >
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>

<script>
import tagsPopular from './tagsPopular';
  export default {
    data: () => ({
      items: [
        { header: 'Popular Hoy' },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: "&mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: "&mdash; Wish I could come, but I'm out of town this weekend.",
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: "&mdash; Do you have Paris recommendations? Have you ever been?",
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle: "&mdash; Have any ideas about what we should get Heidi for her birthday?",
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle: "&mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
        },
      ],
    }),
    components:{
        tagsPopular
    }
  }
</script>

<style>

/* Color scrollbar*/
.hideScrollbar::-webkit-scrollbar-thumb {
    background: white;
    border-radius: 4px;
}

/* hover color scrollbar */
.hideScrollbar::-webkit-scrollbar-thumb:hover {
    background: white;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
}

/* select color scrollbar */
.hideScrollbar::-webkit-scrollbar-thumb:active {
    background-color: white;
}

</style>

