import React, { useEffect, useState } from 'react';
import Header from '../Header';
import SideBar from '../SideBar';
import userService from '../../service/user.service';
import ReactPaginate from 'react-paginate';

const ListUsers = () => {
  const [userList, setUserList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [usersPerPage] = useState(5);

  useEffect(() => {
    userService
      .getAllUsers()
      .then((res) => {
        console.log(res.data);
        setUserList(res.data);
      })
      .catch((error) => {
        console.log(error);
        console.log('lol');
      });
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = userList.filter((user) => {
    return (
      user.id.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.name.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.firebaseUID.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.status.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.roleId.toString().toLowerCase().includes(searchTerm.toLowerCase())
      // user.storeId.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const pageCount = Math.ceil(filteredUsers.length / usersPerPage);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * usersPerPage;
  const currentUsers = filteredUsers.slice(offset, offset + usersPerPage);

  return (
    <>
      {/* Page Wrapper */}
      <div id="wrapper">
        {/* Content Wrapper */}
        <SideBar />

        <div id="content-wrapper" className="d-flex flex-column">
          {/* Main Content */}
          <div id="content">
            <Header />
            <div className="container-fluid">
              {/* Page Heading */}
              <h1 className="h3 mb-2 text-gray-800">List Users</h1>
              {/* Search Input */}
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Users"
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>

              {/* DataTales Example */}
              <div className="card shadow mb-4">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-bordered" id="" width="100%" cellSpacing="0">
                      <thead>
                        <tr>
                          <th>User Id</th>
                          <th>Photo</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Firebase Id</th>
                          <th>Status</th>
                          <th>Role</th>
                     
                        </tr>
                      </thead>
                      <tbody>
                        {currentUsers.map((user) => (
                          <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>
                              <img src={user.photoUrl} alt="User Photo" className='img-responsive' style={{width: '60px' , height: '75px'}} />
                            </td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.firebaseUID}</td>
                            <td>{user.status}</td>
                            <td>{user.role}</td>
                            
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Pagination */}
              <ReactPaginate
                previousLabel={'Previous'}
                nextLabel={'Next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={'pagination justify-content-center'}
                activeClassName={'active'}
                previousClassName={'page-item'}
                nextClassName={'page-item'}
                pageClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextLinkClassName={'page-link'}
                breakLinkClassName={'page-link'}
                pageLinkClassName={'page-link'}
              />
            </div>
            {/* /.container-fluid */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListUsers;
