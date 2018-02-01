<template>  
        <mt-header fixed title="in美家">  
          <router-link to="/" slot="left">  
            <mt-button icon="back" @click="handleClose"></mt-button>  
          </router-link>  
          <mt-button icon="more" slot="right" @click="more"></mt-button>  
        </mt-header>  
          
</template>  
  
<script>  
export default ({    
	name : 'top',
  data () {  
    return {  
          
    }  
  },  

  methods: {  
    handleClose: function(){  
        console.log("返回")  
    },  
    more: function(){  
        console.log("更多")  
    }  
  }  
} )
</script>  
  
<style scoped>  
    .mint-header{
      width: 7.5rem;
      height:0.9rem;
      background-color: #1B1A1F;
      line-height: 0.9rem;
    }
    .mintui{
        font-size: 20px;
    }
    
     
</style>  