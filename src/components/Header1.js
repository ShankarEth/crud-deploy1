
function Header1() {
    return (
        <div className='container'>
            <div className="navbar bg-dark">
                <div className='navbar-brand'>
                    <h2 className="text-light p-3"><a href="/create-student" className="nav-link">React MERN</a></h2>
                </div>

                <div className='nav'>
                    <div className='nav-item'>
                        <h4><a href="/create-student" className="nav-link">Create Student</a></h4>
                    </div>
                    <div className='nav-item'>
                        <h4><a href="/student-list" className="nav-link">Student List</a></h4>
                    </div>
                </div>


            </div>
        </div>
    );
}
export default Header1;