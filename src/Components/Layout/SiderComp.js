import React from "react";
import { Breadcrumb, Layout, Menu } from "antd";
import { TeamOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const SiderComp = () => {
  const item2 = [
    {
      key: "actor",
      label: "Actor",
      icon: <TeamOutlined />,
      children: [
        {
          key: "info",
          label: "Label 2",
        },
        {
          key: "3",
          label: "Label 3",
        },
      ],
    },

    {
      key: "movie",
      label: "Movie",
      icon: <VideoCameraOutlined />,
    },
  ];
  return (
    <>
      <Menu key="login" mode="inline" theme="dark">
        <Link to="/login">
          <Menu.Item key="login">Login</Menu.Item>
        </Link>
      </Menu>
    </>
  );
};

export default SiderComp;
