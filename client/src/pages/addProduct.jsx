import { useState } from "react"

import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";

import SubmitButton from "../components/common/submitButton";
import Card from "../components/common/card";
import { useMutation } from "@apollo/client";
import { ADD_TOOL } from "../graphQL/mutation/mutations";
import { joiResolver } from "@hookform/resolvers/joi";

import Joi from "joi";

function AddProduct(props) {
    const schema = Joi.object({
        name: Joi.string().required(),
        price: Joi.number().required()
    });
    const { control, handleSubmit, formState: { errors },
    } = useForm({
        resolver: joiResolver(schema),
        defaultValues: {
            name: "",
            price: 0,
        },
    });
    console.log(errors);
    const user = props.user;
    const [productData, setProductData] = useState({
        name: "",
        price: 0,
    })
    const { name, price } = productData;
    const [addTool, { loading, error }] = useMutation(ADD_TOOL)
    const [errorMessage, setErrorMessage] = useState(""); // Error message state

    const onSubmit = async (data, e) => {
        e.preventDefault();
        console.log('onsbyumti')
        const {name, price} = data;
        try {
            const result = await addTool({
                variables: {
                    input: {
                        name,
                        price
                    },
                },
            });
            console.log(result.data);
        } catch (error) {
            console.log(error.message);
            setErrorMessage(error.message)
        }
    }
    // const handleTextChange = (e) => {
    //     const { name, value } = e.target;
    //     setProductData({ ...productData, [name]: value })
    // }
    return (
        < Container >
            <Card title="Add Product">
                <Form noValidate="noValidate" onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="name"
                        control={control}
                        render={({ field }) => (
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>Product name</Form.Label>
                                <Form.Control
                                    {...field}
                                    type="text"
                                    placeholder="Product name"
                                    name="name"
                                />
                            </Form.Group>
                        )}
                    />
                    <Controller
                        name="price"
                        control={control}
                        render={({ field }) => (
                            <Form.Group className="mb-3" controlId="price">
                                <Form.Label>Product price</Form.Label>
                                <Form.Control
                                    {...field}
                                    type="number"
                                    placeholder="Product price"
                                    name="price"
                                />
                            </Form.Group>
                        )}
                    />

                    {/* <Form.Group className="mb-3">
                        <Form.Label>Product Price</Form.Label>
                        <Form.Control value={price} type="number" placeholder="Product price" name="price" onChange={handleTextChange} />
                    </Form.Group> */}

                    <SubmitButton type="submit">
                       Submit
                    </SubmitButton>
                </Form>
            </Card>
        </Container >
    )
}

export default AddProduct;