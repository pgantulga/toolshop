import { useState } from 'react';
import { Container, Form } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import SubmitButton from "../../components/common/submitButton";

import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../graphQL/mutation/mutations"


// Locals
import Card from "../../components/common/card";


const Login = ({ onLogin }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const { email, password } = user;
    const handleTextChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const [loginUser, { loading, error }] = useMutation(LOGIN_USER); // loginUser - The mutation function
    const [errorMessage, setErrorMessage] = useState(""); // Error message state
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await loginUser({
                variables: {
                    input: {
                        email,
                        password,
                    },
                },
            });
            onLogin(result.data.loginUser);
            toast.success('Success')
            console.log(result.data);
            navigate('/dashboard');
        } catch (err) {
            setErrorMessage(err.message);
            toast.error(err.message);
            console.log(err.message);
        }
    }
    return (
        <>
            <Container>
                <Card title="Login">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" name="email" value={email} onChange={handleTextChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={handleTextChange} required />
                        </Form.Group>
                        <SubmitButton loadingState={loading}>
                            {loading ? ' ... ' : 'Submit'}
                        </SubmitButton>
                    </Form>
                    <div>
                        <span>Not signed up yet? &nbsp;
                            <Link to="/register">Sign Up</Link>
                        </span>
                    </div>
                </Card>
            </Container>
        </>
    )
}

export default Login

