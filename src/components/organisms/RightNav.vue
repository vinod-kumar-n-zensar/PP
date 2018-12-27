<template>
    <div class="rightNav">
        <div class="rightNav__main" v-show="state.state.navigation == 'slide1'">
        <div class="rightNav__head">
            <AppHeaderTag :grade="'h5'" :label="data.title"/>
        </div>
    <div class="rightNav__content">
        <div class="rightNav__content--search">
            <AppInput :placeholder="data.textPlaceholder"/>
        </div>
        <div class="rightNav__content--picture">
            <AppHeaderTag :grade="'h5'" :label="data.pictures.title"/>
            <AppParagraph :content="data.pictures.recommend"/>
            <div class="rightNav__content--thumbnail">
                <div v-for="(data,key,index) in data.pictures.images" class="col-lg-6">
                    <img :src="data.url" alt="">
                </div>
            </div>
        </div>
                <div class="rightNav__content--recomendation">
                <AppHeaderTag :grade="'h5'" :label="data.recommendedFiles.title"/>
                <div class="rightNav__content--recommend" v-for="(data,key) in data.recommendedFiles.projectUpdates">
                    <div class="col-lg-1 img--container">
                        <img :src="data.url" alt="">
                    </div>
                    <div class="col-lg-11 content--container">
                        <AppHeaderTag :grade="'h5'" :label="data.title"/>
                        <AppParagraph :content="data.message"/>
                    </div>
                </div>
            </div>
    </div>
