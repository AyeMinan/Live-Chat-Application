import { ref } from "vue";
import {signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase/config'

let error = ref("");
let Signin = async (email,password)=>{
    try{
        await signInWithEmailAndPassword(auth, email, password);
      }catch(err){
        error.value = err.message;

      }

}



let useSignin = ()=>{
    return {error, Signin}
}

export default useSignin;