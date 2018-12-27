<template>
  <div class="slide" :class="state.state.navigation">
          <div class="slide__main" :class="key" v-for="(list,key,index) in templateData[0]">
            <div class="slide__main__head col-lg-12" :class="index == 0 ? 'main':''">
                <Input :typeText="'text'" :textValue="list.label"/>
            </div>
            <div class="slide__main__sub">
              <div v-if="list.nav" :class="list.nav ? 'list': ''">
                <ul>
                  <li v-for="listData in list.list" v-html="listData.title">{{listData.title}}</li>
                </ul>
              </div>
                <div v-else>
                    <Tooltip v-show="state.state.navigation == 'slide1'"  :content="data.slide1.title" :link="true" :linkLabel="data.slide1.link" :arrow="'top'" :setStateNav="fn" :fnVal="'windenergy'"/>
                    <Input  :typeText="'text'" :textValue="list.text" :class="state.state.navigation == 'windenergy' ? 'style': '' "/>
                </div>
            </div>
          </div>
          <div class="slide__main" v-show="state.state.navigation == 'designer'">
                        <div class="slide__main__head col-lg-12">
               <img :src="slideImages.slide1" alt="">
            </div>
          </div>
          <div class="slide__main" v-show="state.state.navigation == 'slide2'">
                        <div class="slide__main__head col-lg-12">
               <img :src="slideImages.mainSlide1" alt="">
            </div>
          </div>
          <div class="slide__main active" v-show="state.state.navigation == 'slide3'">
                        <div class="slide__main__head col-lg-12">
               <img :src="slideImages.slide3" alt="">
            </div>
          </div>
          <div class="slide__main active" v-show="state.state.navigation == 'finish'">
                        <div class="slide__main__head col-lg-12">
               <img :src="slideImages.slide4" alt="">
            </div>
          </div>
         </div>
</template>

<script>
import Input from '../atoms/AppInput';
import Tooltip from '../molecules/Tooltip';
export default {
  name: 'TitleView',
  props:{
    data: Object,
    templateData: Array,
    fn: Function,
    slideImages:Object
  },
  data(){
    return{
      state: this.$store
    }
  },
  components:{
    Input,
    Tooltip
  }
}
</script>