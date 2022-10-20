import React, { useState } from 'react';
import Listcomponent from '../pure/listcomponent';
import Formlist from '../pure/formlist';

const List = () => {

    const defaultContact = [
        {name: 'Juan Carvajal', email: 'jjcarvajal@unicauca.edu.co', phone: '3136908708', connected: true},
        {name: 'Tatiana Gomez', email: 'anyit@unicauca.edu.co', phone: '3107473205', connected: false}
    ];

    const [contacts, setcontacts] = useState(defaultContact);

    function changeStateContact(contact) {
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts[index].connected = !tempContacts[index].connected;
        setcontacts(tempContacts);
    }

    function addContact(contact) {
        const tempContacts = [...contacts];
        tempContacts.push(contact);
        setcontacts(tempContacts);
    }

    function removeContact(contact) {
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.splice(index,1);
        setcontacts(tempContacts);
    }

    return (
        <div className='col-12 d-flex gap-5'>
            <div class="card">
                <div class="card-header p-3">
                    CONTACTS
                </div>
                <div class="card-body">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope='col'>Name</th>
                                <th scope='col'>Email</th>
                                <th scope='col'>Phone</th>
                                <th scope='col'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map((contact, index) => {
                                return (
                                    <Listcomponent 
                                        key={index} 
                                        contacts={contact}
                                        complete={changeStateContact}
                                        remove={removeContact}>
                                    </Listcomponent>
                                    )
                                }
                            )}                        
                        </tbody>
                    </table>    
                </div>
            </div>
            <div class="card">
                <div class="card-header p-3">
                    ADD CONTACT
                </div>
                <div class="card-body">
                    <Formlist
                        add={addContact}>
                    </Formlist>    
                </div>
            </div>
        </div>
    );
};


export default List;
