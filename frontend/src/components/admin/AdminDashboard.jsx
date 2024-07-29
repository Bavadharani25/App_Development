import React from 'react';
import './AdminDashboard.css';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AdminDashboard = () => {
  const vehiclesData = [
    { id: 1, vehicle: 'Truck 1', status: 'Delivered' },
    { id: 2, vehicle: 'Truck 2', status: 'In Progress' },
    { id: 3, vehicle: 'Truck 3', status: 'In Progress' },
  ];

  const goodsData = [
    { id: 1, goods: 'Electronics', status: 'Delivered' },
    { id: 2, goods: 'Furniture', status: 'In Process' },
    { id: 3, goods: 'Clothing', status: 'In Process' },
  ];

  const shippingDetails = [
    { orderId: 1, destination: 'Mumbai', status: 'Shipped', date: '2024-07-26' },
    { orderId: 2, destination: 'Andhra Pradesh', status: 'Pending', date: '2024-07-28' },
    { orderId: 3, destination: 'West Bengal', status: 'Delivered', date: '2024-07-27' },
  ];

  const statistics = {
    newOrders: 160,
    totalOrders: 135,
    unitsSold: 20,
    newCustomers: 5,
  };

  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Profit/Revenue',
        data: [1200, 1500, 1700, 1300, 1600, 1800, 2000, 2100, 1900, 2200, 2300, 2400],
        backgroundColor: '#4e73df',
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <h1>Admin Dashboard</h1>

      <div className="stats-container">
        <div className="stat-card">
          <h3>Total Delivery</h3>
          <p>{statistics.newOrders}</p>
        </div>
        <div className="stat-card">
          <h3>Goods Delivered </h3>
          <p>{statistics.totalOrders}</p>
        </div>
        <div className="stat-card">
          <h3>In Progress</h3>
          <p>{statistics.unitsSold}</p>
        </div>
        <div className="stat-card">
          <h3>New Customers</h3>
          <p>{statistics.newCustomers}</p>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="table-container">
          <h2>Vehicles In Progress</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Vehicle</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {vehiclesData.map((vehicle) => (
                <tr key={vehicle.id}>
                  <td>{vehicle.id}</td>
                  <td>{vehicle.vehicle}</td>
                  <td>{vehicle.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="table-container">
          <h2>Goods In Process</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Goods</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {goodsData.map((goods) => (
                <tr key={goods.id}>
                  <td>{goods.id}</td>
                  <td>{goods.goods}</td>
                  <td>{goods.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="table-container">
          <h2>Order Shipping Details</h2>
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Destination</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {shippingDetails.map((detail) => (
                <tr key={detail.orderId}>
                  <td>{detail.orderId}</td>
                  <td>{detail.destination}</td>
                  <td>{detail.status}</td>
                  <td>{detail.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="chart-container">
          <h2>Profit/Revenue</h2>
          <Bar data={chartData} options={{ responsive: true }} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
