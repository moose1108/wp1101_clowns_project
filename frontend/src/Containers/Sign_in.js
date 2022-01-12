import React from 'react';
import '../Css/Sign_in.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { PageHeader } from 'antd';
const NormalLoginForm = ({Login}) => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };
  const login = () =>{
      Login(true);
  }
  return (
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
                    <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <a className="login-form-forgot" href="">
                    Forgot password
                    </a>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button" onClick={login}>
                    Log in
                    </Button>
                    Or <a href="https://www.google.com/">register now!</a>
                </Form.Item>
                </Form>
            </div>
        </div>
  );
};
export default NormalLoginForm;