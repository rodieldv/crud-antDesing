import { Modal, Button, Form, Input, DatePicker } from 'antd';
import React, {useState} from 'react';

const ModalForm = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const { TextArea } = Input;

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
          <Button type="primary" onClick={showModal}>
            Open Modal
          </Button>
          <Modal title="Create Company" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <Form>
                <Input placeholder="Name Company" />
            </Form>
            <Form style={{marginTop: '20px'}}>
                <DatePicker style={{width: '100%'}}/>
            </Form>
            <Form style={{marginTop: '20px'}}>
                <TextArea rows={4} />
            </Form>
          </Modal>
        </>
      );
}
 
export default ModalForm;