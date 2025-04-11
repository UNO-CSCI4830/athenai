import { useRef } from "react";
import { firestore } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

export function TestPage() {
    const messageRef = useRef<HTMLInputElement>(null);
    const ref = collection(firestore,"test");

    const handleSave = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if(messageRef.current) {
            console.log(messageRef.current.value)
            let data = {
                message:messageRef.current.value,
            }
            try {
                addDoc(ref,data)
            } catch (e) {
               console.log(e) 
            }
        }
 
    }

    return (
        <div>
         <form onSubmit={handleSave}>
            <label>Enter message</label>
            <input type="text" ref={messageRef} defaultValue=""/>
            <button type="submit">Save</button>
         </form>
        </div>
    );
}