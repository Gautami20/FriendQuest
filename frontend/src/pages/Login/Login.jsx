import './Login.css';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


function Login(){
    const [info, setInfo] = useState({
        email: '',
        password: ''
    });
 const handleChange = (e) => {
        const { name, value } = e.target;
        setInfo({
            ...info,
            [name]: value
        });
    };

const handleLogin = () => {
        const { email, password } = info;
        if (email && password) {
            // Send a POST request to the backend with the form data
            axios.post("http://localhost:9002/login", info)
                .then(res => console.log(res))
                .catch(err => console.log(err));
        } else {
            alert("Invalid input");
        }
    };
    return (
        <main className='login-main'>
            <div className='login'>

                <div className='login-text'>
                    <h1>Login</h1>
                    <Link to="/register" className='login-text2'>Sign Up </Link> to continue
                </div>

                <div className='login-form'>
                    <div className="form-group col mb-3" >
                        <label class="form-label" name="email" >EMAIL</label>
                        <input class="form-control" type="text" name="email" value={info.email}
                            onChange={handleChange}/>
                    </div>

                    <div className="form-group col mb-3" >
                        <label class="form-label" name="password">PASSWORD</label>
                        <input class="form-control" name="password" value={info.password}
                            onChange={handleChange} />
                    </div>
                </div>

                <div className="login-button">
                    <button onClick={handleLogin}>Log In</button>
                </div>
                
            </div>
        </main>
    );
}
export default Login;