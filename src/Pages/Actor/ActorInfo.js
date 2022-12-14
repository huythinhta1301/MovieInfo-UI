import { Button, Card, Input, Select, Space, Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import TableHook from "../../Components/TableHook";
import DrawerHook from "../../Components/ModalHook";
import DrawerView from "./Components/DrawerView";
import { apiGetActorList } from "./api/actorApi";
const ActorInfo = () => {
  const [listActor, setListActor] = useState([]);
  const [checking, setChecking] = useState(false);
  const [limit, setLimit] = useState(10);
  const [name, setName] = useState(null);
  const [gender, setGender] = useState(null);
  const [isModalVisibleEdit, setIsModalVisibleEdit] = useState(false);
  const [dataDetail, setDataDetail] = useState({});
  const [isModalVisibleView, setIsModalVisibleView] = useState(false);

  const fetchActorList = async () => {
    const res = await apiGetActorList(limit, name, gender).then((res) => {
      setListActor(res.data);
      if (res.data.length > 0) {
        setChecking(true);
      }
    });
    console.log("aaa", res);
  };

  useEffect(() => {
    fetchActorList(limit, name, gender);
  }, [limit]);

  const columns = [
    {
      title: "ID",
      dataIndex: "actorID",
    },
    {
      title: "Name",
      dataIndex: "actorName",
      render: (_, actorData) => (
        <a
          onClick={() => {
            setIsModalVisibleView(true);
            setDataDetail(actorData);
          }}
        >
          {actorData.actorName}
        </a>
      ),
    },
    {
      title: "Birthday",
      dataIndex: "actorDOB",
    },
    {
      title: "Gender",
      dataIndex: "actorGender",
    },
  ];
  console.log(listActor);
  const handleName = () => {
    fetchActorList(limit, name, gender);
    console.log(limit, name, gender);
  };
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Card>
        <Space>
          <Select
            defaultValue={10}
            style={{ width: 120 }}
            onChange={(e) => setLimit(e)}
            options={[
              {
                value: 5,
                label: "5",
              },
              {
                value: 10,
                label: "10",
              },
              {
                value: 20,
                label: "20",
              },
            ]}
          />
          <Input
            placeholder="Search name"
            onChange={(e) => setName(e.target.value)}
          />
          <Select
            valuePropName="Male"
            placeholder="Filter Gender"
            style={{ width: 120 }}
            onChange={(e) => setGender(e)}
            options={[
              {
                value: "Male",
                label: "Male",
              },
              {
                value: "Female",
                label: "Female",
              },
            ]}
          />
          <Button
            type="primary"
            icon={<SearchOutlined />}
            style={{ float: "right" }}
            onClick={() => handleName()}
          >
            Search
          </Button>
        </Space>
      </Card>
      <Card>
        {checking ? (
          <>
            <TableHook
              columns={columns}
              dataTableList={listActor}
              rowKey={"actorID"}
              setVisible={isModalVisibleEdit}
            />
            <DrawerView
              dataDetail={dataDetail}
              isModalVisible={isModalVisibleView}
              setIsModalVisible={setIsModalVisibleView}
            />
          </>
        ) : (
          <>
            <h1>Ko có</h1>
          </>
        )}
      </Card>
    </Space>
  );
};

export default ActorInfo;
