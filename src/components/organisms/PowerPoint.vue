<template>
  <div class="home">
    <div v-show="store.state.navigation != 'finishtour'">
        <Header :links="AppData" :tooltipData="AppData.tooltipMain" :fn="changeStateVal"/>
        <div class="container-fluid main-view">
            <LeftNav class="col-lg-2" :slideImages="AppData.leftNavImages" :data="AppData.template" :tooltip="AppData.tooltipMain" :fn="changeStateVal"/>
            <TitleView class="col-lg-8" :slideImages="AppData.slideImages" :data="AppData.tooltipMain" :templateData="AppData.template" :fn="changeStateVal"/>
            <RightNav class="col-lg-2" :data="AppData.rightNav" :tooltip="AppData.tooltipMain" :fn="changeStateVal"/>
        </div>
      <Footer :links="AppData.footer"/>
   </div>
   <div v-show="store.state.navigation == 'finishtour'">
     <TourGuide :fn="changeStateVal" :content="AppData.tourGuide"/>
   </div>
   <StatusBar />
  </div>
</template>


<script>
import jsonData from '../../data.json'
import Header from "@/components/organisms/Header.vue";
import LeftNav from "@/components/organisms/LeftNav.vue"
import TitleView from "@/components/organisms/TitleView.vue";
import RightNav from '@/components/organisms/RightNav'
import Footer from '@/components/organisms/Footer'
import StatusBar from '@/components/molecules/StatusBar'
import TourGuide from '@/components/molecules/TourGuide'
export default {
   data(){
    return {
      AppData: Object,
      store: this.$store
    }
  },
   beforeMount(){
       this.AppData = jsonData;
       if(localStorage.getItem('navigation')!= null){
         this.$store.dispatch("updateStateVal", localStorage.getItem('navigation'));
       }
    },
    methods:{
      changeStateVal(newVal){
        this.$store.dispatch("updateStateVal", newVal);
        localStorage.setItem('navigation',newVal);
      }
    },
  components:{
    Header,
    TitleView,
    LeftNav,
    RightNav,
    Footer,
    StatusBar,
    TourGuide
  }
}
</script>
