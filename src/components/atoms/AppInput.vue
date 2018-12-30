<template>
    <input :type="typeText" :class="input_shape" :placeholder="placeholder" :value="textValue" v-on:keyup="keymonitor" >
</template>

<script>
export default {
    name: 'Input',
    props:{
        typeText:{
            type: String,
            default: 'text'
        },
        input_shape: String,
        placeholder: String,
        textValue: String,
        keymonitorFn:Function,
        fnVal: String
    },
    methods:{
        keymonitor(){
            this.keymonitorFn(this.fnVal)
        }
    }
}
</script>
