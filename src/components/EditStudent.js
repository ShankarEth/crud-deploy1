import StudentForm from "./StudentForm";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

function EditStudent(props) {
  const [formValues, setFormValues] = useState({ name: "", email: "", rollno: "" });
  const [formDetails,setFormDetails]  = useState([]);

  //onSubmit handler
  const { id } = useParams();

  const getState = (n) => {
    setFormDetails(n);
    console.log(n);
  }

  const handleSubmit = () => {
    alert("Editing...")
    axios.put("http://localhost:5200/student/update-student/:" + id, {name:formDetails[0],email:formDetails[1],rollno:formDetails[2]})
      .then((res) => {
        if (res.status === 200) {
          alert("Student successfully updated");
          // props.history.push("/student-list");
        }
        else {
          Promise.reject();
        }
      })
      .catch((err) => alert(err));
  };

  useEffect(() => {
    axios.get("http://localhost:5200/student/update-student/" + id)
      .then((res) => {
        const { name, email, rollno } = res.data;
        setFormValues({ name, email, rollno });
      })
      .catch((err) => alert(err));
  }, [id]);

  return (
    <form onSubmit={handleSubmit}>
      <StudentForm getState={getState} nameValue={formValues.name} emailValue={formValues.email} rollnoValue={formValues.rollno}>
        Update Student
      </StudentForm>
    </form>
  );
}
export default EditStudent;