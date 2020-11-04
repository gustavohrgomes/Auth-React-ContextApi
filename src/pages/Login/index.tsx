import React from "react";
import {useAuth} from "../../contexts/auth";

const Login: React.FC = () => {
  const { signed, login } = useAuth();

  console.log(signed);

  async function handleLogin() {
    await login({
      name: 'john doe',
      email: 'johndoe@email.com'
    });
  }

  return (
    <div>
      <div className="app">
        <div className="form-login">
          <h1>Faça seu login</h1>
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
