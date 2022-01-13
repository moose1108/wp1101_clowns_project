import React from 'react';
import '../Css/Sign_in.css';
import { Form, Input, Button, Checkbox, Modal, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Layout} from 'antd';
import { useState } from 'react';
import axios from '../axios.js'
const NormalLoginForm = ({Login,password,username,confirmpassword,setConfirmpassword,setPassword,setUsername}) => {
const onFinish = values => {
    console.log('Received values of form: ', values);
};
const login = async () =>{
    const {
        data: { Message, status },
    } = await axios.get('/api/Check', {
        params: {
          username,
          password
        },  
      });
    if(status)
    {   
        message.success({
            content:Message
        })
        setPassword("");
        setUsername("");
        setConfirmpassword("");
        Login(true);
    }
    else
    {
        message.error({
            content:Message
        })
    }
}
const [isModalVisible, setIsModalVisible] = useState(false);
const showModal = () => {
    setIsModalVisible(true);
};
const handleOk = async () => {
    if(password !== "" && username !=="" && confirmpassword !=="")
    {
        if(password === confirmpassword)
        {   
            const {
                data: { Message,status},
                } = await axios.post('/api/Register', {
                username,
                password
            });
            if(status)
            {
                setPassword("");
                setUsername("");
                setConfirmpassword("");
                message.success({
                    content:Message
                })
                setIsModalVisible(false);
                window.location.reload(true);
            }
            else
            {
                message.error({
                    content:Message
                })
            }
        }
        else {
            message.error({
                content:'Confirmed Passowrd is not same!'
            })
        }
    }
    else
    {
        message.error({
            content:'Username or Password or ConfirmPassword is empty'
        })
    }
};
const handleCancel = () => {
    setIsModalVisible(false);
    setPassword("");
    setUsername("");
    setConfirmpassword("");
    window.location.reload(true);
};
return (
        <Layout style={{ backgroundColor: "azure", height: "100%", }}>
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
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" onChange={(e)=>{setUsername(e.target.value)}}/>
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
                                onChange={(e)=>{setPassword(e.target.value)}}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox style={{ color: "azure" }}>Remember me</Checkbox>
                            </Form.Item>
                            <a className="login-form-forgot" href="" >
                                Forgot password
                            </a>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button" onClick={login} style={{ color: "black", background: "white", borderColor: "black", borderRadius: "10px", }} >
                                Log in
                            </Button>
                            Or <Button className='register' type="primary" style={{ color: "black", background: "white", borderRadius: "10px" }} onClick={showModal}> register Now!</Button>
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
                                <Input value={username} placeholder='Username' prefix={<UserOutlined className='registerinput' />} onChange={(e) => { setUsername(e.target.value) }}></Input>
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
                                    value={password}
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                    onChange={(e) => { setPassword(e.target.value) }}
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
                                    value={confirmpassword}
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Confirm your Password"
                                    onChange={(e) => { setConfirmpassword(e.target.value) }}
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