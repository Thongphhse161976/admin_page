import React, { useEffect, useState } from 'react'
import SideBar from '../SideBar'
import Header from '../Header'
import userService from '../../service/user.service'

const AddUser = () => {

    const [roles, setRoles] = useState([]);

    const [user, setUser] = useState({
        name: "",
        email: "",
        photoUrl: "",
        firebaseUID: "",
        status: "",
        roleId: ""
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setUser({ ...user, [e.target.name]: value });
    }

    const submitUser = (e) => {
        e.preventDefault();
        console.log(user);

        let parsedUser = {
            ...user,
            status: parseInt(user.status)
          };

        userService.saveUser(parsedUser)
            .then((s) => {
                console.log('User saved successfully:', s.data);
                setMsg('User saved successfully');
            })
            .catch((error) => {
                console.error('Error saving user:', error);
                setMsg('Error saving user');
            });
    };

    const [errors, setErrors] = useState({});
    const [msg, setMsg] = useState("");

    useEffect(() => {
        const fetchRoles = async () => {
          try {
            const response = await userService.getAllRoles();
            console.log('Roles fetched successfully:', response.data);
            setRoles(response.data);
          } catch (error) {
            console.error('Error fetching roles:', error);
          }
        };
    
        fetchRoles();
      }, []);
    return (
        <>
            <div id="wrapper">
                <SideBar />
                {/* Content Wrapper */}
                <div id="content-wrapper" class="d-flex flex-column">
                    {/* Main Content */}
                    <div id="content">
                        <Header />
                        <div class="container-fluid">
                            {/* Page Heading */}
                            <h1 class="h3 mb-2 text-gray-800">Add User</h1>

                            {/* Display success message if available */}
                            {msg && (
                                <p className="text-center text-success">{msg}</p>
                            )}

                            <form onSubmit={(e) => submitUser(e)}>
                                <div>
                                    {/* Name field */}
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Name</label>
                                        <input type="text" name="name" className="form-control" 
                                        id="exampleInputEmail1" aria-describedby="emailHelp" value={user.name} onChange={(e) => handleChange(e)} />
                                    </div>

                                    {/* Email field */}
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Email</label>
                                        <input type="email" name="email" className="form-control" id="exampleInputPassword1"
                                        value={user.email} onChange={(e) => handleChange(e)} />
                                    </div>

                                    {/* Status field */}
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Status</label>
                                        <select className="form-control" name="status" value={user.status} onChange={(e) => handleChange(e)}>
                                            <option value="">Select an option</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>

                                    {/* Role field */}
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Role</label>
                                        <select className="form-control" name="roleId" value={user.roleId} onChange={(e) => handleChange(e)}>
                                            <option value="">Select an option</option>
                                            {roles.map((role) => (
                                                <option key={role.id} value={role.id}>{role.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                      {/* <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Role</label>
                                        <input type="number" name="roleId" className="form-control" id="exampleInputPassword1" />
                                    </div> */}

                                    {/* Photo field */}
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Photo</label>
                                        <input type="text" name="photoUrl" className="form-control" id="exampleInputPassword1" 
                                        value={user.photoUrl} onChange={(e) => handleChange(e)}/>
                                    </div>

                                    <input type='text' name='firebaseUID'  value={user.firebaseUID} onChange={(e) => handleChange(e)} />

                                    <button type="submit" className="btn btn-primary">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default AddUser