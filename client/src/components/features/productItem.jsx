// import Card from 'react-bootstrap/Card';
import holder from '../../assets/holder.jpg';
import * as styles from './productItem.css'
import { Link } from 'react-router-dom';

function ProductItem(props) {
    const { product } = props;
    return (
        <Link className={styles.itemBox} to={`/product/${product.id}`}>
            <img className={styles.holder} src={holder} alt={product.name} />
            <h5 className={styles.productName}>{product.name}</h5>
            <p className={styles.price}>{product.price} AUD</p>
        </Link>
    )

}

export default ProductItem;