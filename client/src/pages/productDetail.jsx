import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import SubHeader from "../components/common/subheader";
import * as styles from './productDetail.css'
import holder from '../assets/holder.jpg';
import { Container } from 'react-bootstrap';
import Card from "../components/common/card";
// import SubmitButton from "../components/common/submitButton";
import { useQuery } from "@apollo/client";
import { GET_TOOL_BY_ID } from "../graphQL/queries/queries";
import SubmitButton from "../components/common/submitButton";

function ProductDetail({ user }) {
    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_TOOL_BY_ID, {
        variables: {
            "toolId": id
        }
    });
    console.log(user);
    if (loading) return "Loading";
    if (error) return `Error! ${error}`;
    const handleDelete = async (e) => {
        
    }
    return (
        <Container>
            <Card>
                <SubHeader title={data.tool.name} />
                <div className={styles.imageContainer}>
                    <img className={styles.image} src={holder} alt={data.tool.name} />
                    <p className={styles.price}>{data.tool.price}AUD</p>

                </div>
                {user &&
                    <div className={styles.actions}>
                        <Link className={styles.button} to={`/product/edit/${id}`}>Edit</Link>
                        <SubmitButton onClick={handleDelete}>{loading ? 'Loading' : 'Delete'}</SubmitButton>
                    </div>

                }

            </Card>

        </Container>
    )

}

export default ProductDetail;