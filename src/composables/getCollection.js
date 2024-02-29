import { ref } from "vue"
import {db} from "../firebase/config"
import {addDoc, collection} from "firebase/firestore"
let getCollection = (data)=>{
    let error = ref("");
    let addDocument = async (doc)=>{
        try {
            let docCollection = collection(db, data);
            await addDoc(docCollection, doc)
        }catch(err){
            error.value = err.message
            error.value = "could not send the message"
        }
    }
    return {error, addDocument}
}

export default getCollection