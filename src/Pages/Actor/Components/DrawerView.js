import React from "react";
import DrawerHook from "../../../Components/ModalHook";
import { ProDescriptions, Item } from "@ant-design/pro-components";
const DrawerView = ({ isModalVisible, setIsModalVisible, dataDetail }) => {
  if (!isModalVisible) return <></>;
  return (
    <DrawerHook
      isVisible={isModalVisible}
      setVisible={() => setIsModalVisible(false)}
    >
      <ProDescriptions column={2} title="User infomation" size="middle">
        <ProDescriptions.Item valueType="text" label="ID" ellipsis>
          {dataDetail?.actorID}
        </ProDescriptions.Item>
        <ProDescriptions.Item valueType="text" label="Name" ellipsis>
          {dataDetail?.actorName}
        </ProDescriptions.Item>
        <ProDescriptions.Item valueType="text" label="DOB" ellipsis>
          {dataDetail?.actorDOB}
        </ProDescriptions.Item>
        <ProDescriptions.Item valueType="text" label="Gender" ellipsis>
          {dataDetail?.actorGender}
        </ProDescriptions.Item>
      </ProDescriptions>
    </DrawerHook>
  );
};

export default DrawerView;
