import React from 'react';
import { UserAuth } from './AuthContext';
import './style.css';
import Header from "../Header";
import SideBar from "../SideBar";
const Profile = () => {
  const { logOut, user } = UserAuth();
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

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
              <div className='w-[300px] m-auto'>
                <h1 className='text-center text-2xl font-bold pt-12'>Profile</h1>
                <div className='container-profile-information'>
                  <p>Welcome, {user?.displayName}</p>
                  <img src={user?.photoURL} />
                  <h1>{user?.email}</h1>
                </div>
                <div>
                  <image src> </image>
                </div>
                <button onClick={handleSignOut} className='border py-2 px-5 mt-10'>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>

  );
};

export default Profile;