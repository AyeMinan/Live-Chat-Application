import { ref } from "vue";
import {auth} from '../firebase/config'
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";

let err = ref(null)
let createAccount = async(name,email,password)=>{
    try {
        const userCredential = await createUserWithEmailAndPassword(auth,email, password);

        const user = userCredential.user;
        
        await updateProfile(user, { displayName: name });
      } catch (error) {
        err.value = error.message;
      }
}


let useSignup = ()=>{
    return {err, createAccount}
}

export default useSignup;