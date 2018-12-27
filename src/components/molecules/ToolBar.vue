<template>
    <nav class="header__toolbar container-fluid">
      <ul :class="index" v-for="(link,index) in links[0]">
        <li v-for="list in link" :class="list.textBox ? 'dd': ''" >
          <AppLink v-if="!list.textBox" :label="list.label" :aria-labelledby="list.aria" :img="list.imgSpan" :spanCount="list.spanCount" :url="list.url" :position="list.position" :width="list.width" :height="list.height"  />
          <Input v-if="list.textBox" :typeText="'text'" />
          <div class="presentation--tooltip" v-show="state.state.navigation == 'finish'" v-if="list.label == 'Ideas'">
            <Tooltip :content="tooltipData.presentation.title" :link="true" :linkLabel="tooltipData.presentation.link" arrow="left" :setStateNav="fn" :fnVal="'ideas'"/>
          </div>
          
           <Tooltip v-if="list.label == 'Ideas'" v-show="state.state.navigation == 'ideas'" :link="list.tooltip.link" :linkLabel="list.tooltip.linklabel" :content="list.tooltip.content" :arrow="list.tooltip.arrow" :setStateNav="fn" :fnVal="'slide1'"/>
        </li>
      </ul>
    </nav>
</template>

<script>
import AppLink from '../atoms/AppLink'
import Input from '../atoms/AppInput'
import Tooltip from './Tooltip'
export default {
  name: 'ToolBar',
  components: {
    AppLink,
    Input,
    Tooltip
  },
  data(){
    return{
      state: this.$store
    }
  },
  props: {
    links: Array,
    tooltipData: Object,
    isAnchor:{
        type: Boolean,
        default: false
    },
    isAction:{
        type: Boolean,
        default: false
    },
    fn: Function
  },
}
</script>