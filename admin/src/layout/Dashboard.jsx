import React from "react";
import "../CSS/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-home">

      <h1 style={{color:'white'}}>Library Dashboard</h1>

      {/* Cards */}

      <div className="cards">

        <div className="card blue">
          <h2>520</h2>
          <p>Total Students</p>
        </div>

        <div className="card green">
          <h2>1350</h2>
          <p>Total Books</p>
        </div>

        <div className="card orange">
          <h2>145</h2>
          <p>Books Issued</p>
        </div>

        <div className="card purple">
          <h2>1120</h2>
          <p>Books Returned</p>
        </div>

        

      </div>

      {/* Request Table */}

      <div className="table-container">

        <h2>Pending Book Requests</h2>

        <table>

          <thead>

            <tr>
              <th>Student</th>
              <th>Book</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>

          </thead>

          <tbody>

            <tr>
              <td>Rahul Kumar</td>
              <td>JavaScript</td>
              <td>24-07-2026</td>
              <td>Pending</td>
              <td>
                <button className="accept">Accept</button>
                <button className="reject">Reject</button>
              </td>
            </tr>

            <tr>
              <td>Priya Sharma</td>
              <td>React Guide</td>
              <td>24-07-2026</td>
              <td>Pending</td>
              <td>
                <button className="accept">Accept</button>
                <button className="reject">Reject</button>
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Dashboard;