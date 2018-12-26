<template>
  <div class="slide">
          <div class="slide__main" v-for="(list,key,index) in templateData[0]" :class="index == 0 ? 'active':''">
            <div class="slide__main__head col-lg-12" :class="index == 0 ? 'main':''">
                <Input :typeText="'text'" :textValue="list.label" />
            </div>
            
            <div class="slide__main__sub" :class="index == 0 ? 'col-lg-6':''">
              <div v-if="list.nav" :class="list.nav ? 'list': ''">
                <ul>
                  <li v-for="listData in list.list" v-html="listData.title">{{listData.title}}</li>
                </ul>
              </div>
                <div v-else>
                    <Tooltip :content="data.slide1.title" :link="true" :linkLabel="data.slide1.link" :arrow="'top'"/>
                    <Input  :typeText="'text'" :textValue="list.text" />
                </div>
            </div>
          </div>
         </div>
</template>

<script>
import Input from '../atoms/AppInput';
import Tooltip from '../molecules/Tooltip'
export default {
  name: 'TitleView',
  props:{
    data: Object,
    templateData: Array
  },
  components:{
    Input,
    Tooltip
  }
}
</script>