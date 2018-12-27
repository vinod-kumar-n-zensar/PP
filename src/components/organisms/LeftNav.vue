<template>
    <ul class="leftNav__list">
      <li v-for="(item,key,index) in data[0]" class="leftNav__container" :class="index == 0 ? 'active' : ''">
        <span class="col-lg-1 leftNav__container--counter">{{index + 1}}</span>
        <div class="col-lg-11 leftNav__container--content" :class="index == 0 ? 'justify' : key">
          <Tooltip v-show="state.state.navigation == 'slide2'" v-if="key === 'slide2'" :content="tooltip.leftNavSlide2.title" :link="true" :linkLabel="tooltip.leftNavSlide2.link" arrow="left" :setStateNav="fn" :fnVal="'keywords'"/>
          <Tooltip v-show="state.state.navigation == 'slide3'" v-if="key === 'slide3'" :content="tooltip.slide5.title" :link="true" :linkLabel="tooltip.slide5.link" arrow="left" :setStateNav="fn" :fnVal="'punctuation'"/>
          <AppHeaderTag :grade="'h5'" :label="item.label" />
          <div v-if="item.nav" :class="item.nav ? 'list': ''">
                <ul>
                  <li v-for="listData in item.list" v-html="listData.title">{{listData.title}}</li>
                </ul>
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
    fn: Function
  },
  data(){
    return{
      state: this.$store
    }
  },
components:{
  AppHeaderTag,
  Tooltip
}
}
</script>