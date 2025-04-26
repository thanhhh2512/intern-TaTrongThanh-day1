import React from "react";
import Form from "./Form";

export default {
  title: "Components/Form/Form",
  component: Form,
};

const Template = (args) => <Form {...args} />;

export const Default = Template.bind({});
Default.args = {
  fields: [
    { name: "name", label: "Họ tên", type: "text", placeholder: "Nhập họ tên" },
    { name: "email", label: "Email", type: "email", placeholder: "Nhập email" },
    { name: "age", label: "Tuổi", type: "number", placeholder: "Nhập tuổi" },
  ],
  onSubmit: (data) => alert(JSON.stringify(data, null, 2)),
};

export const DarkMode = Template.bind({});
