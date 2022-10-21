import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Form, Input, Row } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import { resetFilter, setHandleFilter } from "redux/slices/postSlice";
import { getPosts } from "redux/actions/postActions";

const Searcher = () => {
  const dispatch = useDispatch();

  const { name } = useSelector(state => state.post.filter);

  const handleChange = ({ target: { name, value } }) => {
    dispatch(setHandleFilter({ name, value }));
  };

  const handleSearch = () => {
    const valueToFilter = name.trim();
    dispatch(getPosts({ name: valueToFilter }));
  };

  const handleReset = () => {
    dispatch(resetFilter());
    dispatch(getPosts());
  };

  return (
    <Form layout="vertical">
      <Row gutter={24} justify="space-between" align="bottom">
        <Col span={10}>
          <Form.Item label="Nombre">
            <Input
              name="name"
              size="large"
              placeholder="Ingrese un nombre a buscar"
              value={name}
              onChange={handleChange}
            />
          </Form.Item>
        </Col>
        <Col span={8} style={{ display: "flex", justifyContent: "center" }}>
          <Form.Item>
            <Button size="large" onClick={handleReset} disabled={!name}>
              Resetear
            </Button>
          </Form.Item>
          <Form.Item style={{ marginLeft: 10 }}>
            <Button
              type="primary"
              icon={<SearchOutlined />}
              size="large"
              onClick={handleSearch}
              disabled={!name}
            >
              Buscar
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default memo(Searcher);
