// src/components/CommonForm.jsx
import React from "react";
import { Form, Input, Button, Typography } from "antd";

const { Title } = Typography;

const CommonForm = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log("Form Data:", values);
  };

  return (
    <div style={{
      background: "#ffffffcc",
      padding: "24px",
      borderRadius: "8px",
      boxShadow: "0 0 12px rgba(0,0,0,0.1)",
      className:"Form"
    
    }}>
      <Title level={4}>Get More Details</Title>
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input placeholder="Your Name" />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ required: true, type: "email" }]}>
          <Input placeholder="you@example.com" />
        </Form.Item>
        <Form.Item name="phone" label="Phone" rules={[{ required: true }]}>
          <Input placeholder="Phone Number" />
        </Form.Item>
        <Form.Item>
          <Button className="button" htmlType="submit" block>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CommonForm;
