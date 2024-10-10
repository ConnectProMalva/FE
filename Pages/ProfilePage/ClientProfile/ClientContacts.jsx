import React from 'react'
import Loader from '../../../utils/Loader';
import ClientContactsForm from './ClientContactsForm';

const ClientContacts = () => {
  return (
    <>
    <Loader/>
    <div className=''>
     <ClientContactsForm/>
    </div>

    </>
 
  )
}

export default ClientContacts