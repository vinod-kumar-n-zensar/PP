
<style lang="scss">
@import "./styles/main";
</style>

<script>
export default {
    beforeMount(){
        console.log(this.$store);
    },  
    render(){
        return <div id="app">
                  <router-view/>
                </div>
    }
 }
</script>
