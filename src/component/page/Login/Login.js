import React, { useState, useEffect } from 'react';

import PropType from 'prop-types'
import './login.css'
import Input from '../../base/Input/Input';
import Button from '../../base/Button/Button';


Login.PropType = {}


function Login() {

  const [input, setInput] = useState('');
  const [userName, setUserName] = useState('');
  const [passWord, setPassWard] = useState('');
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (passWord?.length == 0 || userName?.length == 0) {
      setDisabled(true)
    }
    else {
      setDisabled(false)
    }

  },
    [passWord, userName])

  return (
    <div class="datn-login-system">
      <div class="datn-login-system__container">
        <div class="header">
          <span>Đăng nhập</span>
        </div>
        <div class="login">
          <form action="#">
            <div class="input">
              <i class="fas fa-user-alt"></i>
              <Input type={'text'} placeholder={"Tên đăng nhập"} defaultValue={userName} onChange={(val) => { setUserName(val) }} />
            </div>
            <div class="input">
              <i class="fas fa-lock"></i>
              <Input type={'password'} placeholder={"Mật khẩu"} defaultValue={passWord} onChange={(val) => { setPassWard(val) }} />
            </div>
            <div class="submit">
              <Button name={"Đăng nhập"} background={"#27ae60"} onClick={() => { console.log(userName) }} style={{ width: '100%' }} disabled={disabled} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
