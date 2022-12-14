// import { Button, Form, Input } from "antd";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { getAPI, postApi } from "../../Api/ApiRequest";
// import { apiLogin } from "./api/authApi";
// const Login = () => {
//   const [data, setData] = useState();
//   const navigate = useNavigate();

//   const callApi = async (email, password) => {
//     const res = await apiLogin(email, password)
//       .then((response) => {
//         setData(response);
//         localStorage.setItem("token", `Bearer ${response.data}`);
//         console.log(data);
//         navigate("/actor");
//       })

//       .catch((err) => console.log(err));
//     console.log(data);
//   };
//   return (
//     <Form
//       labelCol={{ span: 8 }}
//       wrapperCol={{ span: 16 }}
//       onFinish={(e) => {
//         callApi(e.email, e.password);
//       }}
//       autoComplete="off"
//     >
//       <Form.Item
//         label="Email"
//         name="email"
//         rules={[
//           {
//             required: true,
//             message: "Please input your email!",
//             type: "email",
//           },
//         ]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         label="Password"
//         name="password"
//         rules={[{ required: true, message: "Please input your password!" }]}
//       >
//         <Input.Password />
//       </Form.Item>

//       <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
//         <Button type="primary" htmlType="submit">
//           Submit
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };

// export default Login;
