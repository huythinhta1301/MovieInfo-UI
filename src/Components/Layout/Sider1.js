import { Menu } from "antd";
import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../Pages/Auth/static/lottecine_logo.png";
const Sider1 = () => {
  let { pathname } = useLocation();
  pathname = pathname.replace("/", "");
  const dashboard = [
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        d="M3 4C3 3.44772 3.44772 3 4 3H16C16.5523 3 17 3.44772 17 4V6C17 6.55228 16.5523 7 16 7H4C3.44772 7 3 6.55228 3 6V4Z"
        fill="#fff"
      />
      <path
        d="M3 10C3 9.44771 3.44772 9 4 9H10C10.5523 9 11 9.44771 11 10V16C11 16.5523 10.5523 17 10 17H4C3.44772 17 3 16.5523 3 16V10Z"
        fill="#fff"
      />
      <path
        d="M14 9C13.4477 9 13 9.44771 13 10V16C13 16.5523 13.4477 17 14 17H16C16.5523 17 17 16.5523 17 16V10C17 9.44771 16.5523 9 16 9H14Z"
        fill="#fff"
      />
    </svg>,
  ];

  const actor = [
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M3.5 8a5.5 5.5 0 118.596 4.547 9.005 9.005 0 015.9 8.18.75.75 0 01-1.5.045 7.5 7.5 0 00-14.993 0 .75.75 0 01-1.499-.044 9.005 9.005 0 015.9-8.181A5.494 5.494 0 013.5 8zM9 4a4 4 0 100 8 4 4 0 000-8z"
      />
      <path d="M17.29 8c-.148 0-.292.01-.434.03a.75.75 0 11-.212-1.484 4.53 4.53 0 013.38 8.097 6.69 6.69 0 013.956 6.107.75.75 0 01-1.5 0 5.193 5.193 0 00-3.696-4.972l-.534-.16v-1.676l.41-.209A3.03 3.03 0 0017.29 8z" />
    </svg>,
  ];
  return (
    <>
      <div className="brand">
        <img src={logo} alt="" />
        <span>Lotte Cinema</span>
      </div>
      <hr />
      <Menu>
        <Menu.Item key="1">
          <NavLink to="/dashboard">
            <span className="icon">{dashboard}</span>
            <span className="label">Dashboard</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink to="/actor">
            <span className="icon">{actor}</span>
            <span className="label">Actor</span>
          </NavLink>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Sider1;
