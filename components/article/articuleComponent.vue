<template>
 
 <v-container fluid style="padding:0 !important">
    <v-layout wrap>
        <v-flex lg12 sm12 xs12 md12>
            <v-parallax
    :dark="true"
    height="500"
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
    <v-layout
      align-center
      column
      justify-center
    >
      <h1 class="display-2 font-weight-thin mb-4" @click="scroll">Vuetify.js</h1>
      <h4 class="subheading">Build your application today!</h4>
    </v-layout>
  </v-parallax>
        </v-flex>
    </v-layout>
    <v-layout>

        <v-flex xl12 lg12 md12 sm12 xs12>
            
            <v-container fluid>
                <v-layout wrap class="pt-12">
                    <v-flex xl2 lg2 md2 sm2 class="hidden-xs-only">
                      <menuArticleListComponent/>
                    </v-flex>
                    <v-flex xl8 lg8 md8 sm8 xs12 class="black--text text-lg-justify text-xl-justify text-md-justify text-sm-justify text-xs-justify" v-html="articleData">
                        
                    </v-flex>
                    <v-flex xl2 lg2 md2 sm2 class="hidden-xs-only">
                      <h2 class="black--text mb-5">Tags</h2>
                      <tagsPopular/>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-flex>

    </v-layout>
 </v-container>

</template>

<script>
import menuArticleListComponent from './menuArticleListComponent';
import tagsPopular from '../home/tagsPopular';
export default {
    data:()=>({
        articleData:"<h2 class=\"pt-5 pb-12 font-weight-thin display-2 black--text\">Charlie</h2><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, alias, laborum aliquam sint eveniet impedit iste veniam aspernatur optio autem quia adipisci iusto molestias sequi. Ex expedita enim quae sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore odio cumque, accusamus quas corrupti ipsum. Commodi quas quod laudantium, asperiores quidem omnis amet itaque minima ipsam quae autem doloremque officiis? </p> <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat ea eum cupiditate nam ratione voluptatum deleniti architecto laborum vel sapiente, natus deserunt beatae accusamus! Quas quaerat laboriosam numquam commodi possimus?</p><p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat ea eum cupiditate nam ratione voluptatum deleniti architecto laborum vel sapiente, natus deserunt beatae accusamus! Quas quaerat laboriosam numquam commodi possimus?</p><p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat ea eum cupiditate nam ratione voluptatum deleniti architecto laborum vel sapiente, natus deserunt beatae accusamus! Quas quaerat laboriosam numquam commodi possimus?</p><p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat ea eum cupiditate nam ratione voluptatum deleniti architecto laborum vel sapiente, natus deserunt beatae accusamus! Quas quaerat laboriosam numquam commodi possimus?</p><p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat ea eum cupiditate nam ratione voluptatum deleniti architecto laborum vel sapiente, natus deserunt beatae accusamus! Quas quaerat laboriosam numquam commodi possimus?</p><p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat ea eum cupiditate nam ratione voluptatum deleniti architecto laborum vel sapiente, natus deserunt beatae accusamus! Quas quaerat laboriosam numquam commodi possimus?</p><p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat ea eum cupiditate nam ratione voluptatum deleniti architecto laborum vel sapiente, natus deserunt beatae accusamus! Quas quaerat laboriosam numquam commodi possimus?</p><p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat ea eum cupiditate nam ratione voluptatum deleniti architecto laborum vel sapiente, natus deserunt beatae accusamus! Quas quaerat laboriosam numquam commodi possimus?</p><p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat ea eum cupiditate nam ratione voluptatum deleniti architecto laborum vel sapiente, natus deserunt beatae accusamus! Quas quaerat laboriosam numquam commodi possimus?</p>Example of an inline element."
                       ,
    }),
    methods:{
      scroll(){
        window.scrollTo({
  top: 0,
  left: 0,
  behavior: 'smooth'
});
      }
    },
    components:{
      menuArticleListComponent,
      tagsPopular
    }
}
</script>
