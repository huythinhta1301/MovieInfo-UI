import React from "react";
import { Breadcrumb, Layout, Menu, Space, Button } from "antd";
import { VideoCameraOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";
const { Item, SubMenu } = Menu;

const MenuItems = () => {
  return (
    <Menu mode="horizontal" selectable={false} className="menu">
      <Item key="/host">
        <Link to="/host">
          <HomeOutlined />
          Host
        </Link>
      </Item>
      <Item key="/login">
        <Link to="/login">
          <Button type="primary">Sign In</Button>
        </Link>
      </Item>
    </Menu>
  );
};
const HeaderComp = () => {
  return (
    <>
      <div className="app-header__logo-search-section">
        <div className="app-header__logo">
          <Link to="/">a</Link>
        </div>
      </div>
      <div className="app-header__menu-section">
        <MenuItems />
      </div>
    </>
  );
};

export default HeaderComp;
