import { ref } from 'vue';
import {auth} from '../firebase/config'
import { signOut } from 'firebase/auth'
let error = ref("");
let Signout = async ()=>{
    try{
        await signOut(auth);
    }catch(err){
        error.value = err.message;
    }
}   


let useSignout = ()=>{
    return {error,Signout}

}

export default useSignout