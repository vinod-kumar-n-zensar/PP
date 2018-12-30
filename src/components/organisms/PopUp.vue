<template>
    <div class="popup" v-on:click="close($event)">
        <div class="popup__content">
            <component :is="selectedComponent"></component>
        </div>
    </div>
</template>

<script>
import PowerPoint from './PowerPoint.vue';
export default {
  name: 'PopUp',
  components: {
    PowerPoint
  },
  data(){
    return {
        selectedComponent: 'PowerPoint'
    }
  },
  methods:{
      close(e){
        if(e.target.className === "popup"){
            e.target.remove();
        }
      }
  }
}
</script>