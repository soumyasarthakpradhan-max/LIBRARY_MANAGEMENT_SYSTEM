import React from 'react'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Dashboard from './layout/Dashboard';
import AllBooks from './layout/AllBooks';
import AddStudent from './layout/AddStudent';
import RemoveStudent from './layout/RemoveStudent';
import AddBook from './layout/AddBook';
import RemoveBook from './layout/RemoveBook';
import IssueBook from './layout/IssueBook';
import SubmitBook from './layout/SubmitBook';
import AdminLogin from './page/AdminLogin';
import AdminDashboard from './page/AdminDashboard';




function App() {

  let router= createBrowserRouter([
    {
      path:"/",
      element:<AdminLogin/>
    },
    {
      path:"/admindashboard",
      element:<AdminDashboard/>,
      children:[
        {
          path:"",
          element:<Dashboard/>
        },
        {
          path:"allbooks",
          element:<AllBooks/>
        },
        {
          path:"addstudent",
          element:<AddStudent/>
        },
        {
          path:"removestudent",
          element:<RemoveStudent/>
        },
        {
          path:"addbook",
          element:<AddBook/>
        },
        {
          path:"removebook",
          element:<RemoveBook/>
        },
        {
          path:"issuebook",
          element:<IssueBook/>
        },
        {
          path:"submitbook",
          element:<SubmitBook/>
        },
      ]
    }
  ])


  return (
    <RouterProvider  router={router}/>
  )
}

export default App