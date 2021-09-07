import axios from 'axios';
import { Modal, Button, Form, Input, message } from 'antd';
import React, {useState} from 'react';

const initialFormValues = {
  created: "",
  description: "",
  email: '',
  name: '',
}

const ModalForm = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [formValues, setFormValues] = useState(initialFormValues);
    const {created, description, name, email} = formValues
    const { TextArea } = Input;

    const handleInputChange = (e) => {

      const changendFormValues = {
          ...formValues,
          [
            e._isAMomentObject
            ? 'created'
            : e.target.name
          ]: e._isAMomentObject ? e.toDate().toDateString() : e.target.value
      }
      
      setFormValues(changendFormValues)
  }

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {

      if(name == '' || email == '') {
        message.error('There are empty required fields');

        return
      }
        
      axios.post(`http://localhost:1337/companies`, formValues)
        .then(res => {
          console.log(res);
          console.log(res.data);

          message.success('The company '+res.data.name+' was successfully saved');

          setIsModalVisible(false);
          setFormValues(initialFormValues);
        })
        .catch(function (error) {
          message.error(error.response.statusText);
      });

        
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
                <Input
                  type="text"
                  required
                  placeholder="Name Company"
                  className="form-control"
                  value={name}
                  name="name"
                  onChange={handleInputChange}
                />
            </Form>
            <Form style={{marginTop: '20px'}}>
                <Input
                  type="date"
                  placeholder="Date Company"
                  className="form-control"
                  value={created}
                  name="created"
                  onChange={handleInputChange}
                />
            </Form>
            <Form style={{marginTop: '20px'}}>
                <Input
                  type="text"
                  placeholder="Email Company"
                  className="form-control"
                  value={email}
                  name="email"
                  onChange={handleInputChange}
                />
            </Form>
            <Form style={{marginTop: '20px'}}>
                <TextArea 
                    rows={4} 
                    value={description}
                    name="description"
                    onChange={handleInputChange}
                />
            </Form>
          </Modal>
        </>
      );
}
 
export default ModalForm;