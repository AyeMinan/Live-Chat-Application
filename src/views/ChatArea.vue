<template>
  <form>
    <textarea placeholder="Enter Text"
    @keypress.enter="handleClick"
    v-model="message"
    >
    </textarea>
    <div v-if="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from 'vue'
import getUser from '@/composables/getUser';
import { timeStamp } from '../firebase/config';
import getCollection from '../composables/getCollection'

export default {
  setup(){
    let message = ref("");
    let {user} = getUser();
    let {error,addDocument} = getCollection("messages");
    let handleClick = async ()=>{
       let chat = {
        message: message.value,
        name: user.value.displayName,
        created_at: timeStamp
       }
       await addDocument(chat);
       message.value = ""
    }
    
    return {message, handleClick,error}
  }
}
</script>

<style>
 form{
  margin: 10px;
 }
 textarea{
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
 }
</style>