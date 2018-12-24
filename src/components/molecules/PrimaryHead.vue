<template>
    <nav class="header__highlight container-fluid">
      <ul class="left">
        <li><AppLink :class="'menu'" :style="style(links[0].menu[0].url, '-18px -18px')" :aria-labelledby="links[0].menu[0].label">
            
          </AppLink></li>
        <li v-for="link in links[0].leftNav">
          <AppLink :img="link.imgSpan" :style="style" :label="link.label" :aria-labelledby="link.label"/>
        </li>
      </ul>
      <ul class="center">
          <li  v-for="link in links[0].center"> 
            {{link.label}}
          </li>
      </ul>
       <ul class="right">
          <li  v-for="(link,index) in links[0].right">
            <span v-show="index ==0"></span> 
            {{link.label}}
          </li>
      </ul>
    </nav>
</template>

<script>
import AppLink from '../atoms/AppLink'
import AppButton from '../atoms/AppButton'
export default {
  name: 'PrimaryHead',
  components: {
    AppLink,
    AppButton
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
        default: true
    },
    isAction:{
        type: Boolean,
        default: false
    }
  },
  methods:{
    style(url, position) {
       return 'background: url('+url+') no-repeat '+position;
            
     }
  }
  }
</script>