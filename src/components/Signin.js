
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import Header1 from "./Header1";
import Main from "./Main";
function Signin() {
    const [value, setValue] = useState("");
    const handleClick = () => {
        signInWithPopup(auth, provider)
            .then((data) => {
                setValue(data.user.email)
                localStorage.setItem("email", data.user.email)
            })
    }
    useEffect(() => {
        setValue(localStorage.getItem("email"))
    })
    return (
        <div>
            {value ? <div><Header1 /><Main /></div> :
               <div class="App-header"> 
                    <button class="btn btn-danger" onClick={handleClick}>Google Signup</button> 
               </div>
            }
        </div>
    );
}
export default Signin;