import React, { useState } from 'react';

function Registration(props) {

    const[person,setName]=useState({firstName:'',lastName:''})
   function  onSubmitData(e){

    console.log("person data",person)
   e.preventDefault()
   }
    return (
        <div>
            <form  onSubmit={onSubmitData}>
            {/* <input type='text' value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})}></input>
            <input type='text' value={name.lastName} onChange={e=>setName({...name,lastName:e.target.value})}></input>
            <h2>Your first name is -{name.firstName}</h2>
            <h2>Your last name is -{name.lastName}</h2> */}
            <h2>Registration</h2>
            <lable>First Name</lable>
            <input type='text' value={person.firstName} onChange={e=>setName({...person,firstName:e.target.value})}></input>
            <h2>Last Name</h2>
            <input type='text' value={person.lastName} onChange={e=>setName({...person,lastName:e.target.value})}></input>
            <h2>Your first name is -{person.firstName}</h2>
            <h2>Your last name is -{person.lastName}</h2> 
            <button type='submit'>submit</button>
            </form>
        </div>
    );
}

export default Registration;