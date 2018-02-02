<template>  

  <div id="vrContent">
    <div class="num">01</div>
    <img width="100%" src="../assets/pic/vr@3.png">

    <transition name="bounce">
      <header v-show="p2a1" class="title">
        <p>VR全屋装</p>
        <p>所见即所得</p>
      </header>
    </transition>

    <transition name="fade">
      <article  v-show="p2a1" class="detail">
        <p>区别于传统装修公司，我们提供整套的</p>
        <p>VR全景方案100%还原未来新家</p>
      </article>
    </transition>

    <div class="vrword">VR</div>
    <div class="leftline" ></div>
    <div class="bottomline" ></div>

    <transition name="fade">
        <div  v-show="p2a1" class="learnmore">
          <a href="javascript:;">了解更多</a>
          <div class="arrow2"></div>
        </div>
    </transition>
    
    <transition name="fade">
      <ul v-show="p2a1">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
     </transition>

    <transition name="fade"> 
      <article  v-show="p2a1" class="recommend">
        <p>360旋转</p>
        <p>VR全套方案</p>
        <p>所见即所得</p>
      </article>
    </transition>
</div>
  
</template>  
  
<script>  
export default ({    
	name : 'vrContent',
  data () {  
    return {  
       p2a1: false, 
       
    }  
  },
   mounted () {     
    window.addEventListener('scroll', this.ani);
    },
    methods: {
      ani () {       
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > 100) {
            this.p2a1 = true;
          }
        }
    },     
} )
</script>  
  
<style scoped> 
#vrContent {
  position: relative;
  background-color: green;
}
.num {
  position: absolute;
  top:0.56rem;
  left:2.26rem;
  color:#f2f5f5;
  font-size: 2.4rem;
  font-family: "Helvetica Neue";
}
#vrContent>img {
  display:block;
}
.vrword{
  position: absolute;
  top:0.91rem;
  left:1.02rem;
  font-family: "Helvetica Neue";
  font-size: 0.14rem;
  color:#6f727c;
  transform: rotate(-90deg);
}


.title{
  position: absolute;
  top: 1.64rem;
  left:1.04rem;  
  
}
.title>P{
  color:#333333;
  font-size:0.48rem;
  font-family:"PingFang SC Regular";
  line-height: 0.71rem;
}

.detail{
  position: absolute;
  top: 3.60rem;
  left:1.04rem;
  font:#000;
  color:#B3B3B3;
   font-size: 0.26rem;
   line-height: 0.40rem;
   font-family:"PingFang SC Regular";
}
.leftline{
  position: absolute;
  top: 1.15rem;
  left: 1.10rem;
  width: 1px;
  height:0.3rem;
  background-color: #e0e2eb;
}
.bottomline{
  position: absolute;
  top: 3.12rem;
  left: 1.06rem;
  width: 0.3rem;
  height:1px;
  background-color: #149A91;

}
.learnmore{
  position: absolute;
  top: 5.10rem;
  left: 1.05rem;
  width: 1.64rem;
  height: 0.64rem;
  color: #333333;
  font-size: 0.24rem;
  line-height: 0.64rem;
  border-radius: 0.32rem;
  border: 1px solid #999999;
  padding-left: 0.36rem;
}
.learnmore .arrow2{
  display: inline-block;
  width: 0.28rem;
  height: 0.18rem;
  background-image: url('../assets/pic/箭头2.svg');
  background-size:0.28rem 0.18rem;
  margin-left: 0.1rem;
}

ul{
  position: absolute;
  top: 5.25rem;
  left: 3.5rem;
  width:2.65rem;
  height:2.65rem;
 
}
ul li:nth-child(1){
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  border:1px solid #D1EDEA;
  width: 2.65rem;
  height:2.65rem;
  /*border-left: none;*/
  /*border-bottom: none;*/
  
}
ul li:nth-child(2){
  position: absolute;
   top: 0.36rem;
  left: 0.36rem;
  border-radius: 50%;
  border:1px solid #E3F0EE;
  width: 1.90rem;
  height: 1.90rem;

}
ul li:nth-child(3){
  position: absolute;
  top: 0.72rem;
  left: 0.72rem;
  border-radius: 50%;
  border:1px solid #D3ECE9;
   width: 1.2rem;
  height:1.2rem;
}
ul li:nth-child(4){
  position: absolute;
   top: 1.08rem;
  left: 1.08rem;
  border-radius: 50%;
  border:1px solid #39D5C2;
  width: 0.5rem;
  height:0.5rem;
  background-color: #39D5C2;
  box-shadow: 0px 0.12rem 0.2rem #A9E4DD;
  font-size: 12px;
  line-height: 0.35rem;
  background-image: url(../assets/pic/箭头1.svg);
  background-repeat: no-repeat;
  background-size:0.14rem 0.15rem;
  background-position: center;
}
.recommend{
  position: absolute;
  top: 6.36rem;
  left:5.68rem;
  color:#999999;
   font-size: 0.26rem;
   line-height: 0.36rem;
   font-family:"PingFang SC Regular";
}
      

    .bounce-enter-active {   
    animation: bounce-in .5s;  
  }
    .fade-enter-active{
     animation:fade-in 5s  ;
  }

  @keyframes bounce-in {
    0% {     
    transform: translateY(-85px);}
    100% {     
    transform: translateY(0);    }
  } 
  @keyframes fade-in {
    0% {    
    transform:scale(0); 
        }
    50%{
      transform:scale(1.5); 
    }
    100% {   
    transform:scale(1);  
        }
  } 



</style>  