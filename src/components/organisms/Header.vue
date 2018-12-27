
<script>
import AppButton from '../atoms/AppButton'
import AppLogo from '../atoms/AppLogo'
import PrimaryHead from '../molecules/PrimaryHead'
import ActionHead from '../molecules/ActionHead'
import ToolBar from '../molecules/ToolBar'
export default {
  name: 'Header',
  props:{
    links: Object,
    tooltipData: Object,
    fn: Function
  },
  
  render (createElement) {
         return <div class="header"> 
          <div class="header__content">
              <PrimaryHead links={this.links.displayHead} isAnchor={true} />
              <ActionHead links={this.links.actionHead} isAnchor={true}  />
              <ToolBar tooltipData={this.tooltipData} links={this.links.toolbar} isAnchor={true} fn={this.fn}/>
          </div>
         </div>
     },

}
</script>