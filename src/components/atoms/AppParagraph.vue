<template>
  <p v-if="span"
    :class="align"
  >
    <span>{{spanContent}}</span> {{ content }}
  </p>
  <p v-else
    :class="align"
  >
    {{ content }}
  </p>
</template>

<script>
export default {
  name: 'AppParagraph',
  data () {
    return {}
  },
  props: {
    content: String,
    align: {
      type: String,
      default: 'left'
    },
    span: Boolean,
    spanContent: String
  }
}
</script>

