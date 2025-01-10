import React from 'react'
import ContactHeading from '../component/Contacts/ContactHeading';
import LeftContact from '../component/Contacts/LeftContact';
import RightContact from '../component/Contacts/RightContact';

function MainContact() {
  return (
    <div>
        <ContactHeading/>
        <div id='contact' className='container flex lg:flex-row flex-col md:justify-start  justify-center md:items-start items-center space-x-4'>
            <LeftContact/>
            <RightContact/>
        </div>
    </div>
  )
}

export default MainContact;