<template>
  <div class="home">
    <Header :links="AppData" :tooltipData="AppData.tooltipMain" :fn="changeStateVal"/>
    <div class="container-fluid main-view">
        <LeftNav class="col-lg-2" :data="AppData.template" :tooltip="AppData.tooltipMain" :fn="changeStateVal"/>
        <TitleView class="col-lg-8" :slideImages="AppData.slideImages" :data="AppData.tooltipMain" :templateData="AppData.template" :fn="changeStateVal"/>
        <RightNav class="col-lg-2" :data="AppData.rightNav" :tooltip="AppData.tooltipMain" :fn="changeStateVal"/>
    </div>
   <Footer :links="AppData.footer"/>
   
  </div>
</template>


<script>
import { mapState } from 'vuex'
import jsonData from '../data.json'
import Header from "@/components/organisms/Header.vue";
import LeftNav from "@/components/organisms/LeftNav.vue"
import TitleView from "@/components/organisms/TitleView.vue";
import RightNav from '@/components/organisms/RightNav'
import Footer from '@/components/organisms/Footer'
export default {
   data(){
    return {
      AppData: Object,
    }
  },
   beforeMount(){
       this.AppData = jsonData;
    },
    methods:{
      changeStateVal(newVal){
        debugger;
        this.$store.dispatch("updateStateVal", newVal);
      }
    },
  components:{
    Header,
    TitleView,
    LeftNav,
    RightNav,
    Footer
  }
}
</script>
