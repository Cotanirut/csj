import React from "react";
import { Layout } from "antd"; // ใช้ Layout ของ Ant Design
import Sibar from "../src/module/component/sibar"; // นำเข้า Sibar component
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* ใช้ Layout สำหรับ Sidebar และ Content */}
      <Layout style={{ minHeight: "100vh" }}>
        {/* เรียกใช้ Sibar */}
        <Sibar />
        {/* เรียกใช้ View คอมโพเนนต์ */}
        <Layout style={{ padding: '0 24px 24px' }}>
        
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
