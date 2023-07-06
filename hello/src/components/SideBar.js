import { Link } from "react-router-dom"

const SideBar = () => {
    return (
        <>
            {/* Sidebar */}
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                {/* Sidebar - Brand */}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink" />
                    </div>
                    <div className="sidebar-brand-text mx-3">Admin</div>
                </Link>
                {/* Divider */}
                <hr className="sidebar-divider my-0" />
                {/* Nav Item - Dashboard */}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt" />
                        <span>Dashboard</span></Link>
                </li>
                {/* Divider */}
                <hr className="sidebar-divider" />
                {/* Heading */}
                <div className="sidebar-heading">
                    Management
                </div>
                {/* Nav Item - Utilities Collapse Menu */}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilitiesdd" aria-expanded="true" aria-controls="collapseUtilities">
                        <i className="fas fa-box"/>
                        <span>Order </span>
                    </a>
                    <div id="collapseUtilitiesdd" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <Link className="collapse-item" to="/list_orders">List Orders</Link>
                        </div>
                    </div>

                </li>
                
                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities2" aria-expanded="true" aria-controls="collapseUtilities">
                        <i class="fas fa-file-invoice-dollar"></i>
                        <span>Payment </span>
                    </a>
                    <div id="collapseUtilities2" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <Link className="collapse-item" to="/list_payments">List Payments</Link>

                        </div>
                    </div>

                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilitiesddd" aria-expanded="true" aria-controls="collapseUtilities">
                        <i className="fas fa-box"/>
                        <span>Category </span>
                    </a>
                    <div id="collapseUtilitiesddd" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <Link className="collapse-item" to="/list_categories">List Categories</Link>
                        </div>
                    </div>

                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities22" aria-expanded="true" aria-controls="collapseUtilities">
                    <i class="far fa-file-pdf"></i>
                        <span>Review </span>
                    </a>
                    <div id="collapseUtilities22" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <Link className="collapse-item" to="/list_reviews">List Reviews</Link>

                        </div>
                    </div>

                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseStations" aria-expanded="true" aria-controls="collapsePages">
                    <i class="fas fa-store"></i>
                        <span>Store </span>
                    </a>
                    <div id="collapseStations" className="collapse" aria-labelledby="headingStation" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <Link className="collapse-item" to="/list_stores">List Stores</Link>
                        </div>
                    </div>
                    <div id="collapseStations" className="collapse" aria-labelledby="headingStation" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <Link className="collapse-item" to="/add_store">Add Store</Link>
                        </div>
                    </div>
                </li>
                
               
                {/* Nav Item - Pages Collapse Menu */}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-user"/>
                        <span>User </span>
                    </a>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <Link className="collapse-item" to="/list_users">List Users</Link>
                        </div>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <Link className="collapse-item" to="/add_user">Add User</Link>
                        </div>
                    </div>
                </li>

                {/* <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo2" aria-expanded="true" aria-controls="collapseTwo">
                    <i class="fas fa-vector-square"></i>
                        <span>Category </span>
                    </a>
                    <div id="collapseTwo2" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <Link className="collapse-item" to="/list_categories">List Categories</Link>
                        </div>
                    </div>
                </li> */}


            </ul>
            {/* End of Sidebar */}
            


        </>
    )
}

export default SideBar