import { useState } from 'react';
import { Link } from 'react-router-dom';

const LogInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');

  return (
    <>
      <h1>Log In</h1>

      {error && <p className='error'>{error}</p>}

      <input
        type='email'
        placeholder='Your email address'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type='password'
        placeholder='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button>Log In</button>
      <Link to='/create-account'>Don't have an account? Create one here</Link>
    </>
  );
};
export default LogInPage;
