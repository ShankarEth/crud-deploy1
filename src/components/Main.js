import {BrowserRouter,Routes,Route} from 'react-router-dom'
import CreateStudent from './CreateStudent';
import EditStudent from './EditStudent';
import StudentTable from './StudentTable';
function Main()
{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" index element={<CreateStudent />} />
                <Route path="/create-student" element={<CreateStudent />} />
                <Route path="/edit-student/:id" element={<EditStudent />} />
                <Route path="/student-list" element={<StudentTable />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Main;