import { Col, Row } from "react-bootstrap";
import ProductItem from "./productItem";

function ProductList(props) {
    const { products } = props;
    return (
        <Row className="g-3">
            {products.map((product, id) =>
                <Col key={id}>
                    <ProductItem
                        key={product.id}
                        product={product}
                    />
                </Col>
            )}
        </Row>
    )

}

export default ProductList;