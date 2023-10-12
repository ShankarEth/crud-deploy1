import { useState } from "react";

function StudentForm(props)
{
    const [name,setName] = useState('');
    const [email,setEmail] = useState(props.emailValue);
    const [rollno,setRollno] = useState(props.rollnoValue);

    const arr = [name,email,rollno];
    const handleClick = () =>{
        return props.getState(arr);
    }

    // console.log(arr);
    return(
            <>
                <div>
                    <label for="name">Enter your name</label>
                    <input name="name" type="text" className="form-control mx-auto" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)} defaultValue={props.nameValue}/>
                    <p name="name" className="d-block"></p>
                </div>

                <div>
                    <label for="email">Enter your email</label>
                    <input name="email" type="email" placeholder="Enter your email" className="form-control mx-auto" onChange={(e)=>setEmail(e.target.value)} defaultValue={props.emailValue}/>
                    <p name="email" className="d-block"></p>
                </div>

                <div>
                    <label for="rollno">Enter your rollno</label>
                    <input name="rollno" type="number" className="form-control mx-auto" placeholder="Enter your roll no" onChange={(e)=>setRollno(e.target.value)} defaultValue={props.rollnoValue}/>
                    <p name="rollno" className="d-block"></p>
                </div>
                
                <button className="btn btn-lg btn-danger btn-block" type="submit" onClick={handleClick}>
                    {props.children}
                </button>
            </>
    );
}

export default StudentForm;