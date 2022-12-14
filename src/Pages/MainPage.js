import { Affix, Layout } from "antd";
import { Header } from "antd/es/layout/layout";
import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Header1 from "../Components/Layout/Header1";
import Sider1 from "../Components/Layout/Sider1";
import "../assets/styles/main.css";

const { Header: AntHeader, Content, Sider } = Layout;

const MainPage = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState("right");
  const [sidenavColor, setSidenavColor] = useState("#1890ff");
  const [sidenavType, setSidenavType] = useState("transparent");
  const [fixed, setFixed] = useState(false);
  let { pathname } = useLocation();
  pathname = pathname.replace("/", "");
  return (
    <Layout
      className={`layout-dashboard ${
        pathname === "profile" ? "layout-profile" : ""
      } ${pathname === "rtl" ? "layout-dashboard-rtl" : ""}`}
    >
      <Sider
        trigger={null}
        width={250}
        theme="light"
        className={`sider-primary ant-layout-sider-primary ${
          sidenavType === "#fff" ? "active-route" : ""
        }`}
        style={{ background: sidenavType }}
      >
        <Sider1 color={sidenavColor} />
      </Sider>

      <Layout>
        {fixed ? (
          <Affix>
            <AntHeader className={`${fixed ? "ant-header-fixed" : ""}`}>
              <Header1 name={pathname} subName={pathname} />
            </AntHeader>
          </Affix>
        ) : (
          <AntHeader className={`${fixed ? "ant-header-fixed" : ""}`}>
            <Header1 name={pathname} subName={pathname} />
          </AntHeader>
        )}
        <Content className="content-ant">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default MainPage;
