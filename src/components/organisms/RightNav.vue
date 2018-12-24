<template>
    <div class="rightNav">
     <AppHeaderTag :grade="'h1'"/>
    </div>  
</template>

<script>
import AppHeaderTag from '../atoms/AppHeaderTag'
export default {
  name: 'RightNav',
  props:{
    data: Object,
    grade: String
  },
  components:{
      AppHeaderTag
  }
}
</script>