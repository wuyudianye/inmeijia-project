<template>
  <div id="app">
    <!-- 顶栏组件 -->
    <Top></Top>
    <!-- 轮播图组件 -->
    <roll-picture></roll-picture>
    <!-- 路由组件，并未真正使用 -->
    <router-view></router-view>
    <!-- 内容组件 -->
    <vr-content></vr-content>
    <!-- 表单组件 -->
    <register></register>
    
  </div>
</template>

<script>
import Top from './components/top.vue';
import rollPicture from './components/rollPicture.vue';
import vrContent from './components/vrContent.vue';
import register from './components/register.vue';


export default {
  name: 'app',
  methods: {
   
  },

  components:{
      Top,
      rollPicture,
      vrContent,
      register,
    }
}
</script>

<style>
  /*进行重置*/
  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, 
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

{
    margin : 0;
    padding: 0;
    
  }
    a{ 
    text-decoration:none; 
    color:#333333; 
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
  
  ul,li{
    list-style: none;
  }
  #app {
    width:100%;
    margin: 0 auto ;
  }




</style>
