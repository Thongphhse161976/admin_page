import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import ListUsers from './components/users/ListUsers';
import ListOrders from './components/orders/ListOrders';
import ListStore from './components/stores/ListStore';
import ListPayment from './components/payments/ListPayment';
import ListReview from './components/reviews/ListReview';
import ListCategories from './components/categories/ListCategories';
import AddStore from './components/stores/AddStore';
import AddUser from './components/users/AddUser';
import AddCategory from './components/categories/AddCategory';
import EditStore from './components/stores/EditStore';
import ListRating from './components/ratings/ListRating';
import ListRole from './components/roles/ListRole';
import Login from './components/login/Login';
import Profile from './components/login/Profile';
import { AuthContextProvider } from './components/login/AuthContext';
function App() {
  return (

    <>
      <AuthContextProvider>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='/list_users' element={<ListUsers />}></Route>
          <Route path='/add_user' element={<AddUser />}></Route>
          <Route path='/list_orders' element={<ListOrders />}></Route>
          <Route path='/list_categories' element={<ListCategories />}></Route>
          <Route path='/add_category' element={<AddCategory />}></Route>
          <Route path='/list_stores' element={<ListStore />}></Route>
          <Route path='/add_store' element={<AddStore />}></Route>
          <Route path='/edit_store/:storeId' element={<EditStore />}></Route>
          <Route path='/list_payments' element={<ListPayment />}></Route>
          <Route path='/list_reviews' element={<ListReview />}></Route>
          <Route path='/list_categories' element={<ListCategories />}></Route>
          <Route path='/list_rating' element={<ListRating />}></Route>
          <Route path='/list_role' element={<ListRole />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
        </Routes>
      </AuthContextProvider>


    </>


  );
};

export default App;
