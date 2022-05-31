import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';
// import { Button } from "react-bootstrap";
import { Paper, Button, TextField } from '@material-ui/core';
import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
// import { userLoginAction } from './Action/user.action';
// import useStyle from './style';
// import style from './style.css';
import "../CSS/loginpage.css"



function LoginPage() {
    // const classes = useStyle();

    const Navigate = useNavigate();
    // const dispatch = useDispatch()

    // useEffect(() => {
    //     onSubmit()
    // }, [email])

    const [email, setEmail] = useState({ email: "" });
    const [password, setPassword] = useState({ password: "" });

    const paperStyle = { width: "400px", margin: "auto" }
    const input = { margin: '5px' }




    const onSubmit = async () => {
        const data = { email, password };
        await axios.post('http://localhost:3000/user/login', {
            email, password,
        })
            .then(function (response) {
                console.log(response)
                localStorage.setItem('token', response.data.token)
                console.log(response.data.data);
                Navigate('/shop')
                setEmail(response.data.data)
                setPassword(response.data.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    // const onSubmit = () =>{
    //     dispatch(userLoginAction({email,password}))
    // }


    return (
        <>

            <div className='loginpaper'>
            <Formik onSubmit={onSubmit}>
                {(props) => (
                    
                    <Paper elevation={12} style={paperStyle} margin={12}>
                        <Form>
                            <br /><br />
                            <h2>Login Page</h2>

                            <TextField style={input} onChange={(e) => setEmail(e.target.value)} id="demo-helper-text-misaligned-no-helper" className="add-cat-input" label="Enter Email" type="email" name="email" />

                            <TextField style={input} onChange={(e) => setPassword(e.target.value)} id="demo-helper-text-misaligned-no-helper" className="add-cat-input" label="Enter Password" type="password" name="password" />
                            <br /><br />

                            <Button type='submit' variant='contained' color='primary'>Login</Button>
                            <br /><br />
                            <Link to="/register"><h6>Don't Have An Account? Sign Up Here.</h6></Link>
                            <br /><br />
                        </Form>

                    </Paper>
                )}
            </Formik>
            </div>






        </>

    )
}

export default LoginPage;