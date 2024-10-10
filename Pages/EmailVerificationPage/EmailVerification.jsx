import React, { useState } from 'react'
import Modal from '../../components/Modal'
import EmailVerificationForm from './EmailVerificationForm'

const EmailVerification = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="emailVerification-page">
    <h1 className="text-3xl font-bold mb-8">Email Verification Page</h1>
    
    <button onClick={openModal} className="bg-red-200 hover:bg-white text-neutral font-bold py-2 px-4 rounded">
      Open Email Verification Modal
    </button>
    <Modal isOpen={isModalOpen} closeModal={closeModal} title="Verify your email" paragraph="We’ve sent a 6-digit code to johndoe@gmail.com. Enter the code below to gain access to your account">
        <div className=''>
            <EmailVerificationForm/>
        </div>
    </Modal>
    </div>
  )
}

export default EmailVerification