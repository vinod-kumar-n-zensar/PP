
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
             
            <div class="tooltip__content" >
            <span class={this.arrow+ ' arrow'}></span>  
                <p domPropsInnerHTML={this.content}>{this.content}</p>
                <AppButton v-show={this.link} label={this.linkLabel}/>
            </div>
        </div>
    }
}
</script>

