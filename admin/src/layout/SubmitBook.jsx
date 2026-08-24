import React, { useState } from "react";
import "../CSS/SubmitBook.css";

function SubmitBook() {

  const [history, setHistory] = useState([
    {
      id: 1,
      student: "Rahul Kumar",
      book: "React JS Guide",
      submitDate: "24 Jul 2026",
      submitTime: "02:30 PM",
      status: "Submitted",
    },
    {
      id: 2,
      student: "Priya Sharma",
      book: "MongoDB Basics",
      submitDate: "24 Jul 2026",
      submitTime: "04:10 PM",
      status: "Submitted",
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

  const submitBook = (e) => {
    e.preventDefault();

    const now = new Date();

    const newSubmit = {
      id: Date.now(),
      student: data.student,
      book: data.book,
      submitDate: now.toLocaleDateString(),
      submitTime: now.toLocaleTimeString(),
      status: "Submitted",
    };

    setHistory([newSubmit, ...history]);

    setData({
      student: "",
      book: "",
    });

    alert("Book Submitted Successfully");
  };

  return (
    <div className="submit-page">

      <div className="submit-form">

        <h2>Submit Book</h2>

        <form onSubmit={submitBook}>

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

          <button>Submit Book</button>

        </form>

      </div>

      <div className="history">

        <h2>Previous Book Submit History</h2>

        <table>

          <thead>
            <tr>
              <th>Student</th>
              <th>Book</th>
              <th>Submit Date</th>
              <th>Submit Time</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {history.map((item) => (
              <tr key={item.id}>
                <td>{item.student}</td>
                <td>{item.book}</td>
                <td>{item.submitDate}</td>
                <td>{item.submitTime}</td>
                <td>
                  <span className="submitted">
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

export default SubmitBook;