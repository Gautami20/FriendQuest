import './Register.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import React, { useState } from 'react';

function Register() {
    
    const [user, setUser] = useState({
        name:"",
        email:"",
        password:"",
        dob:"",
        age:"",
        phone:"",
        aadhar:"",
        address:""
    })

    const handleChange = e => {
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    const Register = () => {
        const {name, email, password, dob , age, phone, aadhar, address}= user;
        if(name && email &&  password && phone && aadhar){
            axios.post("http://localhost:9002/Register", user)
            .then(res=>console.log(res))
            .catch(err=> console.log(err));
        }
        else {
            alert("invalid input");
        }
        
    }
    
    return (
        <main className="register" >
            {console.log("User", user)}

            <div className="register-contain">

                <div className="register-text">
                    <h1>Create New Account</h1>
                    <p>Already Registered? <Link to='/login' className='reg-text2'>Sign In</Link> Now!</p>
                </div>

                <div className="register-form-contain" >
                    <form className="register-form" >
   
                        <div className="row ">
                            <div className="form-group col mb-3" >
                                <label className="form-label">NAME</label>
                                <input className="form-control" type="text" placeholder='Enter your Name' name='name'  value={user.name} onChange={handleChange}/>
                            </div>

                            <div className="form-group col mb-3" >
                                <label className="form-label">AGE</label>
                                <input className="form-control" type="number"  placeholder='Enter your Age'  name='age'  value={user.age} onChange={handleChange}/>
                            </div>

                            <div className="form-group col mb-3" >
                                <label className="form-label">PHOTO</label>
                                <input className="form-control" type='file' name='photo'  />
                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group col mb-3" >
                                <label className="form-label">EMAIL</label>
                                <input className="form-control" type="email" placeholder='Enter your Email' name='email'  value={user.email} onChange={handleChange} />
                            </div>

                            <div className="form-group col mb-3" >
                                <label className="form-label">GENDER</label>
                                <select className="form-control" name='gender' value={user} onChange={handleChange}>
                                    <option value="">Select Gender</option>
                                    <option value="Female">Female</option>
                                    <option value="Male">Male</option>
                                </select>
                            </div>

                            <div className="form-group col mb-3" >
                                <label className="form-label">ADDRESS</label>
                                <input className="form-control" type="text" maxlength="20" placeholder='Enter your Address' name='address' value={user.address} onChange={handleChange}/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group col mb-3" >
                                <label className="form-label">PASSWORD</label>
                                <input className="form-control" type="password" placeholder='Create a Password' name='password'  value={user.password} onChange={handleChange}/>
                            </div>

                            <div className="form-group col mb-3" >
                                <label className="form-label">PHONE NUMBER</label>
                                <input className="form-control" type="tel" maxlength="10" placeholder='Enter your Phone Number' name='phone' value={user.phone} onChange={handleChange}/>
                            </div>
                            <div className="form-group col mb-3" style={{visibility:'hidden'}}>
        =
                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group col mb-3" >
                                <label className="form-label">DATE OF BIRTH</label>
                                <input className="form-control" type="date" name='dob' value={user.dob} onChange={handleChange}/>
                            </div>

                            <div className="form-group col mb-3" >
                                <label className="form-label">AADHAR NUMBER</label>
                                <input className="form-control" type="number" placeholder='Enter your Aadhar Number' name='aadhar' value={user.aadhar} onChange={handleChange}/>
                            </div>

                            <div className="form-group col mb-3" style={{visibility:'hidden'}}>
        
                            </div>
                        </div>
                        
                    </form>
                </div>


                <Link to="/Login" className="register-button" onClick={Register}>Sign Up</Link>



            </div>

        </main>
    );
}

export default Register;