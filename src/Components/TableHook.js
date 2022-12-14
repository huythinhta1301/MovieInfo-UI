import React from "react";
import ProTable from "@ant-design/pro-table";
import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
const TableHook = ({
  columns,
  dataTableList,
  setVisible,
  rowKey,
  setDataChange,
}) => {
  return (
    <ProTable
      scroll={{ x: "max-content" }}
      dataSource={dataTableList}
      columns={columns}
      search={false}
      rowKey={rowKey}
      toolBarRender={() =>
        setVisible
          ? [
              <Button
                key="button"
                icon={<PlusOutlined />}
                onClick={() => {
                  setVisible(true);
                  setDataChange(null);
                }}
                type="primary"
              >
                Add
              </Button>,
            ]
          : [<></>]
      }
    />
  );
};

export default TableHook;
