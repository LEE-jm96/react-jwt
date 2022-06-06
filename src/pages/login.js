import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [input, setInput] = useState({});

  const handleOnChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(input);
  };

  return (
    <div>
      <form>
        <input type="text" name="id" onChange={handleOnChange} />
        <input type="password" name="password" onChange={handleOnChange} />
        <button type="submit" onClick={handleSubmit}>
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;
