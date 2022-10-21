import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

import { DELETE_ACTION, EDIT_ACTION } from "consts";
import { setEditMode, setPost } from "redux/slices/postSlice";

const PostTable = ({ setIsModalVisible, userId }) => {
  const dispatch = useDispatch();

  const data = useSelector(state => state.post.posts);
  const loading = useSelector(state => state.post.isLoading);

  const handleAction = ({ action, payload }) => {
    const options = {
      [EDIT_ACTION]: () => dispatch(setPost(payload)),
      [DELETE_ACTION]: () => {
        setIsModalVisible(true);
        userId.current = payload;
      },
    };

    options[action]();
    dispatch(setEditMode(action === EDIT_ACTION));
  };

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

export default memo(PostTable);
