import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { DrawerForm } from "@ant-design/pro-components";
import { Button, Form, message, Modal } from "antd";

const DrawerHook = ({ isVisible, setVisible, children }) => {
  return (
    <>
      <Modal
        title="Test"
        onCancel={() => setVisible(false)}
        visible={isVisible}
      >
        {children}
      </Modal>
    </>
  );
};

export default DrawerHook;
