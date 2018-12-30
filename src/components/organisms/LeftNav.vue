<template>
    <ul class="leftNav__list" :class="state.state.navigation">
      <li v-for="(item,key,index) in data[0]" class="leftNav__container" :class="index == 0 ? 'active' :  ''" >
        <span class="col-lg-1 leftNav__container--counter">{{index + 1}}</span>
        <div class="col-lg-11 leftNav__container--content" :class="index == 0 ? 'justify ' +key : key">
          <div class="raw-presentation" @click="state.state.navigation == 'slide2' && index == 1 ? fn('keywords') : state.state.navigation == 'slide3' && index == 2 ? fn('punctuation') : ''">
              <Tooltip v-show="state.state.navigation == 'slide2'" v-if="key === 'slide2'" :content="tooltip.leftNavSlide2.title" :link="true" :linkLabel="tooltip.leftNavSlide2.link" arrow="left" :setStateNav="fn" :fnVal="'keywords'"/>
              <Tooltip v-show="state.state.navigation == 'slide3'" v-if="key === 'slide3'" :content="tooltip.slide5.title" :link="true" :linkLabel="tooltip.slide5.link" arrow="left" :setStateNav="fn" :fnVal="'punctuation'"/>
              <AppHeaderTag :grade="'h5'" :label="item.label" />
              <div v-if="item.nav" :class="item.nav ? 'list': ''">
                    <ul>
                      <li v-for="listData in item.list" v-html="listData.title">{{listData.title}}</li>
                    </ul>
              </div>
          </div>
                   <div v-if="index == 0" class="leftNav__container--content--images ">
            <img class=" images" v-for="img in slideImages[0].slide1" :src="img.url" alt="">
          </div>
          <div v-if="index == 1" class="leftNav__container--content--images images">
            <img class=" images" :src="slideImages[2].slide3.url" alt="">
          </div>
           <div v-if="index == 2" class="leftNav__container--content--images images">
            <img class=" images" :src="slideImages[3].slide4.url" alt="">
          </div>
        </div>
      </li>
    </ul>  
</template>

<script>
import AppHeaderTag from '../atoms/AppHeaderTag';
import Tooltip from '../molecules/Tooltip'
export default {
  name: 'LeftNav',
  props:{
    links: Object,
    data: Array,
    tooltip: Object,
    fn: Function,
    slideImages: Array
  },
  data(){
    return{
      state: this.$store
    }
  },
components:{
  AppHeaderTag,
  Tooltip
},
created(){

        this.$store.watch(
        (state)=>{
            return this.$store.state.navigation // could also put a Getter here
        },
        (newValue, oldValue)=>{
          function removeActive(ele,arg){
            for(let i=0;i<=ele.length-1;i++){
              ele[i].classList.remove(arg)
            }
          }
          let slectArr =['ideas','slide1','windenergy','designer','slide2','keywords','slide3','punctuation','timeline','finish'];
          let getNum = slectArr.indexOf(newValue);
          let getliEl = document.getElementsByClassName('leftNav__container');
            if(getNum<3){
              removeActive(getliEl,'active');
              getliEl[0].className += ' active';
            } else if(getNum == 5){
               removeActive(getliEl,'active');
              getliEl[1].className += ' active';
            }else if(getNum >= 7){
               removeActive(getliEl,'active');
              getliEl[2].className += ' active';
            }
        })
   },
}
</script>