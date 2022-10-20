import React from 'react';


const Listcomponent = ( { contacts, complete, remove } ) => {

    function contactConnected() {
        if(contacts.connected) {
            return (<i onClick= {() => complete(contacts)} className="bi-toggle-on" style={{color: 'green', fontWeight: 'bold', cursor: 'pointer'}}></i>)
        }else {
            return (<i onClick= {() => complete(contacts)} className="bi-toggle-off" style={{color: 'grey', cursor: 'pointer'}}></i>)
        }
    }

    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{contacts.name}</span>
            </th>
            <td className='align-middle'>
                <span>{contacts.email}</span>
            </td>
            <td className='align-middle'>
                <span>{contacts.phone}</span>
            </td>
            <td className='align-middle'>
                {contactConnected()}
                <i className="bi-trash" onClick={remove} style={{color: 'tomato', cursor: 'pointer', marginLeft: '1rem'}}></i>
            </td>
        </tr>
    );
};

export default Listcomponent;
