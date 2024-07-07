import React, { useState } from 'react';

function User(props) {

    const data={name:'',email:''}
    const[inputData,setInputData]=useState(data)
// function handleData(e){
//     setInputData({...inputData,name:e.target.value,email:e.target.value})
//     console.log("input data",inputData)
// }
const submitdata=(e)=>{
console.log("input data",inputData)
e.preventDefault()
}
    return (
        <div>
            <form onSubmit={submitdata}>
                <div>
                    <h1> User registration</h1>
                </div>
                <div>
                    <input type='text' 
                    placeholder='Enter your name' name='name' value={inputData.name} onChange={e=>setInputData({...inputData,name:e.target.value})}></input>
                </div>
                <div>
                <input type='text' 
                    placeholder='Enter your email' name='name' value={inputData.email} onChange={e=>setInputData({...inputData,email:e.target.value})}></input>
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
            
        </div>
    );
}

export default User;