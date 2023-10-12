import StudentForm from "./StudentForm";
import axios from 'axios';
import { useState } from "react";
const CreateStudent = (props) =>
{
    const [formValues,setFormValues] = useState([]);
    
    const getState = (n) => {
        setFormValues(n);
    }
    const handleSubmit = () => {
        alert("Creating record");
        const data = {name:formValues[0],email:formValues[1],rollno:formValues[2]}
        axios.post("http://localhost:5200/student/create-student",data)
        .then(res=>{
            if(res.status === 200)
                alert('student data created');
            else
                Promise.reject();
        })
        .catch(err=>alert(err))
    }
    return(
        <form onSubmit={handleSubmit}>
        <StudentForm getState={getState} nameValue='' emailValue='' rollnoValue=''>
            Create Student 
        </StudentForm>
        </form>
    );
}
export default CreateStudent;