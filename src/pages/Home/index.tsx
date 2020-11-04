import React from "react";

import {useAuth} from "../../contexts/auth";

const Home: React.FC = () => {
  const { logout } = useAuth();

  async function handleLogout() {
    logout();
  }

  return (
    <div>
      <div className="app">
        <div className="form-login">
          <h1>Clique para efetuar o logout</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Home;