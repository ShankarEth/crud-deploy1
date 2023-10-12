
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import App from "../../../credentials/src/App";
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
            {value ? <App /> :
                <button onClick={handleClick}>Sign in with Google</button>
            }
        </div>
    );
}
export default Signin;