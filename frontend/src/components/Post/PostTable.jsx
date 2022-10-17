import { Button, Table } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

import { DELETE_ACTION, EDIT_ACTION } from "consts";

const PostTable = ({ data = [], handleAction, loading }) => {
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      render: id => id,
    },
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
      render: name => name,
    },
    {
      title: "Descripción",
      dataIndex: "description",
      key: "description",
      render: description => description,
    },
    {
      title: "Acción",
      key: "action",
      width: 150,
      render: record => (
        <div style={{ width: "100%", display: "flex", justifyContent: "space-evenly" }}>
          <Button
            size="middle"
            icon={<EditOutlined />}
            onClick={() => handleAction({ action: EDIT_ACTION, payload: record })}
          />
          <Button
            size="middle"
            icon={<DeleteOutlined />}
            onClick={() => handleAction({ action: DELETE_ACTION, payload: record.id })}
          />
        </div>
      ),
    },
  ];

  return (
    <Table
      rowKey="id"
      columns={columns}
      dataSource={data}
      loading={loading}
      style={{ marginBottom: 20 }}
    />
  );
};

export default PostTable;
