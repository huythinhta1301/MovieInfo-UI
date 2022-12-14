import { Form, Input, message, Typography, Button, Checkbox } from "antd";
// import { gapi } from "gapi-script";
import { LoginOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
// import GoogleLogin from "./GoogleLogin";
import { apiLogin } from "./api/authApi";
const Login = () => {
  const { Title } = Typography;
  const [form] = Form.useForm();
  const [data, setData] = useState();
  const [error, setError] = useState();
  const history = useHistory();

  const callApi = async (email, password) => {
    const res = await apiLogin(email, password)
      .then((response) => {
        setData(response);
        localStorage.setItem("token", `Bearer ${response.data}`);
        console.log(data);
        history.push("/actor");
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });
    console.log(data);
  };
  return (
    <>
      <Form
        form={form}
        name="signin"
        onFinish={(e) => {
          callApi(e.email, e.password);
        }}
      >
        <Title level={2} className="text-center">
          Login
        </Title>

        <div className="option-text">or use your account</div>
        <Form.Item
          name="email"
          hasFeedback
          label="Email address"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          rules={[
            {
              required: true,
              message: "Hãy nhập email",
            },
            {
              type: "email",
              message: "Định dạng email không đúng",
            },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          hasFeedback
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          rules={[
            {
              required: true,
              message: "Hãy nhập password",
            },
            { min: 6, message: "Password ko đủ dài" },
          ]}
        >
          <Input placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="#">
            Forgot password?
          </a>
        </Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          shape="round"
          icon={<LoginOutlined />}
          size="large"
        >
          Sign In
        </Button>
        <h2 style={{ color: "red" }}>{error?.response.data}</h2>
      </Form>
    </>
  );
};

export default Login;
