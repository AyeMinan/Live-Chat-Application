<template>
  <div class="chat-window">
    <div class="messages" ref="msgBox">
        <div class="single"  v-for="message in formattedMessages" :key="message.id">
            <span class="created-at">{{ message.created_at }}</span>
                <span class="name">{{message.name}}</span>
                <span class="message">{{ message.message }}</span>
        </div>
    </div>
  </div>
</template>

<script>

import {db} from "../firebase/config"
import {collection,onSnapshot,orderBy, query} from "firebase/firestore"
import { computed, onUpdated, ref  } from 'vue';
import {formatDistanceToNow} from "date-fns";
export default {
    setup(){
        let messageCollection = collection(db, "messages");
        let messages = ref([]);
        let msgBox = ref(null);

        onUpdated(()=>{
            msgBox.value.scrollTop = msgBox.value.scrollHeight
        })

        let formattedMessages = computed (()=>{
            return messages.value.map((msg)=>{
               let formatTime = formatDistanceToNow(msg.created_at.toDate())

               return {...msg, created_at: formatTime};
                
            })
        })
        let q = query(messageCollection, orderBy("created_at", "asc"));
        onSnapshot( q , (querySnapshot)=>{
            let results = [];
            querySnapshot.forEach((doc)=>{
              
               doc.data().created_at && results.push({...doc.data(), id: doc.id});
               
            })
            messages.value = results;
        })
 
        return {messages, formattedMessages, msgBox}
        }
    
}
</script>

<style>
 .chat-window {
        background: #fafafa;
        padding: 30px 20px;
      }
      .single {
        margin: 18px 0;
      }
      .created-at {
        display: block;
        color: #999;
        font-size: 12px;
        margin-bottom: 4px;
      }
      .name {
        font-weight: bold;
        margin-right: 6px;
      }
      .messages {
        max-height: 400px;
        overflow: auto;
      }
</style>