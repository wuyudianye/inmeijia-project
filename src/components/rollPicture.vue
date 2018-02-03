<template>  
  <!-- 用swipe制作轮播 -->
  <mt-swipe :auto="4000" style="height:4.18rem;">
     <mt-swipe-item><img width=100% src="../assets/pic/banner1.png"></mt-swipe-item>
     <mt-swipe-item><img width=100% src="../assets/pic/banner2.png"></mt-swipe-item>
     <mt-swipe-item><img width=100% src="../assets/pic/banner1.png"></mt-swipe-item>
     <mt-swipe-item><img width=100% src="../assets/pic/banner2.png"></mt-swipe-item>
  </mt-swipe>    
</template>  
  
<script>  
export default ({    
	name : 'rollPicture',
  data () {  
    return {  
          
    }  
  },

} )
</script>  
  
<style>  

.mint-swipe{
  margin-top:0.9rem; 
}
.mint-swipe-indicators{
  position: absolute;
  left:0.8rem;
  height: 1.1rem;
  width: 1rem;
  transform: translateX(0);
  -webkit-transform: translateX(0);
}

.mint-swipe-indicator {
    width: 0.07rem;
    height: 0.07rem;
    display: inline-block;
    border-radius: 100%;
    border : 0.01rem solid #666666;
    background: #fff;
    margin: 0 0.16rem 0 0;
    opacity: 1;
}
.mint-swipe-indicator.is-active {
     background-color:  #666666;
}

</style>  