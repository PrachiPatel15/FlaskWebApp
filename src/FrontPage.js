import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FrontPage = () => {
  const navigate = useNavigate();
  const [accepted, setAccepted] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
    navigate('/terms');
  };

  const handleDecline = () => {
    setAccepted(false);
    window.location.href = 'about:blank';

  };

  const handleCheckboxChange = (event) => {
    setCheckboxChecked(event.target.checked);
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.content}>
        <h1>Welcome to The Website</h1>
        <br></br>
        <p>Content to be Added Here!!</p>
        <p>Three Total Pages</p>
        <p>Some content here</p>
        {/* <br></br> */}
        <p>Thank You</p>
      </div>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={handleAccept}>
          Accept
        </button>
        <button style={styles.button} onClick={handleDecline}>
          Decline
        </button>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  content: {
    border: '2px solid black',
    padding: '20px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '18px',
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default FrontPage;
