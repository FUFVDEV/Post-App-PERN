import { useDispatch, useSelector } from "react-redux";

import { Button, Col, Form, Input, Row } from "antd";
import { EditOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { setHandleChange } from "redux/slices/postSlice";

const PostForm = ({ handleCreate, handleEdit, isEditMode }) => {
  const dispatch = useDispatch();

  const { post } = useSelector(state => state.post);

  const handleChange = ({ target: { name, value } }) => {
    dispatch(setHandleChange({ name, value }));
  };

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

export default PostForm;
