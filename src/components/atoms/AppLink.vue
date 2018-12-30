
<template>
  <a
    v-if="isNewWindow"
    :class="linkName"
    :href="path"
    target="_blank"
  >
    {{ label }}
  </a>
    <a 
    v-else-if="spanCount"
    :class="linkName"
    :href="path"
  >
    <span :style = style(url,position,width,height)></span> {{ label }} <span :style = style(url)></span>
  </a>
     <a @click="fn('slide1')"
    v-else-if="img"
    :class="linkName"
     :href="path"
  >
    <span  :style = style(url,position,width,height)></span> {{ label }}
  </a>
  <a
    v-else
    :class="linkName"
     :href="path"
  >
    {{ label }}
  </a>

</template>

<script>
export default {
  name: 'AppLink',
  data () {
    return {}
  },
  props: {
    label: String,
    path: String,
    linkName: String,
    img:Boolean,
    spanCount:Boolean,
    position:String,
    url: String,
    width:String,
    height: String,
    isNewWindow: {
      type: Boolean,
      default: false
    },
    fn:Function,
    fnVal:String
  },
  methods:{
    style(url, position,width,height) {
       if(position !=undefined && width !=undefined){
        return 'background: url('+url+')'+position+'; width:'+width +';height:'+height;
      } else if(position != undefined){
        return 'background: url('+url+') no-repeat '+position; 
      } else if(url !=undefined){
        return 'background: url('+url+') no-repeat';
      }
        
     },
  }
}
</script>