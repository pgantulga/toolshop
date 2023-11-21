import * as styles from './card.css'

const Card = ({title, children}) => {
    return (
        <div className={styles.container}>
            <div className={styles.leadCard}>
            <h2>{title}</h2>
            <div>{children}</div>
            </div>    
        </div>
    )
}

export default Card;