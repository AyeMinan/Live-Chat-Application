<template>
    <div class="welcome container">
    <div v-if="showLoginForm">
      <Login @enterChatRoom="enterChatRoom"></Login>
      <p>Not a member? <span @click="showLoginForm=!showLoginForm">Create Account?</span></p>
    </div>
    <div v-else>
      <SignUp @enterChatRoom="enterChatRoom"></SignUp>
      <p>Already hava an account? <span @click="showLoginForm=!showLoginForm">Login?</span></p>
    </div>
    
 
</div>
</template>
   <script>
import { ref } from 'vue'
 import Login from '../components/Login'
import SignUp from '../components/SignUp'
import {useRouter} from 'vue-router'
export default {
  components: {
    Login, SignUp },
    setup(){
      let showLoginForm = ref(true);
      let router = useRouter();
      let enterChatRoom = ()=>{
        router.push({name: 'ChatRoom'});
      } 

      return {showLoginForm,enterChatRoom}
    }
  
}
</script>
<style>
.welcome{
    text-align: center;
    padding: 20px 0;
}
</style>