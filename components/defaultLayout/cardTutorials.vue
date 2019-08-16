<template>
    
    <v-card light>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>John Leider</v-list-item-title>
              <v-list-item-subtitle>Founder of Vuetify.js</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn
                :class="fav ? 'red--text' : ''"
                icon
                @click="fav = !fav"
              >
                <v-icon>favorite</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list>
          <v-list-item>
            <v-list-item-action>
              <v-switch v-model="message" color="purple"></v-switch>
            </v-list-item-action>
            <v-list-item-title>Enable messages</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-action>
              <v-switch v-model="hints" color="purple"></v-switch>
            </v-list-item-action>
            <v-list-item-title>Enable hints</v-list-item-title>
          </v-list-item>
        </v-list>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text @click="menu = false">Cancel</v-btn>
          <v-btn color="primary" text @click="menu = false">Save</v-btn>
        </v-card-actions>
      </v-card>

</template>

<script>
export default {
    data:()=>({
      fav:null,
      message:"",
      hints:false, 
        on:undefined,
        menu:undefined
    })
}
</script>
