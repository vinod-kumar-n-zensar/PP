
<script>
import AppButton from '../atoms/AppButton'
import AppHeader from '../atoms/AppHeaderTag'
export default {
    name: 'TourGuide',
    props:{
        content: Array,
        fn: Function
    },
    data(){
        return{
            store: this.$store
        }
    },
    methods:{
    },
    render(){
        return <div class="tour container">
                    <div class="tour__container container">
                        <div class="col-lg-12 tour__container--header">
                            <AppHeader shape={'col-lg-12'} grade={'h3'} label={this.content[0].title}/>
                            <AppHeader shape={'col-lg-6'} grade={'h4'} label={this.content[0].ppGuide.subTitle}/>
                            <div class="col-lg-12 tour__container--body">
                                <AppButton shape={' col-lg-3'} label={this.content[0].buttonPrevious} fn={this.fn} fnVal={'ideas'}/>
                                <AppButton shape={'secondary col-lg-3'} label={this.content[0].buttonNext} fn={this.test}/>
                            </div>
                        </div>
                        
                    </div>
                </div>
    },

}
</script>

