import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Modal } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import { Typography, message } from "antd";
import { Row, Col } from "antd";
import { apiSignup } from "./api/authApi";
import { Redirect, useHistory } from "react-router";
// import GoogleLoginAuth from "./GoogleLogin";

const { Title } = Typography;
const countDown = (title) => {
  let secondsToGo = 5;

  const modal = Modal.success({
    title: title,
    content: `This modal will be destroyed after ${secondsToGo} second.`,
  });

  const timer = setInterval(() => {
    secondsToGo -= 1;
    modal.update({
      content: `This modal will be destroyed after ${secondsToGo} second.`,
    });
  }, 1000);

  setTimeout(() => {
    clearInterval(timer);
    modal.destroy();
  }, secondsToGo * 1000);
};
const error = (title) => {
  Modal.error({
    title: "Có lỗi xảy ra !!!",
    content: title,
  });
};
const Signup1 = () => {
  const history = useHistory();
  const [agree, setAgree] = useState(false);
  const callApi = async (
    firstName,
    lastName,
    email,
    password,
    confirmPassword
  ) => {
    const res = await apiSignup(
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    )
      .then((response) => {
        console.log(response);
        countDown("Chúc mừng bạn đã đăng ký thành công");
      })

      .catch((err) => {
        console.log(err);
        error(err?.response.data);
      });
  };

  const [form] = Form.useForm();
  const checkboxHandler = () => {
    setAgree(!agree);
  };
  return (
    <>
      <Form
        name="signup"
        onFinish={(e) =>
          callApi(e.firstName, e.lastName, e.email, e.password, e.confirm)
        }
        form={form}
      >
        <Title level={2} className="text-center">
          Create Account
        </Title>
        {/* <GoogleLoginAuth /> */}

        <div className="option-text">or use your email for registration</div>

        <Row gutter={{ xs: 8, sm: 16 }}>
          <Col className="gutter-row" xs={{ span: 24 }} md={{ span: 12 }}>
            <Form.Item
              hasFeedback
              name="firstName"
              label="First name"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: "Please input your first name.",
                },
                {
                  min: 2,
                  message: "Your first name must be at least 2 characters.",
                },
              ]}
            >
              <Input placeholder="First name" size="large" />
            </Form.Item>
          </Col>
          <Col className="gutter-row" xs={{ span: 24 }} md={{ span: 12 }}>
            <Form.Item
              hasFeedback
              name="lastName"
              label="Last name"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: "Please input your last name.",
                },
                {
                  min: 2,
                  message: "Your last name must be at least 2 characters.",
                },
              ]}
            >
              <Input placeholder="Last name" size="large" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          name="email"
          label="Email address"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please input your email.",
            },
            {
              type: "email",
              message: "Your email is invalid.",
            },
          ]}
        >
          <Input placeholder="Email" size="large" />
        </Form.Item>

        <Row gutter={{ xs: 8, sm: 16 }}>
          <Col className="gutter-row" xs={{ span: 24 }} md={{ span: 12 }}>
            <Form.Item
              name="password"
              label="Password"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please input your password.",
                },
                { min: 6, message: "Password must be minimum 6 characters." },
              ]}
            >
              <Input.Password placeholder="Password" size="large" />
            </Form.Item>
          </Col>

          <Col className="gutter-row" xs={{ span: 24 }} md={{ span: 12 }}>
            <Form.Item
              name="confirm"
              label="Confirm Password"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Confirm your password.",
                },
              ]}
            >
              <Input.Password placeholder="Confirm password" size="large" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Checkbox onChange={checkboxHandler}>
            I agree to <a>Terms of Use & Privacy policy</a>.
          </Checkbox>
        </Form.Item>

        <Button
          disabled={!agree}
          type="primary"
          className="form-submit-btn"
          htmlType="submit"
          shape="round"
          icon={<UserAddOutlined />}
          size="large"
        >
          Sign Up
        </Button>
      </Form>
    </>
  );
};

export default Signup1;
