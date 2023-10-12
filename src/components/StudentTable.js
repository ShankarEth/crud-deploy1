import { useEffect, useState } from "react";
import StudentTableRow from './StudentTableRow';
import axios from 'axios';
function StudentTable() {
    
    const [students, setStudents] = useState([]);

    useEffect(()=>{
        axios.get('https://crud-deploy1-backend.onrender.com/student')
        .then(({data})=>{
            setStudents(data);
        })
        .catch((error)=>console.log('Error raised'));
    },[])

    const DataTable = () => {
        return students.map((res,i)=>{
            return <StudentTableRow obj={res} key={i} />;
        })
    }
    
    return (
        <div className="table-wrapper mx-auto">
            <table className="table table-bordered table-stripped table-hover">
                <thead className="bg-warning">
                    <th>Name</th>
                    <th>Email</th>
                    <th>Roll no</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {DataTable()}
                </tbody> 
            </table>
        </div>
    );
}
export default StudentTable;