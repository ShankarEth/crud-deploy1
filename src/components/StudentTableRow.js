import axios from 'axios';
function StudentTableRow(props) {
    const {_id, name, email, rollno} = props.obj;
    const deleteStudent = () => {
        alert("Deleting student record..");
        axios.delete('https://crud-deploy1-backend.onrender.com/student/delete-student/'+ _id)
        .then((res)=>{
            if (res.status === 200) {
                alert("Student successfully deleted");
                window.location.reload();
              } else Promise.reject();
        })
        .catch((err) => {alert(err);alert(_id)});
    }
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{rollno}</td>
            <td>
                <a href={"/edit-student/"+_id} style={{ textDecoration: "none" }}>
                    <button className="btn btn-success">Edit</button></a>
                <span>
                    <button className="ms-4 btn btn-danger text-light" onClick={deleteStudent}>Delete</button>
                </span>
            </td>
        </tr>
    );
}
export default StudentTableRow;