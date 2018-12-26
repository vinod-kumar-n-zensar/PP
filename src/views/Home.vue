<template>
  <div class="home">
    <Header :links= "AppData" :tooltipData="AppData.tooltipMain"/>
    <div class="container-fluid main-view">
        <LeftNav class="col-lg-2" :data="AppData.template" :tooltip="AppData.tooltipMain" />
        <TitleView class="col-lg-8" :data="AppData.tooltipMain" :templateData="AppData.template"/>
        <RightNav class="col-lg-2" :data="AppData.rightNav" :tooltip="AppData.tooltipMain"/>
    </div>
   
   
  </div>
</template>


<script>
import jsonData from '../data.json'
import Header from "@/components/organisms/Header.vue";
import LeftNav from "@/components/organisms/LeftNav.vue"
import TitleView from "@/components/organisms/TitleView.vue";
import RightNav from '@/components/organisms/RightNav'
export default {
   data(){
    return {
      AppData: Object
    }
  },
   beforeMount(){
     debugger
       this.AppData = jsonData;
       console.log(this.AppData)
    },
  components:{
    Header,
    TitleView,
    LeftNav,
    RightNav
  }
}
</script>
