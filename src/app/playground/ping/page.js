"use client";

import React, { useState } from "react";
import Form from "@/app/components/form/Form";

export default function PingPage() {
  const [dataField, setDataField] = useState([]);
  const [notification, setNotification] = useState(""); // State cho notification
  const fields = [
    { name: "name", label: "Tên", type: "text", placeholder: "Nhập tên" },
    { name: "email", label: "Email", type: "email", placeholder: "Nhập email" },
    { name: "age", label: "Tuổi", type: "number", placeholder: "Nhập tuổi" },
  ];

  const handleSubmit = (data) => {
    setNotification("Thêm dữ liệu thành công!"); // Hiện thông báo
    setTimeout(() => setNotification(""), 3000); // Ẩn notification sau 3 giây

    setDataField((prevData) => {
      const newData = [...prevData, data];
      return newData;
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-green-700">
        Hello from The Farm!
      </h1>
      <Form fields={fields} onSubmit={handleSubmit} />

      {/* Notification */}
      {notification && (
        <div className="mt-4 p-4 border rounded bg-green-100 text-green-700">
          {notification}
        </div>
      )}

      <div className="mt-4 p-4 border rounded bg-gray-100">
        <h2 className="text-xl font-semibold">Dữ liệu đã gửi:</h2>
        <pre className="mt-2 p-4 bg-gray-200 rounded">
          {dataField.length > 0
            ? dataField.map((data, index) => (
                <div key={index}>
                  + {data.name} - {data.email} - {data.age}
                </div>
              ))
            : "Chưa có dữ liệu nào được gửi."}
        </pre>
      </div>
    </div>
  );
}
