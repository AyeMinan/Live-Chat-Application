<template>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input type="text" placeholder="Email" v-model="email">
      <input type="password" placeholder="Passowrd" v-model="password">
      <div v-if="error">
        <p class="error">{{ error }}</p>
      </div>
      <button>Login</button>
    </form>
  </template>
  
  <script>
import { ref } from 'vue';
import useSignin from '../composables/useSignin'
import {useRouter} from 'vue-router'
  export default {
    emits: ['enterChatRoom'],
  setup(props, context){
      let email = ref("");
      let password = ref("");
      let router = useRouter();
      let {error, Signin} = useSignin();
      let login = async ()=>{
       await Signin(email.value,password.value);
        context.emit("enterChatRoom");
  }
      return {email,password,login,error}
  }
  }
  </script>
  
  <style>
  .welcome form {
    width: 300px;
    margin: 20px auto;
  }
  /* .welcome label {
    display: block;
    margin: 20px 0 10px;
  } */
  .welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }
  .welcome span{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
  .welcome button {
    margin: 20px auto;
  }
  </style>