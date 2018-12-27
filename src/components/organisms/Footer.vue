<template>
    <footer class="footer__toolbar container-fluid">
      <ul class="col-lg-6" :class="index" v-for="(link,index) in links">
        <li v-for="list in link"  :class="list.textBox ? 'dd': ''" >
          <AppLink v-if="!list.textBox" :label="list.label" :aria-labelledby="list.aria" :img="list.imgSpan" :spanCount="list.spanCount" :url="list.url" :position="list.position" :width="list.width" :height="list.height"  />
          <Input v-if="list.textBox" :typeText="'text'" />
        </li>
      </ul>
    </footer>
</template>

<script>
import AppLink from '../atoms/AppLink'
import Input from '../atoms/AppInput'
export default {
  name: 'Footer',
  components: {
    AppLink,
    Input,
  },
  props: {
    links: Object,
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