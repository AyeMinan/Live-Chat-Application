import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/global.css"
import {auth} from './firebase/config'
import {onAuthStateChanged } from "firebase/auth";
let app

const initializeApp = () => {
    app = createApp(App).use(router).mount('#app');
  };
auth.onAuthStateChanged(()=>{
    if(!app){
        initializeApp();
    }
})


