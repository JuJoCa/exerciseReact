import React, { useRef } from 'react';
import PropTypes from 'prop-types';


const Formlist = ( { add } ) => {

    const nameRef = useRef('');
    const emailRef = useRef('');
    const phoneRef = useRef('');


    function addContact(e) {
        e.preventDefault();
        const newContact = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value,
            connected: false
        }
        add(newContact);
    }

    return (
        <form onSubmit={addContact}>
            <div class="mb-3">
                <label for="nameList" class="form-label">Name</label>
                <input type="text" class="form-control" id="nameList" ref={nameRef}/>
            </div>
            <div class="mb-3">
                <label for="emailList" class="form-label">Email</label>
                <input type="email" class="form-control" id="emailList" ref={emailRef}/>
            </div>
            <div class="mb-3">
                <label for="phoneList" class="form-label">Phone</label>
                <input type="tel" class="form-control" id="phoneList" ref={phoneRef}/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>    
        </form>
    );
};


Formlist.propTypes = {
    add: PropTypes.func.isRequired,
};


export default Formlist;
