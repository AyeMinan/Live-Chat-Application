<template>
  <div class="container">
    <Navbar></Navbar>
    <ChatWindow></ChatWindow>
    <ChatArea></ChatArea>
  </div>
</template>

<script>
import ChatWindow from '../components/ChatWindow'
import ChatArea from './ChatArea'
import { watch } from 'vue'
import Navbar from '../components/Navbar'
import {useRouter} from 'vue-router'
import getUser from '@/composables/getUser'
export default {
  components: {
    ChatWindow,
    ChatArea, Navbar },
  setup(){
    let {user} = getUser();
    let router = useRouter();
    watch(user, ()=>{
      if(!user.value){
        router.push("/")
      }
    })
  }
}
</script>

<style>

</style>