
import { useQuery } from '@apollo/client';

import { useState, useEffect, useRef } from 'react';
import { Container } from "react-bootstrap";
import SubHeader from "../components/common/subheader"
import ProductsList from "../components/features/productList";
import { GET_TOOLS } from '../graphQL/queries/queries';


const Products = () => {
  const { loading, error, data, refetch } = useQuery(GET_TOOLS)
  
  // useEffect(() => {
  //   refetch(); // Refetch the query
  // }, []);
  useEffect(() => {
    refetch(); // Refetch the query
  }, []);
  if (loading) return <p>Loading.</p>;  
  if (error) return <p><Error></Error></p>; 
 
  return (
    <Container>
      <SubHeader
        title='All Products'
      />
      {/* {data.tools.map(data => {
        <p>{data.name}</p>
      })} */}
      {<ProductsList products={data.tools} />}
      
    </Container>
  )
}
export default Products;    