</div>
<div class="rightNav__main"  v-show="state.state.navigation == 'windenergy'">
        <div class="rightNav__head">
            <AppHeaderTag :grade="'h5'" :label="data.Ideas.title"/>
            <AppParagraph :span="true" :content="data.Ideas.subTitle"/>
        </div>
        <div class="rightNav__content">
            <div class="rightNav__content--search">
                <AppInput :placeholder="data.Ideas.inputPlaceHolder"/>
            </div>
            <div class="rightNav__content--choice">
                <span v-for="(choice,key,index) in data.Ideas.choice" :class="key == 2 ? 'active':''">{{choice.title}}</span>
                <label for=""> <AppInput :typeText="'checkbox'" checked/>{{data.Ideas.checkbox}} </label>
            </div>
            <div class="rightNav__content--imgchoice">
                <Tooltip :content="tooltip.slide2.title" :link="true" :linkLabel="tooltip.slide2.link" arrow="right" :setStateNav="fn" :fnVal="'designer'"/>
                <img :src="data.Ideas.imagelink" alt="">
                <AppParagraph :content="data.Ideas.warning"/>
                <AppLink :label="data.Ideas.link" :aria-labelledby="data.Ideas.link"/>
            </div>
            <div class="rightNav__content--doc">
                <div><p>{{data.Ideas.poweredby}} <span class="bing-img"></span><span>Bing</span></p></div>
                <div><AppLink :label="data.Ideas.privacyLink" :aria-labelledby="data.Ideas.privacyLink"/></div>
            </div>
        </div>
        </div>
        <div class="rightNav__main" v-show="state.state.navigation == 'designer' || state.state.navigation == 'slide2'">
            <div class="rightNav__head">
                <AppHeaderTag :grade="'h5'" :label="data.designer.title"/>
                <AppParagraph :span="true" :content="data.designer.subTitle"/>
            </div>
             <div class="rightNav__content">
                 
                 <div class="rightNav__content--desinger-content">
                     <Tooltip v-show="state.state.navigation == 'designer'" :content="tooltip.slide3.title" :link="true" :linkLabel="tooltip.slide3.link" arrow="right" :setStateNav="fn" :fnVal="'slide2'"/>
                     <img v-for="image in data.designer.images" :src="image.url" alt="">
                </div>
             </div>
        </div>
         <div class="rightNav__main" v-show="state.state.navigation == 'keywords'">
            <div class="rightNav__head">
                <AppHeaderTag :grade="'h5'" :label="data.designer.title"/>
                <AppParagraph :span="true" :content="data.designer.subTitle"/>
            </div>
             <div class="rightNav__content">
                 <div class="rightNav__content--goals-content">
                      <Tooltip :content="tooltip.slide4.title" :link="true" :linkLabel="tooltip.slide4.link" arrow="right" :setStateNav="fn" :fnVal="'slide3'"/>
                     <img v-for="image in data.designer.goals" :src="image.url" alt="">
                </div>
             </div>
        </div>
        <div class="rightNav__main" v-show="state.state.navigation == 'slide3' || state.state.navigation == 'finish'">
            
            <div class="rightNav__head">
            <AppHeaderTag :grade="'h5'" :label="data.styleYourSlide.title"/>
        </div>
        <div class="rightNav__content">
            <div class="rightNav__content--search">
                <AppInput :placeholder="data.styleYourSlide.inputPlaceHolder"/>
            </div>
           <div class="rightNav__content--picture">
            <AppHeaderTag :grade="'h5'" :label="data.styleYourSlide.slide.title"/>
            <div class="rightNav__content--thumbnail">
                <div v-for="(data,key,index) in data.styleYourSlide.slide.images" class="col-lg-6">
                    <img :src="data.url" alt="">
                </div>
                <AppLink class="more-link" :label="data.styleYourSlide.slide.more"/>
            </div>
        </div>
        <div class="rightNav__content--picture">
            <AppHeaderTag :grade="'h5'" :label="data.styleYourSlide.picSearch.title"/>
            <AppParagraph :content="data.styleYourSlide.picSearch.power"/>
            <div class="rightNav__content--thumbnail">
                <div v-for="(data,key,index) in data.styleYourSlide.picSearch.images" class="col-lg-6">
                    <img :src="data.url" alt="">
                </div>
            </div>
        </div>
        </div>
        </div>
        <div class="rightNav__main" v-show="state.state.navigation == 'punctuation'">
            
            <div class="rightNav__head">
            <AppHeaderTag :grade="'h5'" :label="data.milestone.title"/>
        </div>
        <div class="rightNav__content">
            <div class="rightNav__content--search">
                <AppInput :placeholder="data.milestone.inputPlaceHolder"/>
            </div>
           <div class="rightNav__content--picture">
            <AppHeaderTag :grade="'h5'" :label="data.milestone.slide.title"/>
            <div class="rightNav__content--thumbnail">
                <div v-for="(data,key,index) in data.milestone.slide.images" class="col-lg-6">
                    <img :src="data.url" alt="">
                </div>
                <AppLink class="more-link" :label="data.milestone.slide.more"/>
            </div>
        </div>
        <div class="rightNav__content--picture">
            <AppHeaderTag :grade="'h5'" :label="data.milestone.consistent.title"/>
            <div class="rightNav__content--thumbnail">
                
                <div class="text-edit">
                    <div class="note">
                        <AppParagraph :content="data.milestone.slide.suggestion"/>
                    </div>
                    <div class="editor-content">
                        <Tooltip :content="tooltip.slide6.title" :link="true" :linkLabel="tooltip.slide6.link" arrow="right" :setStateNav="fn" :fnVal="'timeline'"/>
                        <AppParagraph v-for="(data,key,index) in data.milestone.consistent.content" :span="true" :content="data.title"></AppParagraph>
                    </div> 
                    <div class="action-dual-container">
                        <div>
                            <AppLink class="more-link" :label="data.milestone.consistent.more"/>
                        </div>
                        <div>
                            <AppLink class="more-link" :label="data.milestone.consistent.ignore"/>
                        </div>
                    </div> 
                    <div class="editor-link">
                        <AppLink :label="data.milestone.consistent.edit"/>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        <div class="rightNav__main"  v-show="state.state.navigation == 'timeline'">
            
            <div class="rightNav__head">
            <AppHeaderTag :grade="'h5'" :label="data.styleYourSlideMilestone.title"/>
        </div>
        <div class="rightNav__content">
            <div class="rightNav__content--search">
                <AppInput :placeholder="data.styleYourSlideMilestone.inputPlaceHolder"/>
            </div>
           <div class="rightNav__content--picture">
            <AppHeaderTag :grade="'h5'" :label="data.styleYourSlideMilestone.slide.title"/>
            <div class="rightNav__content--thumbnail fav">
                <Tooltip :content="tooltip.favorite.title" :link="true" :linkLabel="tooltip.favorite.link" arrow="right" :setStateNav="fn" :fnVal="'finish'"/>
                <div v-for="(data,key,index) in data.styleYourSlideMilestone.slide.images" class="col-lg-6">
                    <img :src="data.url" alt="">
                </div>
                <AppLink class="more-link" :label="data.styleYourSlideMilestone.slide.more"/>
            </div>
        </div>
        <div class="rightNav__content--picture">
            <div class="overlay grey"></div>
            <AppHeaderTag :grade="'h5'" :label="data.styleYourSlideMilestone.picSearch.title"/>
            <AppParagraph :content="data.styleYourSlideMilestone.picSearch.power"/>
            <div class="rightNav__content--thumbnail">
                <div v-for="(data,key,index) in data.styleYourSlideMilestone.picSearch.images" class="col-lg-6">
                    <img :src="data.url" alt="">
                </div>
            </div>
        </div>
        </div>
        </div>
    </div>  
</template>

<script>
import AppHeaderTag from '../atoms/AppHeaderTag'
import AppInput from '../atoms/AppInput'
import AppParagraph from '../atoms/AppParagraph'
import AppLink from '../atoms/AppLink'
import Tooltip from '../molecules/Tooltip'
export default {
  name: 'RightNav',
  props:{
    data: Object,
    grade: String,
    tooltip: Object,
    fn: Function
  },
  data(){
    return{
      state: this.$store
    }
  },
  components:{
      AppHeaderTag,
      AppInput,
      AppParagraph,
      AppLink,
      Tooltip
  },
  methods:{
    style(url) {
       return 'background: url('+url+') no-repeat ';
            
     }
  },
}
</script>