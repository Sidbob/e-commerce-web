
import { useState, useEffect } from "react";
import axios from 'axios'
// import { Button } from "react-bootstrap";
import { Paper, TextField } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import { Link, Navigate } from 'react-router-dom';
// import { userRegisterAction } from "./Action/user.action";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";




const RegisterPage = () => {

    // const dispatch = useDispatch();
    const Navigate = useNavigate();

    const paperStyle = { padding: '40px 20px', width: 400, margin: '50px auto' }
    const input = { margin: '5px' }
    const btn = { backgroundColor: 'royalblue', color: 'white', width: '120px', padding: '10px' }


    // const url="http://localhost:9027/user/add-category"
    const [user, setUser] = useState({
        name: "", email: "", password: "", contact_number: ""
    })

    // const [productImage, setProductImage] = useState('')


    const handle = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({ ...user, [name]: value });
    }

    const PostData = (e) => {
        e.preventDefault();

        const { name, email, password, contact_number } = user;

        // const formData = new FormData();

        // formData.append('myImage', productImage);
        // formData.append('firstName', user.firstName);
        // formData.append('lastName', user.lastName);
        // formData.append('email', user.email);
        // formData.append('password', user.password);
        // formData.append('number', user.number);


        axios.post('http://localhost:3000/user/acregister',{
        //  formData
            name, email, password, contact_number}

        )
            .then(function (response) {
                console.log(response.data.data);
                setUser(response.data.data)
                Navigate('/Login')
            })
            .catch(function (error) {
                console.log(error);
            })
    }



    // const Register = () => {
    //     dispatch(userRegisterAction(user))
    // }





    return (
        <>
            {/* <img src="http://localhost:9027/undefined_1648704521497.jpg"/> */}

            <Paper elevation={6} style={paperStyle} >

                <h2>Sign Up</h2>
                <p>Fill Below Form For Registration</p>
                <form>

                    <TextField style={input} id="demo-helper-text-misaligned-no-helper" className="add-cat-input" label="Enter FirstName" type="text" name="name"
                        value={user.name}
                        onChange={handle} />

                    {/* <TextField style={input} id="demo-helper-text-misaligned-no-helper" className="add-cat-input" label="Enter LastName" type="text" name="lastName"
                        value={user.lastName}
                        onChange={handle} /> */}

                    <TextField style={input} id="demo-helper-text-misaligned-no-helper" className="add-cat-input" label="Enter Email" type="text" name="email"
                        value={user.email}
                        onChange={handle} />

                    <TextField style={input} id="demo-helper-text-misaligned-no-helper" className="add-cat-input" label="Enter Password" type="password" name="password"
                        value={user.password}
                        onChange={handle} />

                    <TextField style={input} id="demo-helper-text-misaligned-no-helper" className="add-cat-input" label="Enter Number" type="text" name="contact_number"
                        value={user.contact_number}
                        onChange={handle} />

                    {/* <TextField style={input} id="demo-helper-text-misaligned-no-helper" className="add-cat-input" label="Enter UserRole Id" type="text" name="userRoleId"
                        value={user.userRoleId}
                        onChange={handle} /> */}
                    <br /><br />

                    {/* <label for="myfile">Select a file</label>
                    <input type="file" id="myfile" name="myfile" onChange={(e) => {
                        console.log(e.target.files[0])
                        setProductImage(e.target.files[0])
                    }} /> */}

                    <Button style={btn} variant="contained" type="submit" name="signup" id="signup"
                        value="register"
                        onClick={PostData}
                        // onClick={Register}

                    >Sign Up</Button>
                    <br /><br />
                    <Link to="/login"><h6>Already have an Account? Login Here.</h6></Link>
                </form>
                <br />

            </Paper>






        </>
    )
}

export default RegisterPage;