
<script>
import AppButton from '../atoms/AppButton'
export default {
    name: 'StatusBar',
    props:{
        content: String,
        link:Boolean,
        linkLabel: String,
        arrow: String,
        setStateNav:Function,
        fnVal: String
    },
    data(){
        return{
            store:this.$store,
            slectArr:['ideas','slide1','windenergy','designer','slide2','keywords','slide3','punctuation','timeline','finish'],
            spanEl(){
                let spanEl = document.getElementsByClassName('status__block');
                for(let i=0;i<=spanEl.length-1;i++){
                    spanEl[i].classList.remove('active');
                }
            },
            stausUpdate(getFirstNum,flag){
                for(let i=0;i<=getFirstNum;i++){
            let getel = document.querySelector(".status__block:nth-child("+(i+1)+")");
            getel.className+=" active";
            if(flag){
                if(i<9){
                    this.$store.dispatch("updateStateVal", this.slectArr[getFirstNum+1]); 
                    localStorage.setItem('navigation',this.slectArr[getFirstNum+1])
                } else{
                    this.$store.dispatch("updateStateVal", this.slectArr[0]);
                    localStorage.setItem('navigation',this.slectArr[0])
                }
            } else{
                this.$store.dispatch("updateStateVal", this.slectArr[getFirstNum]);
                localStorage.setItem('navigation',this.slectArr[getFirstNum])
                }
        }
        this.$store.dispatch("updateStateCount", getFirstNum+1)
        
            }
        }
    },  
    methods:{
        handleStatusChange(e){
            let getFirstNum;
        // calculate the %
         this.spanEl()
            var pct = Math.floor((e.offsetX / outside.offsetWidth) * 100);
            if(pct.toString().length == 1){
            getFirstNum = 0;
            } else{
                getFirstNum = pct.toString()[0];
            }
        this.stausUpdate(getFirstNum,false);
        },
        handleProgress(e){
                this.spanEl();
                let getFirstNum =  this.slectArr.indexOf(this.store.state.navigation);
                this.stausUpdate(getFirstNum,true);
        }
    },
   created(){
        this.$store.watch(
        (state)=>{
            return this.$store.state.navigation // could also put a Getter here
        },
        (newValue, oldValue)=>{
            debugger;
            this.spanEl()
                let getFirstNum =  this.slectArr.indexOf(newValue);
                if(getFirstNum == -1){
                    let spanEl = document.getElementsByClassName('status__block');
                    for(let i=0;i<=spanEl.length-1;i++){
                        spanEl[i].className += ' active';
                    }
                } else{
                    this.stausUpdate(getFirstNum,false);
                }
                
        })
   },
    render(){
        return <div class="status container-fluid">
            <button class="status__indicator col-lg-1" on-click={this.handleProgress}>Play >></button>
            <div class="status__outside col-lg-11">
            <span class="status__block active" ><hr /></span>
            <span class="status__block"><hr /></span>
            <span class="status__block"><hr /></span>
            <span class="status__block"><hr /></span>
            <span class="status__block" ><hr /></span>
            <span class="status__block" ><hr /></span>
            <span class="status__block"><hr /></span>
            <span class="status__block"><hr /></span>
            <span class="status__block" ><hr /></span>
            <span class="status__block" ><hr /></span>
            </div>
            <div id="outside" class="col-lg-11" on-click={this.handleStatusChange}>
  </div>
        </div>
    },
    mounted(){
        if(localStorage.getItem('navigation')!= null){
            if( localStorage.getItem('navigation') == 'finishtour'){
                let spanEl = document.getElementsByClassName('status__block');
                    for(let i=0;i<=spanEl.length-1;i++){
                        spanEl[i].className += ' active';
                    }
            } else{
                this.spanEl();
                let getFirstNum =  this.slectArr.indexOf(localStorage.getItem('navigation'));
                this.stausUpdate(getFirstNum,false);
            }

       }
        
    }
}
</script>

