import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Form, Input, Row } from "antd";
import { EditOutlined, PlusCircleOutlined } from "@ant-design/icons";

import { createPost, editPost } from "redux/actions/postActions";
import { setHandleChange } from "redux/slices/postSlice";

const PostForm = () => {
  const dispatch = useDispatch();

  const post = useSelector(state => state.post.post);
  const isEditMode = useSelector(state => state.post.isEditMode);

  const handleChange = ({ target: { name, value } }) => {
    dispatch(setHandleChange({ name, value }));
  };

  const handleCreate = data => dispatch(createPost(data));
  const handleEdit = data => dispatch(editPost(data));

  return (
    <Form layout="vertical">
      <Row gutter={24} justify="space-between" align="bottom">
        <Col span={10}>
          <Form.Item label="Nombre">
            <Input
              name="name"
              value={post.name}
              onChange={handleChange}
              size="large"
              placeholder="Ingrese un nombre"
            />
          </Form.Item>
        </Col>
        <Col span={10}>
          <Form.Item label="Descripción">
            <Input
              name="description"
              value={post.description}
              onChange={handleChange}
              size="large"
              placeholder="Ingrese un descripción"
            />
          </Form.Item>
        </Col>
        <Col span={4} style={{ display: "flex", justifyContent: "center" }}>
          <Form.Item>
            <Button
              type="primary"
              icon={isEditMode ? <EditOutlined /> : <PlusCircleOutlined />}
              size="large"
              onClick={() =>
                isEditMode
                  ? handleEdit(post)
                  : handleCreate({ name: post.name, description: post.description })
              }
              disabled={!post.name || !post.description}
            >
              {isEditMode ? "Editar" : "Crear"}
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default memo(PostForm);
