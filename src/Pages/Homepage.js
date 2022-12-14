import { PageContainer } from "@ant-design/pro-components";
import { Layout, Menu, Breadcrumb, Typography } from "antd";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderComp from "../Components/Layout/HeaderComp";
import SiderComp from "../Components/Layout/SiderComp";

import ActorInfo from "./Actor/ActorInfo";
import IndexAuth from "./Auth/AuthenticationPage";
import Login from "./Auth/Login1";
import IndexPage from "./IndexPage";
const Homepage = () => {
  const { Content, Sider, Header } = Layout;
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<IndexAuth />} />
          </Routes>
          <Header>
            <SiderComp />
          </Header>
          <Layout>
            <Sider>
              <HeaderComp />
            </Sider>
            <Layout style={{ padding: "0 24px 24px", height: "100vh" }}>
              <PageContainer className="abc">
                <Routes>
                  <Route path="/" element={<IndexPage />} />
                  <Route exact path="/actor" element={<ActorInfo />} />
                </Routes>
              </PageContainer>
            </Layout>
          </Layout>
        </BrowserRouter>
      </Layout>
    </div>
  );
};

export default Homepage;
