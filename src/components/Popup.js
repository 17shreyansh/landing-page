// File: src/components/FormPopup.jsx
import React from 'react';
import { Modal } from 'antd';
import CommonForm from './Form';

const FormPopup = ({ visible, onClose }) => {
  return (
    <Modal open={visible} onCancel={onClose} footer={null} centered>
      <CommonForm onFinish={onClose} />
    </Modal>
  );
};

export default FormPopup;
