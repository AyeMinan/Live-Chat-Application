<template>
  <nav v-if="user"> 
    <div class="navigation" >
        <div>
            <p>Hi {{ user.displayName }}</p>
            <p class="email">{{ user.email }}</p>
        </div>
       <div>
        <button @click="logOut">Logout</button>
    </div>
    </div>
  </nav>
</template>

<script>
import useSignout from '../composables/useSingout'
import {useRouter} from 'vue-router'
import getUser from '../composables/getUser'
import { ref } from 'vue';
export default {
 setup(){
    let router = useRouter();
    let {user} = getUser();
    let {error,Signout} = useSignout();
    let logOut = ()=>{
         Signout();
        
    }
    
    return {logOut,error,user};
 }
}
</script>

<style>
.navigation{
    padding: 20px;
    border-bottom: 1px solid white;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.navigation p{
    margin: 2px auto;
    font-size: 16px;

}
.email p{
    font-size: 14px;
}
</style>