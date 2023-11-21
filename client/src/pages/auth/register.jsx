import { Container } from "react-bootstrap"
import Card from "../../components/common/card";
import { Link, useNavigate } from 'react-router-dom';

import { Form } from 'react-bootstrap';

import { Controller, useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { toast } from 'react-toastify';

import { useState, useRef } from "react";
import SubmitButton from "../../components/common/submitButton";
//Apollo Client
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../graphQL/mutation/mutations";


function Register({ onLogin }) {
    // const [user, setUser] = useState({
    //     userName: '',
    //     email: '',
    //     password: ''
    // })
    // const { username, email, password } = user;

    // const schema = Joi.object({
    //     username: Joi.string().required(),
    //     email: Joi.string()
    //         .required()
    //         .email({ tlds: { allow: false } }),
    //     password: Joi.string().min(6).required(),
    // });
    // const {
    //     control,
    //     handleSubmit,
    //     formState: { errors },
    //     reset,
    // } = useForm({
    //     resolver: joiResolver(schema),
    //     defaultValues: {
    //         username: "",
    //         email: "",
    //         password: "",
    //     },
    // });


    // const [createUser, { loading, error }] = useMutation(CREATE_USER);
    // const [errorMessage, setErrorMessage] = useState("");
    // const navigate = useNavigate();
    // const onSubmit = async (data, event) => {
    //     event.preventDefault();
    //     const { username, email, password } = data;
    //     try {
    //         const result = await createUser({
    //             variables: {
    //                 input: {
    //                     username,
    //                     email,
    //                     password,
    //                 },
    //             },
    //         });
    //         onLogin(result.data.createUser);
    //         navigate("/");
    //     } catch (error) {
    //         console.log(error.message);
    //         setErrorMessage(error.message);
    //     }
    // };

    // const onChange = (e) => {
    //     setUser({ ...user, [e.target.name]: e.target.value })
    // }

    const navigate = useNavigate();
    const passwordConfirmRef = useRef();
    const [user, setUser] = useState({
        userName: '',
        email: '',
        password: ''
    })
    // const [loading, setLoading] = useState(false);
    const { username, email, password } = user;

    const [createUser, { loading, error }] = useMutation(CREATE_USER);
    const [errorMessage, setErrorMessage] = useState(""); // Error message state
    const handleSubmit = async (e) => {
        console.log('submut');
        e.preventDefault();
        if (password !== passwordConfirmRef.current.value) {
            console.log('Passwords dont match');
            return
        }
        console.log(username, email, password);
        try {
            const result = await createUser({
                variables: {
                    input: {
                        username,
                        email,
                        password,
                    },
                },
            });
            // onLogin(result.data);
            console.log("success", result.data);
            navigate('/');
        } catch (err) {
            console.log(err.response);
            setErrorMessage(error.message);
        }
    }

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <>
            <Container>
                <Card title='Register' authform>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="username"
                                name="username"
                                required
                                value={username}
                                onChange={onChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={email}
                                onChange={onChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" onChange={onChange}
                                value={password} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password-confirm">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password confimation" ref={passwordConfirmRef} name="password"
                                required />
                        </Form.Group>
                        <SubmitButton loadingState={loading}>
                            {loading ? ' ... ' : 'Submit'}
                        </SubmitButton>
                    </Form>
                    <div>
                        <span>Already user? &nbsp;
                            <Link to="/login">Login</Link>
                        </span>
                    </div>
                </Card>
            </Container>
        </>
    )
}

export default Register;
