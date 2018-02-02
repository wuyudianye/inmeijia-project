<template>  
  <div id="register"> 
    <div class="inlogo"></div>
    <header class="title">
      <p>现在预约</p>
    </header>
    <article class="detail">
      <p>免费获得客厅VR全景方案</p>
    </article>
    
    <form class="registerdetail">


     <mt-field id="type" label="" type="button" disableClear placeholder="请输入类型"  @click.native="handlerKind" :value="kindString" ></mt-field>
      <mt-popup style="width:100%;" v-model="kindVisible" position="bottom">
             <mt-picker :slots="kindSlots" @change="onKindChange">
             </mt-picker>
     </mt-popup>

     <mt-field id="city" label="" type="button" disableClear placeholder="请输入城市" @click.native="handlercity" v-model="cityString"></mt-field>
     <mt-popup style="width:100%;" v-model="cityVisible" position="bottom">
             <mt-picker :slots="citySlots" @change="oncityChange" @login>
             </mt-picker>
     </mt-popup>

     <mt-field id="community"label="" placeholder="所在小区" v-model="communityName" ></mt-field >

     <mt-button type="default"  size="large"
     :disabled="commitDisabled" @click.native="onDataSubmit">立即预约</mt-button>

     <div v-html="communityTip"></div>

   
    
    </form>
    </div>
</div>
  
</template>  
  
<script>  
import data from '../mock/mock';
export default ({    
	name : 'register',
  data () {  
    return {
      communityName:'',
      kindString:'dadada',
      cityString:'杭州',
      kindVisible: false,
      cityVisible: false,
      kindSlots: [
         {
          flex: 1,
          values: ['毛胚房', '清水房', '简单装修', '精装修', '豪华公寓'],
          className: 'slot1',
          textAlign: 'center'
        }
      ],
      citySlots: [
         {
          flex: 1,
          values: ['杭州', '台州', '嘉兴', '绍兴', '建德市'],
          className: 'slot1',
          textAlign: 'center'
        }
      ]
    
    };  
  } ,
  methods: {
    handlerKind(){
      this.kindVisible= true;
    },
    handlercity(){
      this.cityVisible= true;
    },
    onKindChange(picker, values) {
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
      this.kindString = values[0];
    },
    oncityChange(picker, values) {
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
      this.cityString = values[0];
    },
    onDataSubmit(){
      this.axios.post("http://inmeijia.cn/register",{
        kind:this.kindString,
        city:this.cityString,
        community:this.communityName,
      })
      .then((response) =>{
       console.log(response);
       if(response.data.isSuccess===true){
          this.$toast({
          message: '预约成功！',
          position: 'middle',
          duration: 5000
        });
       }
       else{
        this.$toast({
              message: '预约失败，请稍后再试！',
              position: 'middle',
              duration: 5000
            });
       }
      })
      .catch(function (error) {
        this.$toast({
              message: '预约失败，请稍后再试！',
              position: 'middle',
              duration: 5000
            });
        });
      this.communityName="";
    }
  },
  computed: {
    communityTip(){
       var reg=/^[\u2E80-\u9FFF]+$/;
        if(this.communityName.length===0) {
            return "";
         }
          else if(this.communityName.length<4){
             return "<div style='color:red;'>字数太少，请正确输入小区名(ಥ_ಥ)<div>";
           }
            else if (!reg.test(this.communityName)){
              return "<div style='color:red;'>请不要输入英文空格或者其他符号(ಥ_ಥ)<div>"}
                else return"输入正确"
      },
    commitDisabled(){
      if(this.communityTip=="输入正确"){
        return false;
      }
        else {
          return true;
        }
    }
  }
} )

</script>  
  
<style scoped> 
#register {
  position: relative;
  background-color: #F5F5F5;
  height: 15rem;
}
.inlogo{
  position: absolute;
   top: 0.72rem;
  left: 50%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  width: 2.0rem;
  height:0.63rem;
  background-image: url(../assets/pic/inmeijia.svg);
  background-repeat: no-repeat;
  background-size:2.0rem 0.63rem;
  background-position: center;
}

.title{
  position: absolute;
  top: 1.84rem;
  left: 50%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  font-size: 0.36rem;
  color: #333333;
}
.detail{
  position: absolute;
  top: 2.7rem;
  left: 50%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
   font-size: 0.24rem;
   color: #AFB3B2;
}

.registerdetail{
  position: absolute;
  top: 3.68rem;
  left: 0.68rem;
   font-size: 15px;
}



.mint-field {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 6.18rem;
    height: 0.81rem;
    margin-bottom:0.4rem;
}
.mint-button--default{
  background-color: #39D5C2;
  font-size: 0.28rem;
  color:#ffffff;
  font-family:"PingFang SC Regular";
}



      
</style>  