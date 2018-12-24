<script>
import Input from '../atoms/AppInput'
export default {
  name: 'TitleView',
  props:{
    links: Object
  },
  
  render (createElement) {
         return <div class="slide "> 
          <div class="slide__main">
            <div class="slide__main__head col-lg-12">
                <Input typeText="text" textValue="Northwind, Project Update" />
            </div>
            <div class="slide__main__sub col-lg-12">
                <Input  typeText="text" textValue="Click to add subtitle" />
            </div>
          </div>
         </div>
     },

}
</script>