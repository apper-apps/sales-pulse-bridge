import 'react-toastify/dist/ReactToastify.css'
import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Dashboard from "@/components/pages/Dashboard";
import Layout from "@/components/organisms/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          className="z-50"
        />
      </Layout>
    </Router>
  )
}

export default App