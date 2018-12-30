<script>
export default {
    name: 'AppButton',
    props:{
        tagType: String,
        label: String,
        grade: String,
        shape:{
            type: String,
            default: 'square'
        },
    },
    render(){
        switch (this.grade) {
               case 'h5': return <h5 class={this.shape}>{this.label}</h5>;
               break;
            
               case 'h4': return <h4 class={this.shape}>{this.label}</h4>;
               break;
            
               case 'h3': return <h3 class={this.shape}>{this.label}</h3>;
               break;
            
               case 'h2': return <h2 class={this.shape}>{this.label}</h2>;
               break;
            
               case 'h1': return <h1 class={this.shape}>{this.label}</h1>;
               break;
            
               default:  return <h1 class={this.shape}>{this.label}</h1>
            }
    }
}
</script>