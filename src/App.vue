<template>
    <div>
        <Header v-if="headershow"></Header>

        <loading v-if="loadingshow"></loading>
         <router-view></router-view>
 


        <Footer v-if="footershow"></Footer>
    </div>
</template>
<script>
import Header from './components/Header'

import {mapGetters} from 'vuex'
import Footer from './components/Footer'
import Loading from './components/Loading'
import Home from './components/Home'
    export default{
      components:{
        Header,
        Footer,
        Loading,
        Home
      },
      computed:mapGetters([
      'loadingshow',
      'footershow',
      'headershow'
  ]),
       methods:{
           headerstate(path){
               (path.indexOf('user-infor')>0||path.indexOf('article')>0)
               ? this.$store.dispatch('headerhide')
               :this.$store.dispatch('headershow')
           },
           footerstate(path){
               (path.indexOf('user-infor')>0)
               ?this.$store.dispatch('footerhide')
               :this.$store.dispatch('footershow');
           }
       },
       mounted(){
           let path=this.$route.path
           this.headerstate(path)
           this.footerstate(path)
       },
     watch:{
      $route:function(to){
      var path=to.path
      this.headerstate(path);
      this.footerstate(path)
        }
      }
    }
</script>

<style>
@import './assets/css/index.css'

</style>
