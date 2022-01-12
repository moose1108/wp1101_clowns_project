import React from 'react';
import '../Css/Sign_in.css';
import { Form, Input, Button, Checkbox,Modal,message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Layout,Image } from 'antd';
import { useState } from 'react';
const NormalLoginForm = ({Login}) => {
  const [password,setPassword] = useState("");
  const [username,setUsername] = useState("");
  const [confirmpassword,setConfirmpassword] = useState("");
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };
  const login = () =>{
      Login(true);
  }
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    if(password !== "" && username !=="" && confirmpassword !=="")
    {
        if(password === confirmpassword)
        {
            setPassword("");
            setUsername("");
            setConfirmpassword("");
            message.success({
                content:'Register Success !'
            }
            )
            setIsModalVisible(false);
        }
        else
        {
            message.error({
                content:'Confirmed Passowrd is not same!'
            }
            )
        }
    }
    else
    {
        message.error({
            content:'Username or Password or ConfirmPassword is empty'
        }
        )
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setPassword("");
    setUsername("");
    setConfirmpassword("");
  };
  return (
       <Layout style={{backgroundColor:"azure",height:"100%",}}>
            <div className='space'>
                <div>
                    <h1 className='title'> 
                        Log in
                    </h1>
                    <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                            ]}
                        >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                            ]}
                        >
                            <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                            />
                        </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox style={{color:"azure"}}>Remember me</Checkbox>
                        </Form.Item>
                        <a className="login-form-forgot" href="" >
                        Forgot password
                        </a>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" onClick={login}  style={{ color:"black",background: "white", borderColor: "black",borderRadius:"10px",}}>
                        Log in
                        </Button>
                        Or <Button className='register' type="primary" style={{color:"black",background:"white",borderRadius:"10px"}} onClick={showModal}> register Now!</Button>
                    </Form.Item>
                    </Form>
                    <Modal title="Register" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                        <Form>
                        <Form.Item
                            name="username"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                            ]}
                        >
                        <Input placeholder='Username' prefix={<UserOutlined className='registerinput' />} onChange={(e)=>{setUsername(e.target.value)}} value = {username}></Input>
                        </Form.Item>
                        <br />
                        <Form.Item
                            name="password"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                            ]}
                        >
                            <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                            onChange={(e)=>{setPassword(e.target.value)}}
                            value={password}
                            />
                        </Form.Item>
                        <br />
                        <Form.Item
                            name="confirm password"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your Password again!',
                            },
                            ]}
                        >
                            <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Confirm your Password"
                            onChange={(e)=>{setConfirmpassword(e.target.value)}}
                            value = {confirmpassword}
                            />
                        </Form.Item>
                        </Form>
                    </Modal>
                </div>
            </div>
        </Layout>

  );
};
export default NormalLoginForm;