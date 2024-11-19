import React, { useState, useEffect } from 'react';
import Modal from '../../components/Modal';
import SignupForm from './SignupForm';
import LandingPage from '../LandingPage/LandingPage';

const Signup = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        setIsModalOpen(true);
    }, []);

    return (
        <div>
            <LandingPage />
            <Modal
                isOpen={isModalOpen}
                closeModal={closeModal}
                title="Choose a profile"
                modalTitleStyle={'text-left'}
                paragraph="Join hundreds of artisans and companies vetting for the best on ConnectPro"
            >
                <SignupForm />
            </Modal>
        </div>
    );
};

export default Signup;
