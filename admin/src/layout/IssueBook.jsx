import React, { useState } from "react";
import "../CSS/IssueBook.css";

function IssueBook() {
  const [history, setHistory] = useState([
    {
      id: 1,
      student: "Rahul Kumar",
      book: "React JS Guide",
      issueDate: "24 Jul 2026",
      issueTime: "10:15 AM",
      status: "Issued",
    },
    {
      id: 2,
      student: "Priya Sharma",
      book: "MongoDB Basics",
      issueDate: "24 Jul 2026",
      issueTime: "11:45 AM",
      status: "Issued",
    },
  ]);

  const [data, setData] = useState({
    student: "",
    book: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const issueBook = (e) => {
    e.preventDefault();

    const now = new Date();

    const newIssue = {
      id: Date.now(),
      student: data.student,
      book: data.book,
      issueDate: now.toLocaleDateString(),
      issueTime: now.toLocaleTimeString(),
      status: "Issued",
    };

    setHistory([newIssue, ...history]);

    setData({
      student: "",
      book: "",
    });

    alert("Book Issued Successfully");
  };

  return (
    <div className="issue-page">

      <div className="issue-form">

        <h2>Issue Book</h2>

        <form onSubmit={issueBook}>

          <input
            type="text"
            name="student"
            placeholder="Student Name"
            value={data.student}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="book"
            placeholder="Book Name"
            value={data.book}
            onChange={handleChange}
            required
          />

          <button>Issue Book</button>

        </form>

      </div>

      <div className="history">

        <h2>Previous Book Issue History</h2>

        <table>

          <thead>
            <tr>
              <th>Student</th>
              <th>Book</th>
              <th>Issue Date</th>
              <th>Issue Time</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {history.map((item) => (
              <tr key={item.id}>
                <td>{item.student}</td>
                <td>{item.book}</td>
                <td>{item.issueDate}</td>
                <td>{item.issueTime}</td>
                <td>
                  <span className="issued">
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default IssueBook;