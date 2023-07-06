import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here, such as making an API call
    
    // Example validation: Check if email and password are not empty
    if (username && password) {
      console.log('Login successful!');
      // Reset the form
      setUserName('');
      setPassword('');
    } else {
      console.log('Please fill in all the fields.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        UserName:
        <input
          type="username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginForm;
