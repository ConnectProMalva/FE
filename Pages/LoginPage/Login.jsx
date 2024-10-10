import React, { useState, useEffect } from 'react';
import Modal from '../../components/Modal';
import LoginForm from './LoginForm';
import LandingPage from '../LandingPage/LandingPage';

const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    // Open the modal when the component mounts
    setIsModalOpen(true);
  }, []);

  return (
    <div className="login-page">
<LandingPage />
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        title="Welcome Back"
        paragraph="Login to apply to jobs and track your applications"
      >
        <div className=''>
          <LoginForm />
        </div>
      </Modal>
    </div>
  );
};

export default Login;
