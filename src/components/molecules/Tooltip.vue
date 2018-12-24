
<script>
import AppButton from '../atoms/AppButton'
export default {
    name: 'Tooltip',
    props:{
        content: String,
        link:Boolean,
        linkLabel: String,
        arrow: String
    },
    render(){
        return <div class="tooltip">
            <span class="tooltip__indicator"></span>
            <span class={this.arrow}></span>   
            <div class="tooltip__content">
                {this.content}
                <AppButton v-show={this.link} label={this.linkLabel}/>
            </div>
        </div>
    }
}
</script>

