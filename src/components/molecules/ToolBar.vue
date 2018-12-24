<template>
    <nav class="header__toolbar container-fluid">
      <ul :class="index" v-for="(link,index) in links[0]">
        <li v-for="list in link" :class="list.textBox ? 'dd': ''" >
          <AppLink v-if="!list.textBox" :label="list.label" :aria-labelledby="list.aria" :img="list.imgSpan" :spanCount="list.spanCount" :url="list.url" :position="list.position" :width="list.width" :height="list.height"  />
          <Input v-if="list.textBox" :typeText="'text'" />
          
           <Tooltip v-if="list.label == 'Ideas'" :link="list.tooltip.link" :linkLabel="list.tooltip.linklabel" :content="list.tooltip.content" :arrow="list.tooltip.arrow"/>
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
  data () {
    return {
      baseUrl: process.env.BASE_URL
    }
  },
  props: {
    links: Array,
    isAnchor:{
        type: Boolean,
        default: false
    },
    isAction:{
        type: Boolean,
        default: false
    }
  },
}
</script>