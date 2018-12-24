<template>
    <ul class="leftNav__list">
      <li v-for="(item,key,index) in data[0]" class="leftNav__container" :class="index == 0 ? 'active' : ''">
        <span class="col-lg-1 leftNav__container--counter">{{index + 1}}</span>
        <div class="col-lg-11 leftNav__container--content">{{item.label}}</div>
      </li>
    </ul>  
</template>

<script>
export default {
  name: 'LeftNav',
  props:{
    links: Object,
    data: Array
  },

}
</script>