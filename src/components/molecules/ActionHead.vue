<template>
    <nav class="header__actionHead">
      <ul class="left col-lg-9">
      <li v-for="(link,index) in links[0].leftNav" :class="index == 1 ? 'active' : ''">
        <AppLink  :img="link.imgSpan" :aria-labelledby="link.label" :label="link.label"/>
      </li>
    </ul>

    <ul class="right col-lg-3">
      <li v-for="(link, index) in links[1].right">
        <AppLink :class="link.label" :img="link.imgSpan" :aria-labelledby="link.label" :label="link.label"/>
      </li>
    </ul>
    </nav>
</template>

<script>
import AppLink from '../atoms/AppLink'
import AppButton from '../atoms/AppButton'
export default {
  name: 'ActionHead',
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
        default: false
    },
    isAction:{
        type: Boolean,
        default: false
    }
  }
}
</script>