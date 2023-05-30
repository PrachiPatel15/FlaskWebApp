import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const OTPPage = () => {
  const [otp, setOTP] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { value } = event.target;
    if (/^[0-9]+$/.test(value)) {
      setOTP(value);
      setError('');
    } else {
      setError('Please enter only digits (0-9).');
    }
  };

  const handleSubmit = () => {
    if (otp.length === 6) {
      axios
        .post('/api/verify-otp', { otp })
        .then((response) => {
          // OTP verification successful
          navigate('/');
        })
        .catch((error) => {
          // Handle error if OTP verification fails
          console.error(error);
        });
    } else {
      setError('Please enter a 6-digit OTP.');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h1>OTP Page</h1>
        <input
          type="text"
          value={otp}
          onChange={handleChange}
          placeholder="Enter OTP"
          style={styles.input}
        />
        {error && <p style={styles.error}>{error}</p>}
        <button style={styles.button} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  box: {
    padding: '20px',
    border: '1px solid black',
    borderRadius: '5px',
    textAlign: 'center',
  },
  input: {
    padding: '10px',
    marginBottom: '10px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: 'blue',
    color: 'white',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
  },
};

export default OTPPage;
