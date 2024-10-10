import React, { useState, useEffect } from 'react';
import ForgotPasswordForm from './ForgotPasswordForm';
import Modal from '../../components/Modal';
import LandingPage from '../LandingPage/LandingPage';

const ForgotPassword = () => {
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
        title="Forgot Password"
        paragraph="Enter the email that was used to create your account. We will send you a reset link to reset your password"
      >
        <div className=''>
          <ForgotPasswordForm />
        </div>
      </Modal>
    </div>
  );
};

export default ForgotPassword;
