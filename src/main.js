// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import axios from 'axios'
Vue.prototype.axios = axios;

import 'mint-ui/lib/style.css'
import { Swipe, SwipeItem } from 'mint-ui';
import './assets/css/my-mint.css';
import { Picker } from 'mint-ui';
import { Popup } from 'mint-ui';
import { Field } from 'mint-ui';
import { Button } from 'mint-ui';
import { Header } from 'mint-ui';
import { Cell } from 'mint-ui';

Vue.component(Cell.name, Cell);
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Field.name, Field);
Vue.component(Popup.name, Popup);
Vue.component(Picker.name, Picker);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.use(MintUI);
Vue.config.productionTip = false

        window.onload = function(){
            getRem(750,100)
        };
        window.onresize = function(){
            getRem(750,100)
        };
        function getRem(pwidth,prem){
            var html = document.getElementsByTagName("html")[0];
            var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
            html.style.fontSize = oWidth/pwidth*prem + "px";
            
        };

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
