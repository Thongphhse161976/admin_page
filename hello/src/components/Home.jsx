import {React, useState, useEffect} from "react";
import App from "../App";
import Header from "./Header";
import SideBar from "./SideBar";
import orderService from "../service/order.service";
const Home = () => {


  //tinh tong order
  const [orderCount, setOrderCount] = useState(0);
  const [sumForCurrentMonth, setSumForCurrentMonth] = useState(0);
  const [sumForCurrentYear, setSumForCurrentYear] = useState(0);

  useEffect(() => {
    countOrders();
  }, []);

  async function countOrders() {
    try {
      const response = await orderService.getAllOrders();
      const orders = response.data;
      const orderCount = orders.length;

      console.log("Total orders:", orderCount);

      setOrderCount(orderCount);
    } catch (error) {
      console.error("Error counting orders:", error);
    }
  }

  //Income by month
  const fetchOrdersAndCalculateSum = async () => {
    try {
      const response = await orderService.getAllOrders();
      const orders = response.data;
  
      const sumForCurrentMonth = calculateSumByMonth(orders);
      setSumForCurrentMonth(sumForCurrentMonth);
      console.log("Sum for current month:", sumForCurrentMonth);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };
  
  fetchOrdersAndCalculateSum();
  
  const calculateSumByMonth = (orders) => {
    // Get the current month
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
  
    // Initialize the sum for the current month
    let sumForCurrentMonth = 0;
  
    // Iterate over each order
    orders.forEach((order) => {
      // Extract the month from the order date
      const orderMonth = new Date(order.orderDate).getMonth();
  
      // Check if the order belongs to the current month
      if (orderMonth === currentMonth) {
        sumForCurrentMonth += order.total;
      }
    });
  
    return sumForCurrentMonth;
  };

  
  //Income by year
  const fetchOrdersAndCalculateSum1 = async () => {
    try {
      const response = await orderService.getAllOrders();
      const orders = response.data;
  
      const sumForCurrentYear = calculateSumByYear(orders);
      setSumForCurrentYear(sumForCurrentYear);
      console.log("Sum for current year:", sumForCurrentYear);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };
  
  fetchOrdersAndCalculateSum1();

  const calculateSumByYear = (orders) => {
    // Get the current year
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
  
    // Initialize the sum for the current year
    let sumForCurrentYear = 0;
  
    // Iterate over each order
    orders.forEach((order) => {
      // Extract the year from the order date
      const orderYear = new Date(order.orderDate).getFullYear();
  
      // Check if the order belongs to the current year
      if (orderYear === currentYear) {
        sumForCurrentYear += order.total;
      }
    });
  
    return sumForCurrentYear;
  };
  
  
  return (
    <>
      {/* Page Wrapper */}

      <div id="wrapper">
        <SideBar />
        {/* Content Wrapper */}

        <div id="content-wrapper" class="d-flex flex-column">
          {/* Main Content */}

          <div id="content">
            <Header />
            {/* Begin Page Content */}
            <div className="container-fluid">
              <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                  class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
              </div>

              <div>
                {/* Content Row */}
                <div className="row">
                  {/* Earnings (Monthly) Card Example */}
                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                              Earnings (Monthly)</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800"> ${sumForCurrentMonth.toFixed(2)}</div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-calendar fa-2x text-gray-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Earnings (Monthly) Card Example */}
                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                              Earnings (Annual)</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">${sumForCurrentYear.toFixed(2)}</div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-dollar-sign fa-2x text-gray-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Earnings (Monthly) Card Example */}
                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-info shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Orders
                            </div>
                            <div className="row no-gutters align-items-center">
                              <div className="col-auto">
                                <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">{orderCount}</div>
                              </div>
                              
                            </div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-clipboard-list fa-2x text-gray-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Pending Requests Card Example */}
                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-warning shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                              Pending Requests</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-comments fa-2x text-gray-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Content Row */}
                <div className="row">
                  {/* Area Chart */}
                  <div className="col-xl-8 col-lg-7">
                    <div className="card shadow mb-4">
                      {/* Card Header - Dropdown */}
                      <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                        <div className="dropdown no-arrow">
                          <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                            <div className="dropdown-header">Dropdown Header:</div>
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#">Something else here</a>
                          </div>
                        </div>
                      </div>
                      {/* Card Body */}
                      <div className="card-body">
                        <div className="chart-area">
                          <canvas id="myAreaChart" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Pie Chart */}
                  <div className="col-xl-4 col-lg-5">
                    <div className="card shadow mb-4">
                      {/* Card Header - Dropdown */}
                      <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
                        <div className="dropdown no-arrow">
                          <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                            <div className="dropdown-header">Dropdown Header:</div>
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#">Something else here</a>
                          </div>
                        </div>
                      </div>
                      {/* Card Body */}
                      <div className="card-body">
                        <div className="chart-pie pt-4 pb-2">
                          <canvas id="myPieChart" />
                        </div>
                        <div className="mt-4 text-center small">
                          <span className="mr-2">
                            <i className="fas fa-circle text-primary" /> Direct
                          </span>
                          <span className="mr-2">
                            <i className="fas fa-circle text-success" /> Social
                          </span>
                          <span className="mr-2">
                            <i className="fas fa-circle text-info" /> Referral
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              
              </div>

            </div>
          </div>
        </div>


      </div>
    </>
  );
};

export default Home;

