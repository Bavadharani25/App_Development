import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Table, Row, Col } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';

function Profile() {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return <div>Loading...</div>;
  }

  // Sample data for the charts and tables
  const ordersData = [
    { id: 1, item: 'Product A', quantity: 10, status: 'Shipped' },
    { id: 2, item: 'Product B', quantity: 5, status: 'Processing' },
    { id: 3, item: 'Product C', quantity: 8, status: 'Delivered' },
  ];

  const shipmentsData = [
    { id: 1, shipmentId: 'SH001', status: 'On Time' },
    { id: 2, shipmentId: 'SH002', status: 'Delayed' },
    { id: 3, shipmentId: 'SH003', status: 'In Transit' },
  ];

  const inventoryData = [
    { id: 1, item: 'Product A', stock: 100 },
    { id: 2, item: 'Product B', stock: 50 },
    { id: 3, item: 'Product C', stock: 200 },
  ];

  const inquiriesData = [
    { id: 1, customer: 'Customer A', inquiry: 'Shipping delay', status: 'Resolved' },
    { id: 2, customer: 'Customer B', inquiry: 'Order status', status: 'Pending' },
    { id: 3, customer: 'Customer C', inquiry: 'Product information', status: 'Resolved' },
  ];

  const barData = {
    labels: ['Product A', 'Product B', 'Product C'],
    datasets: [
      {
        label: 'Stock Levels',
        data: [100, 50, 200],
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
      },
    ],
  };

  return (
    <div>
      <h1>Welcome, {user.name || user.email}</h1>
      
      <div className="dashboard">
        <Row>
          {/* Orders Section */}
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Orders</Card.Title>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Item</th>
                      <th>Quantity</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ordersData.map(order => (
                      <tr key={order.id}>
                        <td>{order.id}</td>
                        <td>{order.item}</td>
                        <td>{order.quantity}</td>
                        <td>{order.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>

          {/* Shipments Section */}
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Shipments</Card.Title>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Shipment ID</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {shipmentsData.map(shipment => (
                      <tr key={shipment.id}>
                        <td>{shipment.id}</td>
                        <td>{shipment.shipmentId}</td>
                        <td>{shipment.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          {/* Inventory Section */}
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Inventory</Card.Title>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Item</th>
                      <th>Stock</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inventoryData.map(item => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.item}</td>
                        <td>{item.stock}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>

          {/* Customer Inquiries Section */}
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Customer Inquiries</Card.Title>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Customer</th>
                      <th>Inquiry</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inquiriesData.map(inquiry => (
                      <tr key={inquiry.id}>
                        <td>{inquiry.id}</td>
                        <td>{inquiry.customer}</td>
                        <td>{inquiry.inquiry}</td>
                        <td>{inquiry.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          {/* Bar Graph Section */}
          <Col md={12}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Inventory Levels</Card.Title>
                <Bar data={barData} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Profile;
