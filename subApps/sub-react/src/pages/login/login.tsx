import React from 'react';
import {Redirect} from 'react-router-dom';
import '../../styles/common.scss';

const Login = (props) => {
  const {isLogin, location} = props;
  const {redirect} = '/user'; //location && location.state;
  if (isLogin) {
    return <Redirect to={redirect}/>;
  } else {
    return (
      <div className="login-wrapper">
        <div className="login-container form-container">
          <form>
            <div className="form-item">
              <label>username</label>
              <div className="item-content">
                <input type="text"/>
              </div>
            </div>
            <div className="form-item">
              <label>password</label>
              <div className="item-content">
                <input type="password"/>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
};

export default Login;
