import { Modal } from "antd";

const CustomModal = ({
  children,
  cancelText = "Cancelar",
  footer,
  isVisible,
  handleCancel,
  handleOk,
  okText = "Confirmar",
  title = "¿Está seguro que desea realizar esta acción?",
  width = 600,
}) => {
  return (
    <Modal
      title={title}
      open={isVisible}
      onOk={handleOk}
      okText={okText}
      onCancel={handleCancel}
      cancelText={cancelText}
      footer={footer}
      width={width}
      destroyOnClose
      style={{ borderTop: "3px solid #fec60d" }}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
