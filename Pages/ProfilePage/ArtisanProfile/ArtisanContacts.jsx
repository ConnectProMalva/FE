import React from 'react'
import Loader from '../../../utils/Loader';
import ContactsForm from './ContactsForm';

const ArtisanContacts = () => {
  return (
    <>
    <Loader/>
    <div className=''>
     <ContactsForm/>
    </div>

    </>
 
  )
}

export default ArtisanContacts