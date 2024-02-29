import { ref } from 'vue';
import {auth} from '../firebase/config'
import {onAuthStateChanged } from "firebase/auth";

let user = ref(auth.currentUser);
auth.onAuthStateChanged((_user)=>{
    user.value = _user;
})


let getUser = ()=>{
    return {user}
}
export default getUser