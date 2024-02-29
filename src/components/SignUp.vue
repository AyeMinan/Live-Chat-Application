<template>
  

  <h2>Sign Up</h2>

  <form @submit.prevent="signUp">
    <input type="text" placeholder="Display Name" v-model="name">
    <input type="text" placeholder="Email" v-model="email">
    <input type="password" placeholder="Passowrd" v-model="password">
    <div v-if="err">
    <p class="error">{{ err }}</p>
  </div>
    <button>Sign Up</button>
  </form>

</template>

<script>
import { ref } from 'vue';
import useSignup from '../composables/useSignup.js'
export default {
  emits: ['enterChatRoom'],
setup(props,context){
  
    let name = ref("");
    let email = ref("");
    let password = ref("");
    let {err, createAccount}=useSignup();
   
    let signUp = async () => {
        await createAccount(name.value, email.value, password.value);
        context.emit("enterChatRoom")
    
      
    };
    return {name,email,password,signUp,err}
}
}
</script>

<style>
.error{
  color: crimson;
}
</style>