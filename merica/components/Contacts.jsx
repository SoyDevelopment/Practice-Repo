import React from 'react'

const Contacts = ({Name, Number}) => {

    function formatPhoneNumber(phoneNumberString) {
        var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
        var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            return '(' + match[1] + ') ' + match[2] + '-' + match[3];
        }
        return null;
    }

  return (
    <>
        <li>
            {`${Name}: ${formatPhoneNumber(Number)}`}
        </li>
    </>
  )
}

export default Contacts