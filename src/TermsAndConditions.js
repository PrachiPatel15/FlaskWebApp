import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TCPage = () => {
  const navigate = useNavigate();
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setCheckboxChecked(event.target.checked);
  };

  const handleSubmit = () => {
    if (checkboxChecked) {
      // Perform submit action
      navigate('/otp');
    }
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
      textAlign: 'left',
    },
    checkboxContainer: {
      display: 'flex',
      alignItems: 'center',
      marginTop: '20px',
    },
    checkboxLabel: {
      marginLeft: '10px',
    },
    submitButton: {
      marginTop: '20px',
      padding: '10px 20px',
      fontSize: '18px',
      backgroundColor: 'blue',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.content}>
        <h1 style={{ textAlign: 'center' }}>Terms and Conditions</h1>
        <ol>
          <li>Acceptance of Terms: By accessing or using this website/service, you agree to be bound by these terms and conditions.</li>
          <li>Intellectual Property: All content on this website/service, including text, graphics, logos, and images, is protected by intellectual property rights and may not be used without permission.</li>
          <li>Privacy and Data Protection: We collect and process personal information in accordance with our privacy policy, which you should review before using this website/service.</li>
          <li>User Conduct: You agree not to engage in any activity that is unlawful, harmful, or disruptive while using this website/service.</li>
          <li>Third-Party Links: This website/service may contain links to third-party websites. We are not responsible for the content or actions of these websites, and you access them at your own risk.</li>
          <li>Termination: We reserve the right to terminate or suspend access to this website/service at any time without prior notice.</li>
          <li>Disclaimer of Warranties: This website/service is provided "as is," and we make no warranties or representations of any kind, whether express or implied.</li>
          <li>Limitation of Liability: We shall not be liable for any direct, indirect, incidental, or consequential damages arising out of your use or inability to use this website/service.</li>
          <li>Governing Law: These terms and conditions shall be governed by and construed in accordance with the laws of [Jurisdiction]. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in [Jurisdiction].</li>
          <li>Modifications: We reserve the right to modify or update these terms and conditions at any time. Changes will be effective immediately upon posting on this website/service.</li>
        </ol>
        <div style={styles.checkboxContainer}>
          <input
            type="checkbox"
            checked={checkboxChecked}
            onChange={handleCheckboxChange}
          />
          <label style={styles.checkboxLabel}>
            I have read and agree to the terms and conditions.
          </label>
        </div>
        <button style={styles.submitButton} onClick={handleSubmit}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default TCPage;
